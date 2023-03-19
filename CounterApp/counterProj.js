// select the element that thas id counter take in countValue variable
let countValue= document.querySelector('#counter');


function increament() {
    // get the innerText and from above we get value as string so convert into int use parseInt method
    let value=parseInt(countValue.innerText);
    // increamentv the value
    value=value+1;
    // set value to the ui using innerText method
    countValue.innerText=value;
}

function  decreament(){
    let value=parseInt(countValue.innerText);
    value=value-1;
    countValue.innerText=value;
}