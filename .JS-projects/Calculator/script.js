let calculation = localStorage.getItem('calculation') || '';

displayResult();
    
function updateCalculation(value){
    calculation+=value;
    displayResult();
    localStorage.setItem('calculation', calculation);
}

function displayResult(){
    document.querySelector('.js-result').innerHTML = calculation;
}

function handleResultKeyDown(event){
    if(event.key === 'Enter'){
        updateCalculation();
    }
}