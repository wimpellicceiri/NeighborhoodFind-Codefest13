var superSafeNeighborhoods = {}; 
superSafeNeighborhoods["06064"] = "";
superSafeNeighborhoods["15216"] = "";
superSafeNeighborhoods["23000"] = "";
superSafeNeighborhoods["27120"] = "";
superSafeNeighborhoods["32328"] = "";
superSafeNeighborhoods["45900"] = "";
superSafeNeighborhoods["51696"] = "";
superSafeNeighborhoods["60272"] = "";
superSafeNeighborhoods["64528"] = "";
superSafeNeighborhoods["69376"] = "";
superSafeNeighborhoods["69400"] = "";
superSafeNeighborhoods["69416"] = "";
superSafeNeighborhoods["79274"] = "";
superSafeNeighborhoods["070300"] = "";
superSafeNeighborhoods["070500"] = "";
superSafeNeighborhoods["070600"] = "";
superSafeNeighborhoods["070800"] = "";
superSafeNeighborhoods["070900"] = "";
superSafeNeighborhoods["110200"] = "";
superSafeNeighborhoods["110600"] = "";
superSafeNeighborhoods["140100"] = "";
superSafeNeighborhoods["140200"] = "";
superSafeNeighborhoods["140300"] = "";
superSafeNeighborhoods["140400"] = "";
superSafeNeighborhoods["140500"] = "";
superSafeNeighborhoods["140600"] = "";
superSafeNeighborhoods["140800"] = "";
superSafeNeighborhoods["141000"] = "";
superSafeNeighborhoods["141100"] = "";
superSafeNeighborhoods["141300"] = "";
superSafeNeighborhoods["141400"] = "";
superSafeNeighborhoods["980100"] = "";
superSafeNeighborhoods["980300"] = "";
superSafeNeighborhoods["980500"] = "";

var superSchoolDistricts = [
    "Bethel Park",
    "Fox Chapel Area",
    "Hampton",
    "Mt. Lebanon",
    "North Allegheny",
    "North Hills",
    "Pine-Richland",
    "Plum",
    "Quaker Valley",
    "Upper St. Clair"
];

var schoolDistricts = {};
/*schoolDistricts[""] = "Allegheny Valley";
schoolDistricts[""] = "Avonworth";
schoolDistricts[""] = "Baldwin-Whitehall";*/
schoolDistricts["06064"] = "Bethel Park";
/*schoolDistricts[""] = "Brentwood";
schoolDistricts[""] = "Carlynton";
schoolDistricts[""] = "Chartiers Valley";
schoolDistricts[""] = "Clairton";
schoolDistricts[""] = "Cornell";
schoolDistricts[""] = "Deer Lakes";
schoolDistricts[""] = "Duquesne Area";
schoolDistricts[""] = "East Allegheny";
schoolDistricts[""] = "Elizabeth-Forward";*/
schoolDistricts["07000"] = "Fox Chapel Area";
schoolDistricts["36808"] = "Fox Chapel Area";
schoolDistricts["69776"] = "Fox Chapel Area";
schoolDistricts["56384"] = "Fox Chapel Area";
schoolDistricts["03320"] = "Fox Chapel Area";
schoolDistricts["27120"] = "Fox Chapel Area";
//schoolDistricts[""] = "Gateway";
schoolDistricts["32328"] = "Hampton";
/*schoolDistricts[""] = "Highlands";
schoolDistricts[""] = "Keystone Oaks";
schoolDistricts[""] = "McKeesport Area";
schoolDistricts[""] = "Montour";
schoolDistricts[""] = "Moon Area";*/
schoolDistricts["51696"] = "Mt. Lebanon";
schoolDistricts["08064"] = "North Allegheny";
schoolDistricts["27552"] = "North Allegheny";
schoolDistricts["47696"] = "North Allegheny";
schoolDistricts["45900"] = "North Allegheny";
schoolDistricts["66264"] = "North Hills";
schoolDistricts["84144"] = "North Hills";
/*schoolDistricts[""] = "Northgate";
schoolDistricts[""] = "Penn Hills";*/
schoolDistricts["60272"] = "Pine-Richland";
schoolDistricts["64528"] = "Pine-Richland";
/*schoolDistricts[""] = "Pittsburgh";
schoolDistricts[""] = "Plum";*/
schoolDistricts["00724"] = "Quaker Valley";
schoolDistricts["05216"] = "Quaker Valley";
schoolDistricts["22576"] = "Quaker Valley";
schoolDistricts["29592"] = "Quaker Valley";
schoolDistricts["33312"] = "Quaker Valley";
schoolDistricts["42368"] = "Quaker Valley";
schoolDistricts["29732"] = "Quaker Valley";
schoolDistricts["69376"] = "Quaker Valley";
schoolDistricts["69400"] = "Quaker Valley";
schoolDistricts["69416"] = "Quaker Valley";
/*schoolDistricts[""] = "Riverview";
schoolDistricts[""] = "Shaler Area";
schoolDistricts[""] = "South Allegheny";
schoolDistricts[""] = "South Fayette";
schoolDistricts[""] = "South Park";
schoolDistricts[""] = "Steel Valley";
schoolDistricts[""] = "Sto-Rox";*/
schoolDistricts["79274"] = "Upper St. Clair";
/*schoolDistricts[""] = "West Allegheny";
schoolDistricts[""] = "West Jefferson";
schoolDistricts[""] = "West Mifflin Area";
schoolDistricts[""] = "Wilkinsburg";
schoolDistricts[""] = "Woodland Hills";
schoolDistricts[""] = "Fort Cherry";
schoolDistricts[""] = "Penn-Trafford";*/


var subdivOrTractNames = {};
// subdivs
subdivOrTractNames["00724"] = "Aleppo township";
subdivOrTractNames["03320"] = "Aspinwall";
subdivOrTractNames["03608"] = "Avalon";
subdivOrTractNames["03928"] = "Baldwin";
subdivOrTractNames["03932"] = "Baldwin township";
subdivOrTractNames["05216"] = "Bell Acres";
subdivOrTractNames["05312"] = "Bellevue";
subdivOrTractNames["05504"] = "Ben Avon";
subdivOrTractNames["05520"] = "Ben Avon Heights";
subdivOrTractNames["06064"] = "Bethel Park";
subdivOrTractNames["07000"] = "Blawnox";
subdivOrTractNames["07976"] = "Brackenridge";
subdivOrTractNames["07992"] = "Braddock";
subdivOrTractNames["08008"] = "Braddock Hills";
subdivOrTractNames["08064"] = "Bradford Woods";
subdivOrTractNames["08416"] = "Brentwood";
subdivOrTractNames["08624"] = "Bridgeville";
subdivOrTractNames["11336"] = "Carnegie";
subdivOrTractNames["11680"] = "Castle Shannon";
subdivOrTractNames["12496"] = "Chalfant";
subdivOrTractNames["13392"] = "Cheswick";
subdivOrTractNames["13608"] = "Churchill";
subdivOrTractNames["13704"] = "Clairton city";
subdivOrTractNames["15216"] = "Collier township";
subdivOrTractNames["16144"] = "Coraopolis";
subdivOrTractNames["16848"] = "Crafton";
subdivOrTractNames["17048"] = "Crescent township";
subdivOrTractNames["19576"] = "Dormont";
subdivOrTractNames["19856"] = "Dravosburg";
subdivOrTractNames["20432"] = "Duquesne city";
subdivOrTractNames["21024"] = "East Deer township";
subdivOrTractNames["21444"] = "East McKeesport";
subdivOrTractNames["21712"] = "East Pittsburgh";
subdivOrTractNames["22520"] = "Edgewood";
subdivOrTractNames["22576"] = "Edgeworth";
subdivOrTractNames["22992"] = "Elizabeth";
subdivOrTractNames["23000"] = "Elizabeth township";
subdivOrTractNames["23616"] = "Emsworth";
subdivOrTractNames["24160"] = "Etna";
subdivOrTractNames["25400"] = "Fawn township";
subdivOrTractNames["25904"] = "Findlay township";
subdivOrTractNames["26592"] = "Forest Hills";
subdivOrTractNames["26896"] = "Forward township";
subdivOrTractNames["27120"] = "Fox Chapel";
subdivOrTractNames["27552"] = "Franklin Park";
subdivOrTractNames["27608"] = "Frazer township";
subdivOrTractNames["29432"] = "Glassport";
subdivOrTractNames["29592"] = "Glenfield";
subdivOrTractNames["29732"] = "Glen Osborne";
subdivOrTractNames["31256"] = "Green Tree";
subdivOrTractNames["32328"] = "Hampton township";
subdivOrTractNames["32624"] = "Harmar township";
subdivOrTractNames["32832"] = "Harrison township";
subdivOrTractNames["33312"] = "Haysville";
subdivOrTractNames["33592"] = "Heidelberg";
subdivOrTractNames["35424"] = "Homestead";
subdivOrTractNames["36808"] = "Indiana township";
subdivOrTractNames["37000"] = "Ingram";
subdivOrTractNames["37955"] = "Jefferson Hills";
subdivOrTractNames["39312"] = "Kennedy township";
subdivOrTractNames["39624"] = "Kilbuck township";
subdivOrTractNames["42368"] = "Leet township";
subdivOrTractNames["42392"] = "Leetsdale";
subdivOrTractNames["43064"] = "Liberty";
subdivOrTractNames["43408"] = "Lincoln";
subdivOrTractNames["45900"] = "McCandless township";
subdivOrTractNames["46072"] = "McDonald";
subdivOrTractNames["46256"] = "McKeesport city";
subdivOrTractNames["46264"] = "McKees Rocks";
subdivOrTractNames["47696"] = "Marshall township";
subdivOrTractNames["49920"] = "Millvale";
subdivOrTractNames["50528"] = "Monroeville";
subdivOrTractNames["50784"] = "Moon township";
subdivOrTractNames["51696"] = "Mount Lebanon township";
subdivOrTractNames["51744"] = "Mount Oliver";
subdivOrTractNames["52320"] = "Munhall";
subdivOrTractNames["53136"] = "Neville township";
subdivOrTractNames["54816"] = "North Braddock";
subdivOrTractNames["55016"] = "North Fayette township";
subdivOrTractNames["55488"] = "North Versailles township";
subdivOrTractNames["55840"] = "Oakdale";
subdivOrTractNames["56088"] = "Oakmont";
subdivOrTractNames["56384"] = "O'Hara township";
subdivOrTractNames["56392"] = "Ohio township";
subdivOrTractNames["59032"] = "Penn Hills township";
subdivOrTractNames["59152"] = "Pennsbury Village";
subdivOrTractNames["60272"] = "Pine township";
subdivOrTractNames["60712"] = "Pitcairn";
subdivOrTractNames["61000"] = "Pittsburgh city";
subdivOrTractNames["61328"] = "Pleasant Hills";
subdivOrTractNames["61536"] = "Plum";
subdivOrTractNames["62320"] = "Port Vue";
subdivOrTractNames["63408"] = "Rankin";
subdivOrTractNames["64240"] = "Reserve township";
subdivOrTractNames["64528"] = "Richland township"; 
subdivOrTractNames["65352"] = "Robinson township";
subdivOrTractNames["66264"] = "Ross township";
subdivOrTractNames["66320"] = "Rosslyn Farms";
subdivOrTractNames["68388"] = "Scott township";
subdivOrTractNames["69376"] = "Sewickley";
subdivOrTractNames["69400"] = "Sewickley Heights";
subdivOrTractNames["69416"] = "Sewickley Hills";
subdivOrTractNames["69584"] = "Shaler township";
subdivOrTractNames["69776"] = "Sharpsburg";
subdivOrTractNames["72160"] = "South Fayette township";
subdivOrTractNames["72400"] = "South Park township";
subdivOrTractNames["72568"] = "South Versailles township";
subdivOrTractNames["72960"] = "Springdale";
subdivOrTractNames["72968"] = "Springdale township";
subdivOrTractNames["74648"] = "Stowe township";
subdivOrTractNames["75816"] = "Swissvale";
subdivOrTractNames["76104"] = "Tarentum";
subdivOrTractNames["76560"] = "Thornburg";
subdivOrTractNames["77272"] = "Trafford";
subdivOrTractNames["77912"] = "Turtle Creek";
subdivOrTractNames["79274"] = "Upper St. Clair township";
subdivOrTractNames["80032"] = "Verona";
subdivOrTractNames["80040"] = "Versailles";
subdivOrTractNames["80600"] = "Wall";
subdivOrTractNames["82800"] = "West Deer township";
subdivOrTractNames["82848"] = "West Elizabeth";
subdivOrTractNames["83200"] = "West Homestead";
subdivOrTractNames["83512"] = "West Mifflin";
subdivOrTractNames["84144"] = "West View";
subdivOrTractNames["84440"] = "Whitaker";
subdivOrTractNames["84512"] = "Whitehall";
subdivOrTractNames["84704"] = "White Oak";
subdivOrTractNames["85184"] = "Wilkins township";
subdivOrTractNames["85188"] = "Wilkinsburg";
subdivOrTractNames["85496"] = "Wilmerding";
subdivOrTractNames["85496"] = "Wilmerding";

//tracts
subdivOrTractNames["010300"] = "Bluff";
subdivOrTractNames["020100"] = "Central Business District";
subdivOrTractNames["020300"] = "Strip District";
subdivOrTractNames["030500"] = "Crawford-Roberts";
subdivOrTractNames["040200"] = "Terrace Village";
subdivOrTractNames["040400"] = "North Oakland";
subdivOrTractNames["040500"] = "Central Oakland";
subdivOrTractNames["040600"] = "Central Oakland";
subdivOrTractNames["040900"] = "South Oakland";
subdivOrTractNames["050100"] = "Middle Hill";
subdivOrTractNames["050600"] = "Upper Hill";
subdivOrTractNames["050900"] = "Bedford Dwellings";
subdivOrTractNames["051000"] = "Terrace Village";
subdivOrTractNames["051100"] = "Terrace Village";
subdivOrTractNames["060300"] = "Lower Lawrenceville";
subdivOrTractNames["060500"] = "Polish Hill";
subdivOrTractNames["070300"] = "Shadyside";
subdivOrTractNames["070500"] = "Shadyside";
subdivOrTractNames["070600"] = "Shadyside";
subdivOrTractNames["070800"] = "Shadyside";
subdivOrTractNames["070900"] = "Shadyside";
subdivOrTractNames["080200"] = "Bloomfield";
subdivOrTractNames["080400"] = "Bloomfield";
subdivOrTractNames["080600"] = "Bloomfield";
subdivOrTractNames["080700"] = "Friendship";
subdivOrTractNames["080900"] = "Bloomfield";
subdivOrTractNames["090100"] = "Central Lawrenceville";
subdivOrTractNames["090200"] = "Central Lawrenceville";
subdivOrTractNames["090300"] = "Bloomfield";
subdivOrTractNames["100500"] = "Stanton Heights";
subdivOrTractNames["101100"] = "Upper Lawrenceville";
subdivOrTractNames["101400"] = "Morningside";
subdivOrTractNames["101600"] = "Garfield";
subdivOrTractNames["101700"] = "Garfield";
subdivOrTractNames["101800"] = "Stanton Heights";
subdivOrTractNames["110200"] = "Highland Park";
subdivOrTractNames["110600"] = "Highland Park";
subdivOrTractNames["111300"] = "East Liberty";
subdivOrTractNames["111400"] = "Garfield";
subdivOrTractNames["111500"] = "East Liberty";
subdivOrTractNames["120300"] = "Lincoln-Lemington-Belmar";
subdivOrTractNames["120400"] = "Larimer";
subdivOrTractNames["120700"] = "Homewood West";
subdivOrTractNames["120800"] = "Larimer";
subdivOrTractNames["130100"] = "Homewood North";
subdivOrTractNames["130200"] = "Homewood North";
subdivOrTractNames["130300"] = "Homewood South";
subdivOrTractNames["130400"] = "Homewood South";
subdivOrTractNames["130600"] = "East Hills";
subdivOrTractNames["140100"] = "Squirrel Hill North";
subdivOrTractNames["140200"] = "Squirrel Hill North";
subdivOrTractNames["140300"] = "Squirrel Hill North";
subdivOrTractNames["140400"] = "Point Breeze";
subdivOrTractNames["140500"] = "Point Breeze North";
subdivOrTractNames["140600"] = "Point Breeze";
subdivOrTractNames["140800"] = "Squirrel Hill South";
subdivOrTractNames["141000"] = "Regent Square";
subdivOrTractNames["141100"] = "Swisshelm Park";
subdivOrTractNames["141300"] = "Squirrel Hill South";
subdivOrTractNames["141400"] = "Squirrel Hill South";
subdivOrTractNames["151600"] = "Greenfield";
subdivOrTractNames["151700"] = "Greenfield";
subdivOrTractNames["160800"] = "Southside Slopes";
subdivOrTractNames["160900"] = "Southside Flats";
subdivOrTractNames["170200"] = "Southside Flats";
subdivOrTractNames["170600"] = "Southside Slopes";
subdivOrTractNames["180300"] = "Allentown";
subdivOrTractNames["180700"] = "Mount Washington";
subdivOrTractNames["190300"] = "Mount Washington";
subdivOrTractNames["191100"] = "Duquesne Heights";
subdivOrTractNames["191400"] = "Mount Washington";
subdivOrTractNames["191500"] = "Mount Washington";
subdivOrTractNames["191600"] = "Beechview";
subdivOrTractNames["191700"] = "Brookline";
subdivOrTractNames["191800"] = "Brookline";
subdivOrTractNames["191900"] = "Brookline";
subdivOrTractNames["192000"] = "Beechview";
subdivOrTractNames["202200"] = "Sheraden";
subdivOrTractNames["202300"] = "Banksville";
subdivOrTractNames["210700"] = "Manchester";
subdivOrTractNames["220600"] = "Central Northside";
subdivOrTractNames["240600"] = "Troy Hill";
subdivOrTractNames["241200"] = "Spring Garden";
subdivOrTractNames["250300"] = "Central Northside";
subdivOrTractNames["250700"] = "California-Kirkbride";
subdivOrTractNames["250900"] = "Fineview";
subdivOrTractNames["260200"] = "Perry North";
subdivOrTractNames["260700"] = "Perry North";
subdivOrTractNames["260900"] = "Northview Heights";
subdivOrTractNames["261200"] = "Summer Hill";
subdivOrTractNames["261400"] = "Perry South";
subdivOrTractNames["261500"] = "Perry South";
subdivOrTractNames["262000"] = "Spring Hill-City View";
subdivOrTractNames["270100"] = "Brighton Heights";
subdivOrTractNames["270300"] = "Brighton Heights";
subdivOrTractNames["270400"] = "Marshall-Shadeland";
subdivOrTractNames["270800"] = "Brighton Heights";
subdivOrTractNames["271500"] = "Marshall-Shadeland";
subdivOrTractNames["281400"] = "Crafton Heights";
subdivOrTractNames["281500"] = "Crafton Heights";
subdivOrTractNames["290100"] = "Carrick";
subdivOrTractNames["290200"] = "Carrick";
subdivOrTractNames["290400"] = "Carrick";
subdivOrTractNames["300100"] = "Knoxville";
subdivOrTractNames["310200"] = "Lincoln Place";
subdivOrTractNames["310300"] = "New Homestead";
subdivOrTractNames["320400"] = "Overbrook";
subdivOrTractNames["320600"] = "Brookline";
subdivOrTractNames["320700"] = "Overbrook";
subdivOrTractNames["561600"] = "Arlington";
subdivOrTractNames["561700"] = "Mt. Oliver";
subdivOrTractNames["561900"] = "Lincoln-Lemington-Belmar";
subdivOrTractNames["562000"] = "North Oakland";
subdivOrTractNames["562300"] = "Hazelwood";
subdivOrTractNames["562400"] = "Beltzhoover";
subdivOrTractNames["562500"] = "Esplen";
subdivOrTractNames["562600"] = "Elliot";
subdivOrTractNames["562700"] = "Allegheny Center";
subdivOrTractNames["562800"] = "East Carnegie";
subdivOrTractNames["562900"] = "Hays";
subdivOrTractNames["563000"] = "Windgap";
subdivOrTractNames["563100"] = "Westwood";
subdivOrTractNames["563200"] = "North Shore";
subdivOrTractNames["980000"] = "Lincoln-Lemington-Belmar";
subdivOrTractNames["980100"] = "Highland Park";
subdivOrTractNames["980300"] = "Squirrel Hill South";
subdivOrTractNames["980400"] = "Perry North";
subdivOrTractNames["980500"] = "Squirrel Hill South";
subdivOrTractNames["980600"] = "Chateau";
subdivOrTractNames["980700"] = "South Shore";
subdivOrTractNames["980800"] = "South Oakland";
subdivOrTractNames["980900"] = "Marshall-Shadeland";
subdivOrTractNames["981000"] = "Central Lawrenceville";
subdivOrTractNames["981100"] = "Point Breeze";
subdivOrTractNames["981200"] = "North Shore";
subdivOrTractNames["981800"] = "Lincoln-Lemington-Belmar";
subdivOrTractNames["982200"] = "North Oakland";

var tractNames = {};
tractNames["010300"] = "Bluff";
tractNames["020100"] = "Central Business District";
tractNames["020300"] = "Strip District";
tractNames["030500"] = "Crawford-Roberts";
tractNames["040200"] = "Terrace Village";
tractNames["040400"] = "North Oakland";
tractNames["040500"] = "Central Oakland";
tractNames["040600"] = "Central Oakland";
tractNames["040900"] = "South Oakland";
tractNames["050100"] = "Middle Hill";
tractNames["050600"] = "Upper Hill";
tractNames["050900"] = "Bedford Dwellings";
tractNames["051000"] = "Terrace Village";
tractNames["051100"] = "Terrace Village";
tractNames["060300"] = "Lower Lawrenceville";
tractNames["060500"] = "Polish Hill";
tractNames["070300"] = "Shadyside";
tractNames["070500"] = "Shadyside";
tractNames["070600"] = "Shadyside";
tractNames["070800"] = "Shadyside";
tractNames["070900"] = "Shadyside";
tractNames["080200"] = "Bloomfield";
tractNames["080400"] = "Bloomfield";
tractNames["080600"] = "Bloomfield";
tractNames["080700"] = "Friendship";
tractNames["080900"] = "Bloomfield";
tractNames["090100"] = "Central Lawrenceville";
tractNames["090200"] = "Central Lawrenceville";
tractNames["090300"] = "Bloomfield";
tractNames["100500"] = "Stanton Heights";
tractNames["101100"] = "Upper Lawrenceville";
tractNames["101400"] = "Morningside";
tractNames["101600"] = "Garfield";
tractNames["101700"] = "Garfield";
tractNames["101800"] = "Stanton Heights";
tractNames["110200"] = "Highland Park";
tractNames["110600"] = "Highland Park";
tractNames["111300"] = "East Liberty";
tractNames["111400"] = "Garfield";
tractNames["111500"] = "East Liberty";
tractNames["120300"] = "Lincoln-Lemington-Belmar";
tractNames["120400"] = "Larimer";
tractNames["120700"] = "Homewood West";
tractNames["120800"] = "Larimer";
tractNames["130100"] = "Homewood North";
tractNames["130200"] = "Homewood North";
tractNames["130300"] = "Homewood South";
tractNames["130400"] = "Homewood South";
tractNames["130600"] = "East Hills";
tractNames["140100"] = "Squirrel Hill North";
tractNames["140200"] = "Squirrel Hill North";
tractNames["140300"] = "Squirrel Hill North";
tractNames["140400"] = "Point Breeze";
tractNames["140500"] = "Point Breeze North";
tractNames["140600"] = "Point Breeze";
tractNames["140800"] = "Squirrel Hill South";
tractNames["141000"] = "Regent Square";
tractNames["141100"] = "Swisshelm Park";
tractNames["141300"] = "Squirrel Hill South";
tractNames["141400"] = "Squirrel Hill South";
tractNames["151600"] = "Greenfield";
tractNames["151700"] = "Greenfield";
tractNames["160800"] = "Southside Slopes";
tractNames["160900"] = "Southside Flats";
tractNames["170200"] = "Southside Flats";
tractNames["170600"] = "Southside Slopes";
tractNames["180300"] = "Allentown";
tractNames["180700"] = "Mount Washington";
tractNames["190300"] = "Mount Washington";
tractNames["191100"] = "Duquesne Heights";
tractNames["191400"] = "Mount Washington";
tractNames["191500"] = "Mount Washington";
tractNames["191600"] = "Beechview";
tractNames["191700"] = "Brookline";
tractNames["191800"] = "Brookline";
tractNames["191900"] = "Brookline";
tractNames["192000"] = "Beechview";
tractNames["202200"] = "Sheraden";
tractNames["202300"] = "Banksville";
tractNames["210700"] = "Manchester";
tractNames["220600"] = "Central Northside";
tractNames["240600"] = "Troy Hill";
tractNames["241200"] = "Spring Garden";
tractNames["250300"] = "Central Northside";
tractNames["250700"] = "California-Kirkbride";
tractNames["250900"] = "Fineview";
tractNames["260200"] = "Perry North";
tractNames["260700"] = "Perry North";
tractNames["260900"] = "Northview Heights";
tractNames["261200"] = "Summer Hill";
tractNames["261400"] = "Perry South";
tractNames["261500"] = "Perry South";
tractNames["262000"] = "Spring Hill-City View";
tractNames["270100"] = "Brighton Heights";
tractNames["270300"] = "Brighton Heights";
tractNames["270400"] = "Marshall-Shadeland";
tractNames["270800"] = "Brighton Heights";
tractNames["271500"] = "Marshall-Shadeland";
tractNames["281400"] = "Crafton Heights";
tractNames["281500"] = "Crafton Heights";
tractNames["290100"] = "Carrick";
tractNames["290200"] = "Carrick";
tractNames["290400"] = "Carrick";
tractNames["300100"] = "Knoxville";
tractNames["310200"] = "Lincoln Place";
tractNames["310300"] = "New Homestead";
tractNames["320400"] = "Overbrook";
tractNames["320600"] = "Brookline";
tractNames["320700"] = "Overbrook";
tractNames["561600"] = "Arlington";
tractNames["561700"] = "Mt. Oliver";
tractNames["561900"] = "Lincoln-Lemington-Belmar";
tractNames["562000"] = "North Oakland";
tractNames["562300"] = "Hazelwood";
tractNames["562400"] = "Beltzhoover";
tractNames["562500"] = "Esplen";
tractNames["562600"] = "Elliot";
tractNames["562700"] = "Allegheny Center";
tractNames["562800"] = "East Carnegie";
tractNames["562900"] = "Hays";
tractNames["563000"] = "Windgap";
tractNames["563100"] = "Westwood";
tractNames["563200"] = "North Shore";
tractNames["980000"] = "Lincoln-Lemington-Belmar";
tractNames["980100"] = "Highland Park";
tractNames["980300"] = "Squirrel Hill South";
tractNames["980400"] = "Perry North";
tractNames["980500"] = "Squirrel Hill South";
tractNames["980600"] = "Chateau";
tractNames["980700"] = "South Shore";
tractNames["980800"] = "South Oakland";
tractNames["980900"] = "Marshall-Shadeland";
tractNames["981000"] = "Central Lawrenceville";
tractNames["981100"] = "Point Breeze";
tractNames["981200"] = "North Shore";
tractNames["981800"] = "Lincoln-Lemington-Belmar";
tractNames["982200"] = "North Oakland";

var filterProperties = {};
filterProperties["B25058_001E"] = "";
filterProperties["B25064_001E"] = "Median Gross Rent (Dollars)";
filterProperties["B25077_001E"] = "Median Value (Dollars) for Owner-Occupied Housing Units";
filterProperties["B07011_001E"] = "Median Income by Geographical Mobility in the Past Year for Current Residence in the U.S.";
filterProperties["B25010_001E"] = "Average Household Size of Occupied Housing Units by Tenure";
filterProperties["B25103_001E"] = "Mortgage Status by Median Real Estate Taxes Paid (DOLLARS)";
filterProperties["B01002_001E"] = "Median Age by Sex";
filterProperties["B23025_003E"] = "Total Labor Force";
filterProperties["B23025_004E"] = "Employed";
filterProperties["B23025_005E"] = "Unemployed";

var sortByData = function (a, b) {
    var x = a.Data;
    var y = b.Data;
    return ((x < y) ? -1 : ((x > y) ? 1 : 0));
}

var subdivFinished = false;
var tractFinished = false;
var finished = function () {
    return subdivFinished && tractFinished;
}

var filterIndexArray = [];
var notTopSchoolIndexArray = [];
var notTopSafeIndexArray = [];

var index = 0;
var entireDataSet = [];
var baseURL = "http://api.census.gov/data/2011/acs5?key=76ed37dffda422d9b83fd9d277827451fb4ef1cc&get=B25058_001E,B25064_001E,B25077_001E,B07011_001E,B25010_001E,B25103_001E,B01002_001E,B23025_001E,B23025_003E,B23025_004E,B23025_005E";
var subdivDataURL = baseURL + "&for=county+subdivision:*&in=state:42+county:003";
var propertyData = {};
$.ajax({
    url: subdivDataURL,
    dataType: "json",
    async: false,
    success: function (data) {
        $.each(data, function (dataIndex, dataValue) {
            if (dataIndex > 0) {
                var subdivNumber = dataValue[dataValue.length - 1];
                if (subdivNumber != "61000") { // DO NOT INCLUDE PITTSBURGH CITY
                    entireDataSet[dataIndex] = dataValue; // populate main data structure
                    filterIndexArray.push(dataIndex);
                    if (schoolDistricts[subdivNumber] == null)
                        notTopSchoolIndexArray.push(dataIndex);

                    if (superSafeNeighborhoods[subdivNumber] == null)
                        notTopSafeIndexArray.push(dataIndex);

                    $.each(data[0], function (propertyIndex, propertyName) {
                        if (propertyData[propertyName.toString()] == null) {
                            propertyData[propertyName.toString()] = []; // create blank array to hold property data
                        }
                        if (dataValue[propertyIndex] != "null") {
                            propertyData[propertyName.toString()].push({ ID: dataIndex, Data: parseFloat(dataValue[propertyIndex]) });
                        }
                        else {
                            propertyData[propertyName.toString()].push({ ID: dataIndex, Data: "null" });
                        }
                    });
                    index = dataIndex;
                }
            }
        });
    }
});

var tractDataURL = baseURL + "&for=tract:*&in=state:42+county:003";
$.ajax({
    url: tractDataURL,
    dataType: "json",
    async: false,
    success: function (data) {
        $.each(data, function (dataIndex, dataValue) {
            if (dataIndex > 0) {
                var tractNumber = dataValue[dataValue.length-1];
                if (tractNames[parseInt(tractNumber)] != null) { // only add tracts that exist in the tractNames hash table
                    entireDataSet[dataIndex + index] = dataValue; // populate main data structure
                    filterIndexArray.push(dataIndex + index);
                    if (schoolDistricts[tractNumber] == null)
                        notTopSchoolIndexArray.push(dataIndex);

                    if (superSafeNeighborhoods[tractNumber] == null)
                        notTopSafeIndexArray.push(dataIndex);

                    $.each(data[0], function (propertyIndex, propertyName) {
                        if (propertyData[propertyName.toString()] == null) {
                            propertyData[propertyName.toString()] = []; // create blank array to hold property data
                        }

                        if (dataValue[propertyIndex] != "null") {
                            propertyData[propertyName.toString()].push({ ID: dataIndex + index, Data: parseFloat(dataValue[propertyIndex]) });
                        }
                        else {
                            propertyData[propertyName.toString()].push({ ID: dataIndex + index, Data: "null" });
                        }
                    });
                }
            }
        });
    }
});

// sort property data structures
$.each(propertyData, function () {
    this.sort(sortByData);
});

/*var loadData = function () {
    $.when(subdivAJAX(), tractAJAX()).done(function () {
        // sort property data structures
        $.each(propertyData, function () {
            this.sort(sortByData);
        });
    });
}

$.when(loadData()).done(function () {
    alert(subdivData.length);
});
*/
