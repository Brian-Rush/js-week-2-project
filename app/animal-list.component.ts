import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <select (change)="onChange($event.target.value)">
    <option value="all" selected="selected">all</option>
    <option value="herbivorous">herbivorous</option>
    <option value="omnivorous">omnivorous</option>
    <option value="carnivorous">carnivorous</option>
  </select>
  <ul>
    <li *ngFor="let currentAnimal of childAnimalList | dietSort:filterByDiet">{{currentAnimal.species}} {{currentAnimal.name}} {{currentAnimal.age}} {{currentAnimal.diet}} {{currentAnimal.location}} {{currentAnimal.caretakers}} {{currentAnimal.sex}} {{currentAnimal.likes}} {{currentAnimal.dislikes}}
      <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
    </li>
  </ul>
  `
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
  @Output() clickSender = new EventEmitter();

  editButtonHasBeenClicked(animalToEdit: Animal) {
    this.clickSender.emit(animalToEdit);
  }

  // isDone(clickedAnimal: Animal) {
  //   if(clickedAnimal.done === true) {
  //     alert("This animal is done!");
  //   } else {
  //     alert("This animal is not done. Better get to work!");
  //   }
  // }

  // priorityColor(currentAnimal){
  //   if (currentAnimal.name === 3){
  //     return "bg-danger";
  //   } else if (currentAnimal.name === 2) {
  //     return  "bg-warning";
  //   } else {
  //     return "bg-info";
  //   }
  // }

  filterByDiet: string = "all";

  onChange(optionFromMenu) {
    this.filterByDiet = optionFromMenu;
  }

  // toggleDone(clickedAnimal: Animal, setCompleteness: boolean) {
  //   clickedAnimal.done = setCompleteness;
  // }
}
