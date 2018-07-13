import { Component, OnInit } from '@angular/core';
import { TODOS } from '../mock-todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  todos = TODOS;
  constructor() { }

  ngOnInit() {
  }

}
