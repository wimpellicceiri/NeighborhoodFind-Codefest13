_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g,      // print value: {{ value_name }}
    evaluate: /\{%([\s\S]+?)%\}/g,   // excute code: {% code_to_execute %}
    escape: /\{%-([\s\S]+?)%\}/g
}; // escape HTML: {%- <script> %} prints &lt;script&gt;

function getMaxValue(jsonObj)
{
    return jsonObj[jsonObj.length - 1].Data;
}

function getMinValue(jsonObj)
{
    return jsonObj[0].Data;
}

function setFilteredCount(count)
{
    $('#spnFilteredHoods').html(count);
}

var filteredObjArray = filterIndexArray.slice(0);


$(function ()
{
    setFilteredCount(filteredObjArray.length);
    $('#spnTotalHoods').html(filteredObjArray.length);

    var filterFunction = function ()
    {
        filteredObjArray = filterIndexArray.slice(0); // reset filtered array
        $.each($("div[id^=slider]"), function (sliderIndex, sliderElement)
        {
            if ($(this).attr('searchEnabled') == "true")
            {
                var currPropertyArray = propertyData[$(sliderElement).attr('data-PropertyID')];
                var lowValue = $(sliderElement).slider("values", 0);
                var highValue = $(sliderElement).slider("values", 1);
                if (getMinValue(currPropertyArray) != lowValue || getMaxValue(currPropertyArray) != highValue)
                {
                    for (var i = 0; i < currPropertyArray.length; i++)
                    {
                        if ((currPropertyArray[i].Data < lowValue || currPropertyArray[i].Data > highValue) && $.inArray(currPropertyArray[i].ID, filteredObjArray) != -1)
                        {
                            filteredObjArray.splice(filteredObjArray.indexOf(currPropertyArray[i].ID), 1);
                        }
                    }
                }
            }
        });

        // filter out schools
        if ($('#btnTopSchools').hasClass('btn-success')) {
            $.each(notTopSchoolIndexArray, function (index, Element) {
                if ($.inArray(Element, filteredObjArray) != -1) { // if it is not in the list of top schools, get rid of it
                    if (filteredObjArray.indexOf(Element) == -1)
                        alert(Element);
                    filteredObjArray.splice(filteredObjArray.indexOf(Element), 1);
                }
            });
        }

        // filter out on safety
        if ($('#btnOverTheTopSafety').hasClass('btn-success')) {
            $.each(notTopSafeIndexArray, function (index, Element) {
                if ($.inArray(Element, filteredObjArray) != -1) { // if it is not in the list of top safe neighborhoods, get rid of it
                    if (filteredObjArray.indexOf(Element) == -1)
                        alert(Element);
                    filteredObjArray.splice(filteredObjArray.indexOf(Element), 1);
                }
            });
        }

        setFilteredCount(filteredObjArray.length);
    }

    $.each(propertyData, function (index, Element)
    {
        if (filterProperties[index] != null && filterProperties[index] != "")
        {
            $('#filter3').before(_.template($('#sliderFilterTemplate').html())({ PropertyName: filterProperties[index], PropertyID: index }));
            $("#slider" + index).slider({
                range: true,
                min: getMinValue(Element),
                max: getMaxValue(Element),
                values: [getMinValue(Element), getMaxValue(Element)],
                slide: function (event, ui)
                {
                    $("#amount" + index).html(ui.values[0] + " - " + ui.values[1]);
                },
                change: function (event, ui)
                {
                    $(this).attr('searchEnabled', 'true');
                    $chkId = $(this).attr('id').replace('slider', 'chkFilter');
                    $('#' + $chkId).attr('checked', 'true');
                    filterFunction();
                }
            });
            $("#amount" + index).html($("#slider" + index).slider("values", 0) +
              " - " + $("#slider" + index).slider("values", 1));
        }
    });

    $.each($('input[id*=chkFilter]'), function ()
    {
        $(this).click(function ()
        {
            $slideId = $(this).attr('id').replace('chkFilter', 'slider');
            if ($(this).is(':checked'))
            {
                $('#' + $slideId).attr('searchEnabled', 'true');
            }
            else
            {
                $('#' + $slideId).attr('searchEnabled', 'false');
            }


            filterFunction();
        });
    });

    $('#divLandingPage').find('button[id^=btnBack]').click(function ()
    {
        $('#divHomePage').show();
        $('#divLandingContent').remove();
        $('#divLandingPage').hide();
    });

    var landingTemplate = _.template($('#landingTemplate').html());

    $('#btnSearch').click(function () {
        $('#divHomePage').hide();
        var neighborhoodNames = [];
        $.each(filteredObjArray, function () {
            var data = entireDataSet[this];
            var subdivOrTractIndexer = data[data.length - 1];
            var name = subdivOrTractNames[subdivOrTractIndexer];
            var isSuperSafeNeighborhood = superSafeNeighborhoods[subdivOrTractIndexer] != null;
            var schoolDistrict = schoolDistricts[subdivOrTractIndexer];
            var isAwesomeSchoolDistrict = schoolDistrict != null;
            neighborhoodNames.push({ Name: name, ID: subdivOrTractIndexer, SuperSafeNeighborhood: isSuperSafeNeighborhood, AwesomeSchoolDistrict: isAwesomeSchoolDistrict });
        });

        $('#divLandingContentHolder').append("<div id='divLandingContent'></div>");

        neighborhoodNames.sort(function (a, b) {
            return ((a.Name < b.Name) ? -1 : ((a.Name > b.Name) ? 1 : 0));
        });
        $.each(neighborhoodNames, function () {
            $('#divLandingContent').append(landingTemplate({ NeighborhoodName: this.Name, NeighborhoodData: 'Testing', NeighborhoodID: this.ID }));
        });

        $('#divLandingContent').accordion(
        {
          heightStyle:"content",
          beforeActivate: function(event, ui)
          {
            var currentResult = $(this);
            $.getJSON("http://api.flickr.com/services/feeds/photos_public.gne?tags=" & this.toString() & "&tagmode=all&format=json", function(data)
            {
              $.each(data.items, function(i,item)
              {
                $("<img/>").attr("src", item.media.m).appendTo(currentResult);
                if ( i == 3 ) return false;
              });
            });  
          }
        });    

        $('#divLandingPage').show();

        $.each($('div[id*=divRSS]'), function (index, Element) {
            $(Element).parent().parent().parent().prev().click(function () {
                /*$(Element).FeedEk({
                    FeedUrl: 'http://rss.cnn.com/rss/edition.rss',
                    MaxCount: 5,
                    ShowDesc: true,
                    ShowPubDate: true
                });*/
            });
        });
    });

    $('.address-button').click(function ()
    {
        $(this).addClass("btn-success").siblings().removeClass("btn-success");
    });

    $("[rel='tooltip']").tooltip();

    $('#spnSchoolCount').html(superSchoolDistricts.length);
    $('#btnAllSchools').click(function () {
        filterFunction();
    });
    $('#btnAllNeighborhoods').click(function () {
        filterFunction();
    });
    $('#btnTopSchools').click(function () {
        filterFunction();
    });
    $('#btnOverTheTopSafety').click(function () {
        filterFunction();
    });
});
