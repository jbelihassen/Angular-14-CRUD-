// import { QueryParams, UtilisateurDto } from 'a3dn-shared-lib';
// import { TaskFilterType } from './task-filter-type.enum';
// import { ParamsTaskList } from './task-list-params';

// export class QueryParamsTaskList {
//   taskFilter: TaskFilterType = TaskFilterType.open;
//   userFilter: UtilisateurDto | null = null;
//   constructor() {
   
//   }
// getPagination(): ParamsTaskList {
//     return {
//       page: this.page,
//       taillePage: this.pageSize,
//       taskFilter: this.taskFilter,
//       userFilter: this.userFilter,
//     };
//   }

//   getRoutingParams(): {} {
//     return {
//       taskFilter: this.taskFilter,
//       userFilter: this.userFilter,
//     };
//   }

//   setTaskTypeFilter(filter: TaskFilterType) {
//     this.taskFilter = filter;
//   }
//   setUserFilter(user: UtilisateurDto) {
//     this.userFilter = user;
//   }
// }


// **   **//

// import { UtilisateurDto } from 'a3dn-shared-lib';
// import { TaskFilterType } from './task-filter-type.enum';

// export interface ParamsTaskList {
//   page: number;
//   taillePage: number;
//   taskFilter: TaskFilterType;
//   userFilter: UtilisateurDto | null;
// }

//**   **/
// import {
//     ChangeDetectorRef,
//     Component,
//     Input,
//     OnInit,
//     SimpleChanges,
//   } from '@angular/core';
//   import { TaskListService } from '../tasks-summary/task-list/task-list.service';
//   import { Task } from '../task-models/task';
//   import { NewTaskDialogService } from '../shared/new-task-dialog/new-task-dialog.service';
//   import { TaskRowService } from '../shared/task-row/task-row.service';
//   import { QuickFilter } from './all-tasks-filters/all-tasks-filters.component';
//   import moment from 'moment';
//   import { A3dnListComponent, UtilisateurDto } from 'a3dn-shared-lib';
//   import { TaskFilterType } from '../task-models/task-filter-type.enum';
//   import { AllTaskListService } from './all-task-list.service';
//   import { QueryParamsTaskList } from '../task-models/task-query-params';
  
//   @Component({
//     selector: 'all-task-list',
//     templateUrl: './all-task-list.component.html',
//     styleUrls: ['./all-task-list.component.scss'],
//   })
//   export class AllTaskListComponent
//     extends A3dnListComponent<Task>
//     implements OnInit
//   {
//     @Input() taskFilter: TaskFilterType = TaskFilterType.open;
  
//     @Input() userFilter: UtilisateurDto | null = null;
//     filterTask = TaskFilterType;
//     filteredList: Task[] = [];
//     taskList: Task[] = [];
//     override queryParams!: QueryParamsTaskList;
  
//     constructor(
//       cdr: ChangeDetectorRef,
//       private newTaskDialogService: NewTaskDialogService,
//       private taskRowService: TaskRowService,
//       private allTaskListService: AllTaskListService
//     ) {
//       super(cdr);
//     }
  
//     ngOnInit() {
//       this.queryParams = new QueryParamsTaskList();
//       this.refreshTasks();
  
//       this.newTaskDialogService.addTaskSubject.subscribe(() => {
//         this.refreshTasks();
//       });
//       this.taskRowService.deleteTaskSubject.subscribe(() => {
//         this.refreshTasks();
//       });
//     }
  
//     onTaskFilterHandler(event: TaskFilterType) {
//       this.taskFilter = event;
//     }
  
//     onUserFilterHandler(event: UtilisateurDto | null) {
//       this.userFilter = event;
//     }
  
//     refreshTasks() {
//       this.queryParams.reset();
//       this.resetList();
//       this.refreshList();
//     }
  
//     getList(): void {
//       this.allTaskListService
//         .taskList(this.queryParams.getPagination())
//         .subscribe((result) => {
//           if (result === undefined) {
//             throw new Error('Le service ne renvoit aucun résultat');
//           }
//           this.pushElementsToList(result);
//           console.log('elements :>> ', this.elements);
//           this.detectChanges();
//         });
//     }
  
    // getList(): void {
    //   this.taskListService.taskList().subscribe((result) => {
    //     if (result === undefined) {
    //       throw new Error('Le service ne renvoit aucun résultat');
    //     }
    //     this.pushElementsToList(result);
    //     this.taskList = result;
    //     this.filteredList = this.taskList;
  
    //     if (this.taskFilter === this.filterTask.open) {
    //       this.filterOpened();
    //     }
  
    //     if (this.taskFilter === this.filterTask.undated) {
    //       this.filterNonDated();
    //     }
    //     if (this.taskFilter === this.filterTask.today) {
    //       this.filterToday();
    //     }
    //     if (this.taskFilter === this.filterTask.tomorrow) {
    //       this.filterTomorrow();
    //     }
    //     if (this.taskFilter === this.filterTask.completed) {
    //       this.filterEnded();
    //     }
    //     if (this.taskFilter === this.filterTask.later) {
    //       this.getLateTasks();
    //     }
    //     this.detectChanges();
    //   });
    // }
  
    // ngOnChanges(changes: SimpleChanges) {
    //   if (changes && this.taskFilter === this.filterTask.open) {
    //     this.filterOpened();
    //   }
  
    //   if (changes && this.taskFilter === this.filterTask.undated) {
    //     this.filterNonDated();
    //   }
    //   if (changes && this.taskFilter === this.filterTask.today) {
    //     this.filterToday();
    //   }
    //   if (changes && this.taskFilter === this.filterTask.tomorrow) {
    //     this.filterTomorrow();
    //   }
    //   if (changes && this.taskFilter === this.filterTask.completed) {
    //     this.filterEnded();
    //   }
    //   if (changes && this.taskFilter === this.filterTask.later) {
    //     this.getLateTasks();
    //   }
  
      // if (changes.userFilter) {
      //   this.filterTasksByUser(this.userFilter);
      // }
    //   if (changes.userFilter && this.taskFilter) {
    //     let params: Params = {
    //       taskFilter: this.taskFilter,
    //       userFilter: this.userFilter,
    //     };
    //     this.TasksByUserTaskFilter(params);
    //   }
  
      // if (changes && this.taskFilter === 'Cette semaine') {
      //   const today = moment().startOf('day');
      //   const endOfWeek = moment().endOf('week');
  
      //   let tasksThisWeek = this.taskList.filter((task: Task) => {
      //     const taskDate = moment(task.date, 'YYYY-MM-DD');
      //     return taskDate.isBetween(today, endOfWeek, 'day', '[]');
      //   });
  
      //   this.filteredList = tasksThisWeek;
      // }
    // }
  
    // filterOpened() {
    //   let tasksOpened = this.taskList.filter((task: Task) => !task.closed);
    //   this.filteredList = tasksOpened;
    // }
  
    // filterNonDated() {
    //   let tasksUndated = this.taskList.filter(
    //     (task: Task) =>
    //       (task.date === null || task.date === undefined || '') && !task.closed
    //   );
    //   this.filteredList = tasksUndated;
    // }
  
    // filterToday() {
    //   const today = moment();
    //   const formattedToday = today.format('YYYY-MM-DD');
  
    //   let tasksToday = this.taskList.filter(
    //     (task: Task) => task.date === formattedToday && !task.closed
    //   );
    //   this.filteredList = tasksToday;
    // }
  
    // filterTomorrow() {
    //   const tomorrow = moment().add(1, 'day');
    //   const formattedTomorrow = tomorrow.format('YYYY-MM-DD');
    //   let tasksTomorrow = this.taskList.filter((task: Task) => {
    //     const taskDate = moment(task.date, 'YYYY-MM-DD');
    //     return taskDate.isSame(formattedTomorrow, 'day') && !task.closed;
    //   });
  
    //   this.filteredList = tasksTomorrow;
    // }
  
    // filterEnded() {
    //   let endedTasks = this.taskList.filter((task: Task) => {
    //     return task.closed;
    //   });
  
    //   this.filteredList = endedTasks;
    // }
  
    // filterTasksByUser(userFilter: UtilisateurDto | null) {
    //   console.log('userFilter :>> ', userFilter);
    //   if (!userFilter) this.filteredList = this.taskList;
    //   else {
    //     const filteredTasks = this.taskList.filter((task: Task) => {
    //       return task.user && task.user.id === userFilter.id;
    //     });
  
    //     this.filteredList = filteredTasks;
    //   }
    // }
  
//     getLateTasks() {
//       const today = moment();
//       let tasksOverdue = this.taskList.filter((task: Task) => {
//         const taskDate = moment(task.date, 'YYYY-MM-DD');
//         return taskDate.isBefore(today, 'day') && !task.closed;
//       });
//       this.filteredList = tasksOverdue;
//     }
  
//     TasksByUserTaskFilter(params: Params) {
//       const today = moment();
//       const formattedToday = today.format('YYYY-MM-DD');
//       const filteredTasks = this.taskList.filter((task: Task) => {
//         return (
//           task.user?.id === params.userFilter?.id &&
//           task.date === params.taskFilter
//         );
//       });
  
//       this.filteredList = filteredTasks;
//     }
//   }
  
//   export interface Params {
//     userFilter: UtilisateurDto | null;
//     taskFilter: QuickFilter;
//   }
  
  