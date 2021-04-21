
'use strict';

const theParent = document.getElementById('theStand');

let hours=['6am','7am','8am','9am','10am','11am','12pm','1pm','2pm','3pm','4pm','5pm','6pm','7pm','8pm'];

/// seattle

let seattle = {
  Location:'seattle',
  minCus: 23,
  maxCus: 65,
  AvgCookieSale: 6.3,
  SalesperHour:[],


  Result: function(){
    const h2EL = document.createElement('h2');
    h2EL.textContent=this.Location;
    theParent.appendChild(h2EL);


    let ulEL =document.createElement('ul');
    theParent.appendChild(ulEL);


    let total=0;

    for (let i = 0; i < hours.length; i++){
      let Cookies = Math.ceil(getRandom(this.minCus,this.maxCus)*this.AvgCookieSale);
      this.SalesperHour.push(Cookies);
      total+=Cookies;

      let liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}:${this.SalesperHour[i]} Cookies`;
      ulEL.appendChild(liEl);
    }

    let liEl = document.createElement('li');
    liEl.textContent = `Total:${total} Cookies`;
    ulEL.appendChild(liEl);
  },

};

// eslint-disable-next-line new-cap
seattle.Result();




/// Tokyo

let Tokyo = {
  Location:'Tokyo',
  minCus: 3,
  maxCus: 24,
  AvgCookieSale: 1.2,
  SalesperHour:[],


  Result: function(){
    const h2EL = document.createElement('h2');
    h2EL.textContent=this.Location;
    theParent.appendChild(h2EL);


    let ulEL =document.createElement('ul');
    theParent.appendChild(ulEL);


    let total=0;

    for (let i = 0; i < hours.length; i++){
      let Cookies = Math.ceil(getRandom(this.minCus,this.maxCus)*this.AvgCookieSale);
      this.SalesperHour.push(Cookies);
      total+=Cookies;

      let liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}:${this.SalesperHour[i]} Cookies`;
      ulEL.appendChild(liEl);
    }

    let liEl = document.createElement('li');
    liEl.textContent = `Total:${total} Cookies`;
    ulEL.appendChild(liEl);
  },

};

// eslint-disable-next-line new-cap
Tokyo.Result();







/// Dubai

let Dubai = {
  Location:'Dubai',
  minCus: 11,
  maxCus: 38,
  AvgCookieSale: 3.7,
  SalesperHour:[],


  Result: function(){
    const h2EL = document.createElement('h2');
    h2EL.textContent=this.Location;
    theParent.appendChild(h2EL);


    let ulEL =document.createElement('ul');
    theParent.appendChild(ulEL);


    let total=0;

    for (let i = 0; i < hours.length; i++){
      let Cookies = Math.ceil(getRandom(this.minCus,this.maxCus)*this.AvgCookieSale);
      this.SalesperHour.push(Cookies);
      total+=Cookies;

      let liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}:${this.SalesperHour[i]} Cookies`;
      ulEL.appendChild(liEl);
    }

    let liEl = document.createElement('li');
    liEl.textContent = `Total:${total} Cookies`;
    ulEL.appendChild(liEl);
  },

};

// eslint-disable-next-line new-cap
Dubai.Result();






/// Paris

let Paris = {
  Location:'Paris',
  minCus: 20,
  maxCus: 38,
  AvgCookieSale: 2.3,
  SalesperHour:[],


  Result: function(){
    const h2EL = document.createElement('h2');
    h2EL.textContent=this.Location;
    theParent.appendChild(h2EL);


    let ulEL =document.createElement('ul');
    theParent.appendChild(ulEL);


    let total=0;

    for (let i = 0; i < hours.length; i++){
      let Cookies = Math.ceil(getRandom(this.minCus,this.maxCus)*this.AvgCookieSale);
      this.SalesperHour.push(Cookies);
      total+=Cookies;

      let liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}:${this.SalesperHour[i]} Cookies`;
      ulEL.appendChild(liEl);
    }

    let liEl = document.createElement('li');
    liEl.textContent = `Total:${total} Cookies`;
    ulEL.appendChild(liEl);
  },

};

// eslint-disable-next-line new-cap
Paris.Result();






/// Lima

let Lima = {
  Location:'Lima',
  minCus: 2,
  maxCus: 16,
  AvgCookieSale: 4.6,
  SalesperHour:[],


  Result: function(){
    const h2EL = document.createElement('h2');
    h2EL.textContent=this.Location;
    theParent.appendChild(h2EL);


    let ulEL =document.createElement('ul');
    theParent.appendChild(ulEL);


    let total=0;

    for (let i = 0; i < hours.length; i++){
      let Cookies = Math.ceil(getRandom(this.minCus,this.maxCus)*this.AvgCookieSale);
      this.SalesperHour.push(Cookies);
      total+=Cookies;

      let liEl = document.createElement('li');
      liEl.textContent = `${hours[i]}:${this.SalesperHour[i]} Cookies`;
      ulEL.appendChild(liEl);
    }

    let liEl = document.createElement('li');
    liEl.textContent = `Total:${total} Cookies`;
    ulEL.appendChild(liEl);
  },

};

// eslint-disable-next-line new-cap
Lima.Result();



function getRandom ( min, max ) {
  min = Math.ceil( min );
  max = Math.floor ( max );
  return Math.floor( Math.random() * ( max - min + 1 ) + min );}

