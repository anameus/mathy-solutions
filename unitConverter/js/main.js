$(document).ready(function(){
    $(function(){

        $(".dropdown-menu a").click(function(){
           //change/update button text with selected link's text:
          $(".btn:first-child").text($(this).text());
          $(".btn:first-child").val($(this).text());
           
       });
        //populate the other dropdown menus:
        $(".dropdown-menu a").click(function(){
            let $dropdown = $(this).text().toLowerCase();

            $.getJSON("js/data.json", function(data){
                let convType = $dropdown;
                let unitsOfType = [];

                switch(convType){
                    case 'temperature':
                        unitsOfType = data.temperature.split(",");
                        break;
                    case 'currency':
                        unitsOfType = data.currency.split(",");
                        break;
                    case 'length':
                        unitsOfType = data.length.split(",");
                        break;
                    default:
                        unitsOfType = ['Please choose type of conversion'];
                        
                }

                let $fromConv = $(".from-conv");
                $fromConv.empty();
                $.each(unitsOfType, function(index,value){
                    $fromConv.append("<a class='dropdown-item from-conv-item' href='#'>"+value+"</a>");
                });
            })
 
        }); //end of populate dropdown menus
        
        $(".dropdown-menu a").click(function(){
            //change/update button text with selected link's text:
            $(".btn:first-child").text($(this).text());
            $(".btn:first-child").val($(this).text());
        }); 

    });
   
});
