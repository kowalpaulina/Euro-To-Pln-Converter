
var convert = document.getElementById("convert");
var eurValueInput = document.getElementById("euro");
var form = document.getElementById("formConvert");


function getPolishCurrency(event){

    event.preventDefault();
    event.stopPropagation();

    var eurValue = eurValueInput.value;
    var euroExchangeRate = 4.2*(1+(Math.random() * 100)/1000);
    var pln = euroExchangeRate * eurValue;
    var roundPln = +(pln.toFixed(4));
    
    createDiv(roundPln,currentDate());

    return false;
}

function currentDate(){
    var currentdate = new Date();
    var month = currentdate.getMonth()+1;
    if(month<10){
      month = "0"+month;}

    var minute = currentdate.getMinutes();
    if(minute<10){
          minute = "0"+minute;}

    var datetime = currentdate.getDate() + "/"
                + month + "/" 
                + currentdate.getFullYear() + " "  
                + currentdate.getHours() + ":"  
                + minute + ":" 
                + currentdate.getSeconds();
              
              return datetime;
}

function createDiv(plnValue,datetime){
  
  var result = document.getElementById("result");

  //box with result
  var currencyDateContainer = document.createElement("div");
  currencyDateContainer.className = "js-amount-date-container";

  //box with pln
  var polishCurrencyBox = document.createElement("div");
  polishCurrencyBox.className = "js-amount-box";
  polishCurrencyBox.innerHTML = plnValue;

  //box with info: pln amount
  var plnAmountInfoText = document.createElement("div");
  plnAmountInfoText.className = "js-info-text";
  plnAmountInfoText.innerHTML = "pln amount";
  

  //box with date
  var dateBox = document.createElement("div");
  dateBox.className = "js-date-box";
  dateBox.innerHTML = "<span class='icon ion-ios-clock-outline'</span>" + "<span>"+ datetime + "</span>";


  
  //append boxes
  plnAmountInfoText
  currencyDateContainer.appendChild(plnAmountInfoText);
  currencyDateContainer.appendChild(polishCurrencyBox);
  currencyDateContainer.appendChild(dateBox);
  result.prepend(currencyDateContainer);
}

convert.addEventListener("click",getPolishCurrency,false);

