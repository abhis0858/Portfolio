
var translateBtn = document.querySelector("#btn-translate");
var Input = document.querySelector("#txt-input");
var output = document.querySelector("#output");


var serverURL = "https://api.funtranslations.com/translate/minion.json";


function getTranslationURL(input) {
    return serverURL + "?" + "text=" + input
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("something went wrong try again later!");
}


function clickHandler() {
    var inputText = Input.value; // taking input
    
    // calling server for processing
    fetch(getTranslationURL(inputText))
        .then(response => response.json())
        .then(json => {
            var txtTranslated = json.contents.translated;
            output.innerText = txtTranslated; // output
           })
        .catch(errorHandler)
};

translateBtn.addEventListener("click", clickHandler);