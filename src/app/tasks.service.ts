import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TasksService {
  tasks = [
    {name: 'Task 1', completed: false},
    {name: 'Task 2', completed: false},
    {name: 'Task 3', completed: false},
  ]

  constructor() {
  }



  addTask(newTaskName: string) {
    this.tasks.push({name: newTaskName, completed: false});

  }
}
