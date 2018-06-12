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

$(document).on("click",".from-conv-item", function(){ 
    $(".from-conv-btn:first-child").text($(this).text());//updates second dropdown lists button's text
    $(".from-conv-btn:first-child").val($(this).text());
})

$(document).on("click",".from-conv-item", function(){
    let listOfUnits = $(".from-conv-item").text();//string of units like: CelciusFarenheid
    let listOfUnitsArr = listOfUnits.match(/[A-Z][a-z]+/g);//split at capital letters and store in array
    let secondDropdownChoice = $(this).text();
    let thirdDropdownChoices = [];
    let indexOfSecondChoice = listOfUnitsArr.indexOf(secondDropdownChoice);
    if(indexOfSecondChoice > -1) {
        listOfUnitsArr.splice(indexOfSecondChoice,1);//remove secondDropdown choice from thirdDropdown choices
    }
    let $toConv = $(".to-conv"); //grab place where third dropdown will be generated
    $toConv.empty();
    $.each(listOfUnitsArr,function(index,value){
        $toConv.append("<a class='dropdown-item to-conv-item' value='"+value+"' href='#'>"+value+"</a>")//generate third drop down
    })
    
})

$(document).on("click",".to-conv-item",function(){
    $(".to-conv-btn:first-child").text($(this).text()); // updates third dropdown lists button's text
    $(".to-conv-btn:first-child").val($(this).text());
})
    