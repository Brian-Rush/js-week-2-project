import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  template: `
    <div>
        <div *ngIf="childSelectedAnimal">
          <h3>Edit Information for {{childSelectedAnimal.name}} the {{childSelectedAnimal.species}}</h3>
          <hr>
          <label>Species:</label>
          <input [(ngModel)]="childSelectedAnimal.species">
          <label>Name:</label>
          <input [(ngModel)]="childSelectedAnimal.name">
          <label>Age:</label>
          <input [(ngModel)]="childSelectedAnimal.age">
          <label>Diet:</label>
          <input [(ngModel)]="childSelectedAnimal.diet">
          <!-- <select [(ngModel)]="childSelectedAnimal.diet">
            <option [value]="" selected>-</option>
            <option [value]="herbivorous">herbivorous</option>
            <option [value]="omnivorous">omnivorous</option>
            <option [value]="carnivorous">carnivorous</option>
          </select> -->
          <label>Location:</label>
          <input [(ngModel)]="childSelectedAnimal.location">
          <label>Caretakers:</label>
          <input [(ngModel)]="childSelectedAnimal.caretakers">
          <label>Sex:</label>
          <input [(ngModel)]="childSelectedAnimal.sex">
          <!-- <select [(ngModel)]="childSelectedAnimal.sex">
            <option [value]="-" selected>-</option>
            <option [value]="Female">Female</option>
            <option [value]="Male">Male</option>
          </select> -->
          <label>Likes:</label>
          <input [(ngModel)]="childSelectedAnimal.likes">
          <label>Dislikes:</label>
          <input [(ngModel)]="childSelectedAnimal.dislikes">

          <!-- <label>Enter Task Priority (1-3):</label><br>
          <input type="radio" [(ngModel)]="childSelectedAnimal.priority" [value]="1">1 (Low Priority)<br>
          <input type="radio" [(ngModel)]="childSelectedAnimal.priority" [value]="2">2 (Medium Priority)<br>
          <input type="radio" [(ngModel)]="childSelectedAnimal.priority" [value]="3">3 (High Priority) -->
          <button (click)="doneButtonClicked()">Done</button>
        </div>
      </div>
  `
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneButtonClickedSender = new EventEmitter()

  doneButtonClicked() {
    this.doneButtonClickedSender.emit();
  }
}
