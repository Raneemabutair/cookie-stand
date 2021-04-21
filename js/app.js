
'use strict';

// eslint-disable-next-line no-unused-vars
const tableEl = document.getElementById('tableEl');

function getRandom(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min);
}

let hours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];



/// main Function ///

function CityInfo(location, MinCust, MaxCust, AvgCookieSale) {

  this.location = location;
  this.MinCust = MinCust;
  this.MaxCust = MaxCust;
  this.AvgCookieSale = AvgCookieSale;
  this.salesbyhour = [];
  this.hourlycustomars = [];
  this.total = 0;
}

/// Calculations ///
// salesbyhour://


CityInfo.prototype.CookiesSalesPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let Cookies = Math.ceil(getRandom(this.minCus, this.maxCus) * this.AvgCookieSale);
    this.SalesperHour.push(Cookies);
    // eslint-disable-next-line no-undef
    total += Cookies;
  }
};

// CustomerPerHour //

CityInfo.prototype.CustomerPerHour = function () {
  for (let i = 0; i < hours.length; i++) {
    let Customer = Math.ceil(getRandom(this.minCus, this.maxCus));
    this.hourlycustomars.push(Customer);

  }
};

/// THe Total of Total///

function branchestotal() {
  let arraytotal = [];

  for (let i = 0; i < hours.length; i++) {
    let sum = Seattle.salesbyhour[i] + Tokyo.salesbyhour[i] + Dubai.salesbyhour[i] +
      Paris.salesbyhour[i] + Lima.salesbyhour[i];
    arraytotal.push(sum);
  }

  return arraytotal;

}
let totalDaily = Seattle.totalCookies + Tokyo.totalCookies + Dubai.totalCookies
  + Paris.totalCookies + Lima.totalCookies;

////************************************************************************************************************************ *///

/// the Table form ///

function Heading() {

  let TableOfHours = document.createElement('tr');
  tableEl.appendChild(TableOfHours);


  let TheLocation = document.createElement('th');
  TableOfHours.appendChild = (TheLocation);
  TheLocation.textContent = '';

  for (let i = 0; i < hours.length; i++) {
    let thEle = document.createElement('th');
    TableOfHours.appendChild(thEle);
    thEle.textContent = hours[i];
  }


  let totalofthesameplace = Document.createElement('th');
  TableOfHours.appendChild(totalofthesameplace);
  totalofthesameplace.textContent = (totalofthesameplace);
}


// eslint-disable-next-line new-cap
Heading();



CityInfo.prototype.newElem = function () {

  let cookiestable = document.createElement('tr');
  tableEl.appendChild(cookiestable);

  let address = document.createElement('td');
  cookiestable.appendChild(address);
  cookiestable.textContent = this.location;

  for (let i = 0; i < hours.length; i++) {
    let dailySales = document.createElement('td');
    cookiestable.appendChild(dailySales);
    dailySales.textContent = this.salesbyhour[i];
  }

  let TdEle = document.createElement('td');
  cookiestable.appendChild(TdEle);
  TdEle.textContent = this.total;

};

let Seattle = new CityInfo('Seattle', 23, 65, 6.3);

Seattle.salesbyhour();
Seattle.hourlycustomars();
Seattle.newElem();

let Tokyo = new CityInfo('Tokyo', 3, 24, 1.2);

Tokyo.salesbyhour();
Tokyo.hourlycustomars();
Tokyo.newElem();


let Dubai = new CityInfo('Dubai', 11, 38, 3.7);

Dubai.salesbyhour();
Dubai.hourlycustomars();
Dubai.newElem();


let Paris = new CityInfo('Paris', 20, 38, 2.3);

Paris.salesbyhour();
Paris.hourlycustomars();
Paris.newElem();

let Lima = new CityInfo('Lima', 2, 16, 4.6);

Lima.salesbyhour();
Lima.hourlycustomars();
Lima.newElem();




function footer() {

  let hoursTotal = document.createElement('tr');
  tableEl.appendChild(hoursTotal);

  let Finaltotal = document.createElement('td');
  Finaltotal.textContent = 'Total';
  hoursTotal.appendChild(Finaltotal);

  for (let i = 0; i < hours.length; i++) {
    let ALLTotal = document.createElement('td');
    ALLTotal.textContent = branchestotal()[i];
    hoursTotal.appendChild(ALLTotal);
  }


  let totalOftotal = document.createElement('td');
  totalOftotal.textContent = totalDaily;
  hoursTotal.appendChild(totalOftotal);
}

footer();





