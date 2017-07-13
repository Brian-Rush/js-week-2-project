import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  template: `
  <label>Filter </label>
  <select (change)="onChange($event.target.value)" id="filter">
    <option value="all" selected="selected">all</option>
    <option value="herbivorous">herbivorous</option>
    <option value="omnivorous">omnivorous</option>
    <option value="carnivorous">carnivorous</option>
  </select>
  <div class="animal-display">
    <div class="animal-card" *ngFor="let currentAnimal of childAnimalList | dietSort:filterByDiet">
      <ul>
        <li>{{currentAnimal.species}}</li>
        <li>{{currentAnimal.name}}</li>
        <li>{{currentAnimal.age}}</li>
        <li>{{currentAnimal.diet}}</li>
        <li>{{currentAnimal.location}}</li>
        <li>{{currentAnimal.caretakers}}</li>
        <li>{{currentAnimal.sex}}</li>
        <li>{{currentAnimal.likes}}</li>
        <li>{{currentAnimal.dislikes}}</li>
        <li >
        <button (click)="editButtonHasBeenClicked(currentAnimal)">Edit!</button>
        </li>
      </ul>
    </div>
  </div>
  <!-- <ul>
  </ul> -->
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
