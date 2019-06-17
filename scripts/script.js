'use strict';

class Numberdrome {
  constructor() {
    this.numbersList = [];
  }

  addNumber(n) {
    if (typeof n !== 'number') return;
    this.numbersList.push(n);
  }
  removeNumber(n) {
    let indexN = this.numbersList.indexOf(n);
    this.numbersList.splice(indexN, 1);
  }
  sum() {
    let sum = 0;
    if(this.numbersList.length) {
      for (let i = 0; i < this.numbersList.length; i++) {
        sum += this.numbersList[i];
      }
    }
    return sum;
  }
  product() {
    return this.numbersList.reduce(function(mult, current) {
      return mult * current;
    }, 1);
  }
  min() {
    if(this.numbersList.length) {
      return Math.min(...this.numbersList);
    } else {
      throw new Error('Empty list');
    }
  }
  max() {
    if(this.numbersList.length) {
      return Math.max(...this.numbersList);
    } else {
      throw new Error('Empty list');
    }
  }
}

let item = new Numberdrome();
item.addNumber(1);
item.addNumber(4);
item.addNumber(2);
item.addNumber(-2);
item.product();
item.sum();
item.min();
item.max();
