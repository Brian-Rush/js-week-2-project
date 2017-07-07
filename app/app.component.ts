import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  template: `
  <!-- <div class="JUMBOTRON CONTAINER">
    <p>
      WILL THIS SHOW??
    </p>
  </div> -->
      <div class="container">
        <p>{{month}}/{{day}}/{{year}}</p>
        <h1>Animal Manager</h1>
        <!-- <h3>{{currentFocus}}</h3> -->
        <animal-list [childAnimalList]="masterAnimalList" (clickSender)="editAnimal($event)"></animal-list>
        <hr>
        <edit-animal [childSelectedAnimal]="selectedAnimal" (doneButtonClickedSender)="finishedEditing()"></edit-animal>
        <new-animal (newAnimalSender)="addAnimal($event)"></new-animal>
      </div>
      `
    })

export class AppComponent {
  // currentFocus: string = 'Angular Homework';
  currentTime = new Date();
  month: number = this.currentTime.getMonth() + 1;
  day: number = this.currentTime.getDate();
  year: number = this.currentTime.getFullYear();
  selectedAnimal = null;

  masterAnimalList: Animal[] = [
    new Animal('Mountain Gorilla', 'Koko', 3, 'Omnivore', 'African Forests', 6, 'Male', 'Learning Sign Language', 'Kittens dying'),
    new Animal('Dog', 'Muffy', 10, 'Carnivore', 'House Pets of America!', 2, 'Female', 'Belly rubs', 'Fireworks'),
  ];

  editAnimal(clickedAnimal) {
    this.selectedAnimal = clickedAnimal;
  }

  finishedEditing() {
    this.selectedAnimal = null;
  }

  addAnimal(newAnimalFromChild: Animal) {
    this.masterAnimalList.push(newAnimalFromChild);
  }

}
