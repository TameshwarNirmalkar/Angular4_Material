import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-angularmaterial',
    templateUrl: './angularmaterial.component.html',
    styleUrls: ['./angularmaterial.component.css']
})
export class AngularMaterial implements OnInit {
    private value:Number = 100;
    private title:String = 'Angular Material';
    private selectedValue: String;
    private foods: Array<Object>;
    private favoriteSeason: String;
    private seasons: Array<Object>;
    private folders: Array<Object>;

    constructor() {}
    ngOnInit() {
        this.foods = [
            {value: 'steak-0', viewValue: 'Steak'},
            {value: 'pizza-1', viewValue: 'Pizza'},
            {value: 'tacos-2', viewValue: 'Tacos'}
          ];
          
          this.seasons = ['Winter', 'Spring', 'Summer', 'Autumn'];
          
          this.folders = [
            {
              name: 'Photos',
              updated: new Date('1/1/16'),
            },
            {
              name: 'Recipes',
              updated: new Date('1/17/16'),
            },
            {
              name: 'Work',
              updated: new Date('1/28/16'),
            }
          ];
    }
}