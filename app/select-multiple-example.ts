import {Component} from '@angular/core';
import {FormControl} from '@angular/forms';

/** @title Select with multiple selection */
@Component({
  selector: 'select-multiple-example',
  templateUrl: 'select-multiple-example.html',
  styleUrls: ['select-multiple-example.css'],
})
export class SelectMultipleExample {
  toppings = new FormControl();

  toppingList = [
    {name:'Fax1', paht:'abc',date: new Date()},
    {name:'Fax2', paht:'abc2',date: new Date()},
    {name:'Fax3', paht:'abc3',date: new Date()},
    {name:'Fax4', paht:'abc4',date: new Date()},
    {name:'Fax5', paht:'abc5',date: new Date()},
  ];
  selectedToppings;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */