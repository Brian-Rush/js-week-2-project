import {Pipe, PipeTransform} from '@angular/core';
import {Animal} from './animal.model';

@Pipe({
  name: "dietSort",
  pure: false
})


export class DietSortPipe implements PipeTransform {


  transform(input: Animal[], desiredDiet) {
    var output: Animal[] = [];
    if(desiredDiet === "herbivores") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === 'herbivore') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiet === "omnivores") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === 'omnivore') {
          output.push(input[i]);
        }
      }
      return output;
    } else if (desiredDiet === "carnivores") {
      for (var i = 0; i < input.length; i++) {
        if (input[i].diet === 'carnivore') {
          output.push(input[i]);
        }
      }
      return output;
    } else {
      return input;
    }
  }


}
