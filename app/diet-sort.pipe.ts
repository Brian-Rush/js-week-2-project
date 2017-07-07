import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "dietSort",
  pure: false
})


export class DietSortPipe implements PipeTransform {


  transform(input: Animal[], desiredDiet) {
    var output: Animal[] = [];
    if(desiredDiet === "herbivorous") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "herbivorous") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiet === "omnivorous") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === "omnivorous") {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiet === "carnivorous") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === 'carnivorous') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
