// IIFE - Immediately Invoked Function Expression
  (function($, window, document) {
      // The $ is now locally scoped
    $(function() {
        // The DOM is ready!
        // The rest of your code goes here!
        $( ".light" ).off().on('click',function() {
              var color =$(this ).data( "light" );
              $( ".selected-light" ).css( "background-color",color )
                $( ".light" ).toggle("slow"  );
                $(".selected-light").toggle("slow" );
        });
    $( ".selected-light" ).off().on('click',function() {
             
              $( this).css( "background-color","" );
               $(".selected-light").toggle( "slow");
                $( ".light" ).toggle("slow"  );
               
        });
        
    });
     
  }(window.jQuery, window, document));
  // The global jQuery object is passed as a parameter

