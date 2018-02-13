import{Component,OnInit} from '@angular/core';
import {DataTableModule,SharedModule,InputTextModule,ButtonModule,DialogModule} from 'primeng/primeng';
import {CarService} from './car.service'
import {Car} from '../domain/car'

@Component({
    selector:'my-table',
    templateUrl:'./html/datatable.html',
    providers:    [CarService]
})

export class DataTableComponent implements OnInit {

    cars: Car[];
    cols: any[];
    
    constructor(private carService: CarService) { }

    ngOnInit() {
        this.carService.getCarsSmall().then(cars => this.cars = cars);
        
        this.cols = [
            {field: 'vin', header: 'Vin'},
            {field: 'year', header: 'Year'},
            {field: 'brand', header: 'Brand'},
            {field: 'color', header: 'Color'}
        ];
    }

}