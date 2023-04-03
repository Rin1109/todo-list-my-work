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
  public tasksService: any;

  showCompleted: boolean = true;
  showNotCompleted: boolean = true;


  constructor() {
  }


  addTask(newTaskName: string) {
    this.tasks.push({ name: newTaskName, completed: false });
    this.tasksService.setTasks([...this.tasks]);
  }

  setTasks(tasks: ({ name: string; completed: boolean } | { name: string; completed: boolean } | { name: string; completed: boolean })[]) {

  }

  deleteTask(index: number) {
    this.tasks.splice(index, 1);
  }

  toggleShowCompleted() {
    this.showCompleted = !this.showCompleted;
  }

  toggleShowNotCompleted() {
    this.showNotCompleted = !this.showNotCompleted;
  }




}
