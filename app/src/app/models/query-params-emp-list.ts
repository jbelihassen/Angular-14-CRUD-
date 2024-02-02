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