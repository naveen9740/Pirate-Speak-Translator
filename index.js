let btnTranslate=document.querySelector('#btn-translate');

let txtInput=document.querySelector('.txt-input');
console.log(txtInput);

let outputDiv=document.querySelector('#output');
console.log(outputDiv);

let serverUrl="https://api.funtranslations.com/translate/pirate.json";

function getTranslatedUrl(txt){
    return serverUrl+"?text="+txt;
}
function errorHandler(error){
    console.log('Error :'+error);
    alert('something went wrong, Try later');
}

function clickEventHandler(){
    console.log('clicked');
    console.log("Input: ",txtInput.value);

    fetch(getTranslatedUrl(txtInput.value))
    .then(response=>response.json())
    .then(json=>{
        let tranText=json.contents.translated;
        outputDiv.innerText=tranText;
    })
    .catch(errorHandler);
}
btnTranslate.addEventListener('click',clickEventHandler);
console.log(btnTranslate);