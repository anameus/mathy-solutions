$(document).ready(function(){
    $(function(){

        $(".dropdown-menu a").click(function(){
           //change/update button text with selected link's text:
          $(".btn:first-child").text($(this).text());
          $(".btn:first-child").val($(this).text());
    
       });
    
    });
   
});
