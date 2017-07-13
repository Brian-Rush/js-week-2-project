import { Component, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'new-animal',
  template: `
    <h2>Admit New Animal</h2>
    <div>
      <label>Species:</label>
      <input #newSpecies>
      <label>Name:</label>
      <input #newName>
    </div>
    <div>
      <label>Age:</label>
      <input #newAge>
    </div>
    <div>
      <label>Diet:</label>
      <!-- <input #newDiet> -->
      <select #newDiet ng-model="selected_diet">
        <option value="" selected>-</option>
        <option value="herbivorous">herbivorous</option>
        <option value="omnivorous">omnivorous</option>
        <option value="carnivorous">carnivorous</option>
      </select>
    </div>
    <div>
      <label>Location:</label>
      <input #newLocation>
      <label>Caretakers:</label>
      <input #newCaretakers>
    </div>
    <div>
      <label>Sex:</label>
      <!-- <input #newSex> -->
      <select #newSex>
        <option value='' selected>-</option>
        <option value='Female'>Female</option>
        <option value='Male'>Male</option>
      </select>
    </div>
    <div>
      <label>Likes:</label>
      <input #newLikes>
      <label>Dislikes:</label>
      <input #newDislikes>
    </div>
    <div>
      <button (click)="submitForm(newSpecies.value, newName.value, newAge.value, newDiet.value, newLocation.value, newCaretakers.value, newSex.value, newLikes.value, newDislikes.value); newSpecies.value=''; newName.value=''; newAge.value=''; newDiet.value=''; newLocation.value=''; newCaretakers.value=''; newSex.value=''; newLikes.value=''; newDislikes.value='';">Done</button>
    </div>
  `
})

export class NewAnimalComponent {
  @Output() newAnimalSender = new EventEmitter();

  submitForm(species: string, name: string, age: number, diet: string, location: string, caretakers: number, sex: string, likes: string, dislikes: string) {
    var newAnimalToAdd: Animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.newAnimalSender.emit(newAnimalToAdd);
  }
}
