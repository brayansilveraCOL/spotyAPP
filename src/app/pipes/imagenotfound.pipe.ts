import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'imagenotfound'
})
export class ImagenotfoundPipe implements PipeTransform {

  transform(images: any[]): string {

    if(!images){
      return 'assets/img/original.png';
    }
    if(images.length>0){
      return images[0].url;
    }else{
      return 'assets/img/original.png';
    }
  }

}
