$(document).on("click",".type-conv a", function(){
    //populate the other dropdown menus:
    let $dropdown = $(this).text().toLowerCase();
    $(".from-conv-btn:first-child").text("Choose Type");
    $(".type-conv-btn:first-child").val("Choose Type"); 

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
            $fromConv.append("<a class='dropdown-item from-conv-item' value='"+value+"' href='#'>"+value+"</a>");
        });
    })//end of populate dropdown menus 
 
        //change/update button text with selected link's text:
       $(".type-conv-btn:first-child").text($(this).text());
       $(".type-conv-btn:first-child").val($(this).text()); 
 
})

$(document).on("click",".from-conv-item", function(){
    let secondDropdownClick = $(this).text();
    $(".from-conv-btn:first-child").text($(this).text());
    $(".from-conv-btn:first-child").val($(this).text());
    console.log(secondDropdownClick);
    console.log("Clicked!");
})

        // $(".dropdown-menu a").click(function(){
        //     $(".btn:first-child").text($(this).text());
        //     $(".btn:first-child").val($(this).text());
        // }); 
