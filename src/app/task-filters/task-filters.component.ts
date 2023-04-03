import { Component, OnInit } from '@angular/core';
import {TasksService} from "../tasks.service";

@Component({
  selector: 'app-task-filters',
  templateUrl: './task-filters.component.html',
  styleUrls: ['./task-filters.component.css']
})
export class TaskFiltersComponent implements OnInit {
  showCompleted: boolean = true;
  showNotCompleted: boolean = true;

  constructor(public tasksService: TasksService) { }


  ngOnInit(): void {
  }

  toggleShowCompleted() {
    this.tasksService.toggleShowCompleted()
  }

  toggleShowNotCompleted() {
    this.tasksService.toggleShowNotCompleted()
  }

}
