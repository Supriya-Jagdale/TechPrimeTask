import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customSlice'
})
export class CustomSlicePipe implements PipeTransform {

  transform(value: any, limit: number): any {
    if(value.length < limit){
      return value;
    }else{
      return value.substr(0, limit) + " ...";
    }
  }

}
