import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'game-progression-project';
  thingsToDo = ['1', '2', '3'];
  thingsCompleted = [];
  summary(): string {
    return `${this.thingsToDo.length} done / ${
      this.thingsCompleted.length
    } to do`;
  }
  onNewItem(item: string) {
    this.thingsToDo.push(item);
  }
}
