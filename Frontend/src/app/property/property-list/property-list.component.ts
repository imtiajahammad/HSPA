
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HousingService } from 'src/app/services/housing.service';
import { IProperty } from '../IProperty.interface';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  SellRent=1;
  properties: Array<IProperty>=[];
  constructor(
    private route:ActivatedRoute,
    private housingService:HousingService
    ) {

   }

  ngOnInit(): void {
     /*this.http.get('data/properties.json').subscribe(
       data=>{
         this.Properties=data;
        console.log(data);

       }

       );*/
       if(this.route.snapshot.url.toString()){
         this.SellRent=2;
       }
       this.housingService.getAllProperties(this.SellRent).subscribe(
          data=>{
            console.log('get tasks works');
            this.properties=data;
            console.log(data);
            console.log('get tasks end');
            console.log( this.route.snapshot.url.toString() );
          }
          ,error=>{
            console.log(error);
          }

       )
  }

}
