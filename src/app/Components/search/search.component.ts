import { Component, OnInit } from '@angular/core';
import {SpotifyService} from "../../services/spotify.service";

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  artistas:any[]=[];
  loading:boolean;
  constructor(private http: SpotifyService) {
  }

  ngOnInit(): void {
  }
  buscar(termino:string){
    this.loading=true;
    this.http.getArtistas(termino)
      .subscribe((data:any)=>{
        console.log(data.artists.items)
        this.artistas = data.artists.items;
        this.loading=false;
      })
  }

}
