$(document).ready(function(){

  $('.firstslider .flexslider').flexslider({
      animation: "slide",
      prevText: "", 
      nextText: ""

    });
   

 $('.nav-btn').click(function(){
    $('#menu').slideToggle('slow', function() {
      $('.nav-list-item-link').click(function(){
      $('#menu').slideUp('fast');
      
   });
 });
 });

 $('.recommend .flexslider').flexslider({
   animation: "slide",
   animationLoop: true,
   controlNav: false,
   itemWidth: 200,
   itemMargin: 5,
   directionNav: true,
   prevText: "", 
   nextText: "",
   move: 1,
   maxItems: 4
 });

});



