let display =document.querySelector('#display')
 
const appendToDisplay = (value) =>{
    display.value += value;// display = display + value

}

function clearDisplay(){
    display.value = '';
}

function calculate(){
    try{
        display.value = eval(display.value);
    } catch(error){
        display.value = 'Error'
    }
}