import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {


  constructor(public tasksService: TasksService) { }

  ngOnInit(): void {
  }

  get tasks() {
    return this.tasksService.tasks;
  }


  addTask(newTaskName: string) {
    this.tasksService.addTask(newTaskName);
    this.tasksService.setTasks([...this.tasks]);
  }

  deleteTask(index: number) {
    this.tasksService.deleteTask(index) ;
  }


}
