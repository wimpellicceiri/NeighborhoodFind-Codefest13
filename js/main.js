_.templateSettings = {
    interpolate: /\{\{([\s\S]+?)\}\}/g
};

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

    $('#btnSearch').click(function ()
    {
        $('#divHomePage').hide();
        var neighborhoodNames = [];
        $.each(filteredObjArray, function ()
        {
            var data = entireDataSet[this];
            var subdivOrTractIndexer = data[data.length - 1];
            var name = subdivOrTractNames[subdivOrTractIndexer];
            neighborhoodNames.push(name);
            //.append(landingTemplate({ NeighborhoodName: 'Greentree', NeighborhoodData: 'Testing2' }));
        });

        $('#divLandingContentHolder').append("<div id='divLandingContent'></div>");

        neighborhoodNames.sort();
        $.each(neighborhoodNames, function ()
        {
            $('#divLandingContent').append(landingTemplate({ NeighborhoodName: this, NeighborhoodData: 'Testing' }));
        });

        $('#divLandingContent').accordion();

        $('#divLandingPage').show();
    });

    /*$( "#slider1" ).slider({
    range: true,
    min: 0,
    max: 500,
    values: [ 75, 300 ],
    slide: function( event, ui ) {
    $( "#amount1" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
    });
    $( "#amount1" ).html( "$" + $( "#slider1" ).slider( "values", 0 ) +
    " - $" + $( "#slider1" ).slider( "values", 1 ) );
    
    $( "#slider2" ).slider({
    range: true,
    min: 0,
    max: 120000,
    values: [ 50000, 100000 ],
    step: 100,
    slide: function( event, ui ) {
    $( "#amount2" ).html( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
    }
    });
    $( "#amount2" ).html( "$" + $( "#slider2" ).slider( "values", 0 ) +
    " - $" + $( "#slider2" ).slider( "values", 1 ) );*/

    $('.address-button').click(function ()
    {
        $(this).addClass("btn-success").siblings().removeClass("btn-success");
    });

    $("[rel='tooltip']").tooltip();
});
