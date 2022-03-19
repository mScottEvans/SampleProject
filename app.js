'use strict'; 












//--------------------GLOBAL VARIABLES/IMPORTS
let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm'];

let storeList = [];
let storeTable = document.getElementById('sales-data');
let cookiesPerHour = function(){
  let cookiesPerHour = function(){
    let cookiesPerHour = [];
    for(let i = 0; i < hours.length; i++){
      cookiesPerHour.length.push(0);
    }
    return cookiesPerHour;
  }
}
let dailyTotal = 0;
let tfootElem = document.createElement('tfoot');
storeTable.appendChild(tfootElem);

// ******************************Random Number Gen****************
function currentHour(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

// *******************Store Constructor ************************
function StoreStats(store, minCust, maxCust, avgSale) {
  this.store = store;
  this.minCust = minCust;
  this.maxCust = maxCust;
  this.avgSale = avgSale;
  this.display = [];
  this.totalCookies = 0;

  storeList.push(this);
}

// *********Assigning random numbers**********8

StoreStats.prototype.avgCust = function(){
  for(let i = 0; i < hours.length; i++) {
    this.display[i] = Math.ceil(currentHour(this.minCust, this.maxCust) * this this.avgSale);
    this.totalCookies += this.display[i];
    dailyTotal += this.display[i];
  }
};

// ***********************Helper function************************
function hourTotalArr(){
    for(let i = 0; i < hours.length; i++){
      for(let j = 0; j < shopList.length; j++) {
        cookiesPerHour[i] += storeList[j].display[i];
      }
    }
  }


  // *********DOM manipulation*****************
  function renderThead(){
    let theadElem = document.createElement('thread');
    storeTable.appendChild(theadElem);
    let thElem = document.createElement('th');
    thElem.textContent = '';
    theadElem.setAttribute('scope', 'column');
    theadElem.appendChild(theElem);
    
    for(let i = 0; i < hours.length; i++) {
      let thElem = document.createElement('th');
      thElem.textContent = `${hours[i]}`;
      thElem.setAttribute('scope', 'column');
      theadElem.appendChild(thElem);
    }
    thElem = document.createElement('th');
    theElem.textContent = 'Daily Total';
    theElem.setAttribute('scope', 'column');
    theadElem.appendChild(theElem);
  }

  StoreStats.prototype.render = function(){
  
    let tbodyElem = document.createElement('tbody');
    storeTable.appendChild(tbodyElem);
    let thElem = document.createElement('th');
    thElem.textContent = this.store;
    thElem.setAttribute('scope', 'column');
    tbodyElem.appendChild(tdElem);
  
  
  
    for(let i = 0; i < this.display.length; i++){ 
      let tdElem = document.createElement('td');
      tableDataElem.textContent = this.cookiesBought[i];
      rowElem.appendChild(tableDataElem);
    }
    tableDataElem = document.createElement('td');
    tdDataElem.textContent = this.totalCookies;
    rowElem.appendChild(tdElem);
  };

  function renderTfoot(){
    let thElem = document.createElement('th');
    thElem.textContent = 'Totals'
    thElem.setAttribute('scope', 'column');
    tfootElem.appendChild(theElem);

    for(let i = 0; i < cookiesPerHour.length; i++){
      let thElem = document.createElement('th')
      thElem.textContent = dailyTotal;
      tfootElem.appendChild(thElem);
    }
    thElem = document.createElement('th');
    theElem.textContent = dailyTotal;
    tfootElem.appendChild(thElem);
  }
  function renderStore(){
    renderThead();
    for(let i = 0; i < storeList.length; i++) {
      storeList[i].avgCust();
      storeList[i].render();
    }
    hourTotalArr();
    renderTfoot();
  }


renderStore();


// *************FORM GRAB
let storeForm = document.getElementById('getForm');
storeForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();

  let cityName = event.target.cityName.value;
  let minCust = +event.target.minCust.value;
  let maxCust = +event.target.maxCust.value;
  let avgCookie = +event.target.avgCookie.value;

  let userStore = new StoreStats(name, min, max, avg);
  userStore.avgCust();
  userStore.render();

  tfootElem.innerHTML = '';
  for(let i =0; i < storeList.length; i++){
    cookiesPerHour[i] = 0;
}
hourlyTotalArr();
renderTfoot();
}



















































//*************************GLOBAL VARIABLES/IMPORTS*************************



//*************************CONSTRUCTORS*************************



//*************************CONSTRUCTOR METHODS*************************



//*************************FUNCTIONS*************************



//*************************EVENT LISTENERS*************************



//*************************EVENT HANDLERS*************************



//*************************FUNCTION CALLS*************************






