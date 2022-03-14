var am = document.getElementById('principal');
var rate = document.getElementById('rate');
var year = document.getElementById('years');
var re = document.getElementById('result');
function compute(){
    re.innerHTML=((am.value*rate.value)/100)*year.value;
}
