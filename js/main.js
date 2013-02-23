$(function(){
  $( "#slider1" ).slider({
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
    " - $" + $( "#slider2" ).slider( "values", 1 ) );
});
