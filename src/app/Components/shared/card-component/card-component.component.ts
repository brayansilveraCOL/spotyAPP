import { Component, OnInit, Input } from '@angular/core';
import {Router} from '@angular/router';
@Component({
  selector: 'app-card-component',
  templateUrl: './card-component.component.html',
  styleUrls: ['./card-component.component.css']
})
export class CardComponentComponent implements OnInit {
  @Input() artistas:any[]=[];
  constructor(private _router:Router) { }

  ngOnInit(): void {

  }
  verArtista(item:any){
      console.log(item)
    let artistaId;
      if(item.type==='artist'){
        artistaId = item.id;
      }else {
        artistaId = item.artists[0].id;
      }

      this._router.navigate(['/artista', artistaId])

  }

}
