/* Range slider */

$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 200,
      max: 10000,
      values: [ 200, 10000 ],
      slide: function( event, ui ) {
        $( "#amount" ).val(ui.values[ 0 ] +  " р.");
        $( "#amount2" ).val(ui.values[ 1 ] + " р.");
      }
    });
    $( "#amount" ).val( $( "#slider-range" ).slider( "values", 0 ) + " р.");
    $( "#amount2" ).val($( "#slider-range" ).slider( "values", 1 ) + " р." );
} );