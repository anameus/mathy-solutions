$(document).ready(function(){
    $(function(){

        $(".dropdown-menu a").click(function(){
           //change/update button text with selected link's text:
          $(".btn:first-child").text($(this).text());
          $(".btn:first-child").val($(this).text());
           
       });
        //populate the other dropdown menus:
        $(".type-conv a").click(function(){
          
            if($(".type-conv a").text()==="Temperature"){
               let newDropdownItem = $(".from-conv-item");
                newDropdownItem.text("Degrees Celcius");
                newDropdownItem.text("Farenheid"); //overwrites celcius..how to add items without overwriting old ones?
               
            }
        });
       
    
    });
   
});
