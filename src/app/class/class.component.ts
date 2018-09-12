import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-class',
  templateUrl: './class.component.html',
  styleUrls: ['./class.component.scss']
})
export class ClassComponent implements OnInit {

  class1detail = true;
  scienceVisible = true;
  commerceVisible = true;
  artsVisible = true;
  commerceChecked = false;
  scienceChecked = false;
  artsChecked = false;
  class1science = true;
  class1commerce = true;

  dropdownList = [];
  selectedItems = [];
  dropdownSettings = {};
  DivisiondropdownSettings = {};
  DivisiondropdownList = [];

  ScienceselectedItems = [];

  CommerceselectedItems = [];

  ArtsselectedItems = [];

  constructor() { }

  ngOnInit() {
    this.dropdownList = [
      { "id": 1, "itemName": "Science" },
      { "id": 2, "itemName": "Commerce" },
      { "id": 3, "itemName": "Arts" },
    ];

    this.DivisiondropdownList = [
      { "id": 1, "itemName": "A" },
      { "id": 2, "itemName": "B" },
      { "id": 3, "itemName": "C" },
    ]


    this.selectedItems = [
    ];

    this.ScienceselectedItems = [
    ];

    this.CommerceselectedItems = [
    ];

    this.dropdownSettings = {
      singleSelection: false,
      text: "Select Stream",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };

    this.DivisiondropdownSettings = {
      singleSelection: false,
      text: "Select Division",
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      enableSearchFilter: true,
      classes: "myclass custom-class"
    };
  }

  onItemSelect(item: any) {
    // console.log(item);
    console.log(this.selectedItems);
    this.selectedItems.forEach(val => {
      if (val.itemName == "Science") {
        this.scienceVisible = false;
      }
      if (val.itemName == "Commerce") {
        this.commerceVisible = false;
      }
      if (val.itemName == "Arts") {
        this.artsVisible = false;
      }
    });
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    // console.log(this.selectedItems);
    if (item.itemName == "Science") {
      this.scienceVisible = true;
      this.scienceChecked = false;
    }
    if (item.itemName == "Commerce") {
      this.commerceVisible = true;
      this.commerceChecked = false;
    }
    if (item.itemName == "Arts") {
      this.artsVisible = true;
      this.artsChecked = false;
    }
  }
  onSelectAll(items: any) {
    console.log(items);
    this.scienceVisible = false;
    this.commerceVisible = false;
    this.artsVisible = false;
  }
  onDeSelectAll(items: any) {
    console.log(items);
    this.scienceVisible = true;
    this.commerceVisible = true;
    this.artsVisible = true;

  }

  //Science Division selection methods

  ScienceonItemSelect(item: any) {
    console.log(item, 'in Science Stream');
    console.log(this.ScienceselectedItems, 'in science stream');
  }
  ScienceOnItemDeSelect(item: any) {
    console.log(item, 'in science stream');
    console.log(this.ScienceselectedItems, 'in science stream');
  }
  ScienceonSelectAll(items: any) {
    console.log(items, 'in science stream');
  }
  ScienceonDeSelectAll(items: any) {
    console.log(items, 'in science stream');
  }

  // Commerce division selectiion methods

  CommerceonItemSelect(item: any) {
    console.log(item, 'in Commerce Stream');
    console.log(this.CommerceselectedItems, 'in Commerce stream');
  }
  CommerceOnItemDeSelect(item: any) {
    console.log(item, 'in Commerce stream');
    console.log(this.CommerceselectedItems, 'in Commerce stream');
  }
  CommerceonSelectAll(items: any) {
    console.log(items, 'in Commerce stream');
  }
  CommerceonDeSelectAll(items: any) {
    console.log(items, 'in Commerce stream');
  }

  //Arts division methods

  ArtsonItemSelect(item: any) {
    console.log(item, 'in Arts Stream');
    console.log(this.ArtsselectedItems, 'in Arts stream');
  }
  ArtsOnItemDeSelect(item: any) {
    console.log(item, 'in Arts stream');
    console.log(this.ArtsselectedItems, 'in Arts stream');
  }
  ArtsonSelectAll(items: any) {
    console.log(items, 'in Arts stream');
  }
  ArtsonDeSelectAll(items: any) {
    console.log(items, 'in Arts stream');
  }




  classcheck() {
    console.log('checked');
    this.class1detail = !this.class1detail;
  }

  ScienceSection() {
    this.scienceChecked = !this.scienceChecked;
  }

  CommerceSection() {
    this.commerceChecked = !this.commerceChecked;
  }

  ArtsSection() {
    this.artsChecked = !this.artsChecked;
  }

}
