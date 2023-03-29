import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor(private tasksService: TasksService) { }

  ngOnInit(): void {
  }

  get tasks() {
    return this.tasksService.tasks;
  }


  addTask(newTaskName: string) {
    this.tasksService.addTask(newTaskName);
  }

}
