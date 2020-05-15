import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpClientModule} from "@angular/common/http";
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  nuevasCanciones:any [] =[];
  loading:boolean;
  error:boolean;
  mensajeerror:string;
  //data:any[];
  //          private http:HttpClient
  constructor( private spotify:SpotifyService) {
    /*this.http.get('https://restcountries.eu/rest/v2/lang/es')
      .subscribe((data:any)=>{
          console.log(data);
          this.data = data;

      })*/
    this.loading=true;
    this.error =false;




    this.spotify.getNewRealease()
      .subscribe((data:any)=>{
        this.nuevasCanciones = data;
        this.loading=false;
      },(errorServicio)=>{
        this.error = true
        this.loading=true;
        this.mensajeerror = errorServicio.error.error.message;
        console.log(errorServicio.error.error.message)
      });
  }


  ngOnInit(): void {
  }



}
