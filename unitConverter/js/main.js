$(document).ready(function(){
    $(function(){

        $(".dropdown-menu a").click(function(){
           //change/update button text with selected link's text:
          $(".btn:first-child").text($(this).text());
          $(".btn:first-child").val($(this).text());
           
       });
        //populate the other dropdown menus:
        $(".type-conv a").click(function(){
            let $dropdown = $(this);
            console.log($dropdown);

            $.getJSON("data.json", function(data){
                let convType = $dropdown.val();
                let unitsOfType = [];

                switch(convType){
                    case 'Temperature':
                        unitsOfType = data.Temperature.split(",");
                        break;
                    case 'Currency':
                        unitsOfType = data.Currency.split(",");
                        break;
                    case 'Length':
                        unitsOfType = data.Length.split(",");
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
           
        });
       
    
    });
   
});
