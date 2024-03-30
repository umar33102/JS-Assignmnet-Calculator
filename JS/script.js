let display=document.getElementById("inputText");
function appendToDisplay(input){
    display.value +=input
}


function clearDisplay(input){
    display.value=" "
}

function calculate(){
    try{
        display.value=eval(display.value)
    }catch(error){
        display.value="Error"
    }
}

function deleteOne() {
    let currentValue = display.value;
    if (currentValue.length === 0) {
        return; 
    }
    let newValue = currentValue.slice(0, -1);
    display.value = newValue;
}
