import { Pipe, PipeTransform } from '@angular/core';
import { Request } from '../request/request.class'
import { User } from '../user/user.class'

@Pipe({
  name: 'search'
})
export class RequestSearchPipe implements PipeTransform {

  transform(requests: Request[], criteria: string): Request[] {
    if(criteria == "")
      return requests;
    let arrOut: Request[] = [];
    for(let request of requests){
      if(request.description.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(request);
        continue;
      }
      if(request.justification.toLowerCase().includes(criteria.toLowerCase())){
        arrOut.push(request);
        continue;
      }
    }
    return arrOut;
  }
}
