import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {SpotifyService} from "../../services/spotify.service";
@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {
  artista:any={};
  track:any={};
  loading:boolean;
  constructor(private active:ActivatedRoute,
              private service:SpotifyService) {
    this.active.params.subscribe(params =>{
      this.getArtista(params['id'])
      this.getTopTracs(params['id'])
      this.loading=true;
    })
  }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.loading=true;
    this.service.getArtista(id)
      .subscribe(art =>{
          this.artista = art;
          console.log(this.artista)
        this.loading=false;
      })
  }

  getTopTracs(idx:string){
    this.service.getTopTracks(idx)
      .subscribe(track=>{
          console.log(track)
          this.track=track;
      })
  }



}
