
import { Component, OnInit } from '@angular/core';
import { HousingService } from 'src/app/services/housing.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  Properties: any;
  constructor(private housingService:HousingService) {

   }

  ngOnInit(): void {
     /*this.http.get('data/properties.json').subscribe(
       data=>{
         this.Properties=data;
        console.log(data);

       }

       );*/
       this.housingService.getAllProperties().subscribe(
          data=>{
            console.log('get tasks works');
            this.Properties=data;
            console.log(data);
            console.log('get tasks end');
          }
          ,error=>{
            console.log(error);
          }

       )
  }

}
