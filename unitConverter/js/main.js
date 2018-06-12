$(document).on("click",".type-conv a", function(){
    //populate the other dropdown menus on click event on Type of conversion:
    let $dropdown = $(this).text().toLowerCase();
    $(".from-conv-btn:first-child").text("Choose Type");//resets second dropdown list to default when Type changes
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
 
        //change/update type button's text with selected link's text:
       $(".type-conv-btn:first-child").text($(this).text());
       $(".type-conv-btn:first-child").val($(this).text()); 
 
})

$(document).on("click",".from-conv-item", function(){ //updates second dropdown lists button's text
    $(".from-conv-btn:first-child").text($(this).text());
    $(".from-conv-btn:first-child").val($(this).text());
})