import { Injectable } from "@angular/core";

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Task } from "../entity/task.entity";
import { TaskGQL } from "../gql/task.query";
import { TasksGQL } from "../gql/tasks.query";
import { TasksByProjectGQL } from "../gql/tasks-by-project.query";
import { TasksByAccountGQL } from "../gql/tasks-by-account.query";
import { TasksByCustomerGQL } from "../gql/tasks-by-customer.query";

@Injectable({
  providedIn: "root"
})
export class TasksService {
  constructor(
    private task: TaskGQL,
    private tasks: TasksGQL,
    private tasksByAccount: TasksByAccountGQL,
    private tasksByProject: TasksByProjectGQL,
    private tasksByCustomer: TasksByCustomerGQL
  ) {}

  getTask(key: string): Observable<Task> {
    return this.task
      .watch({ key: key })
      .valueChanges.pipe(map(result => result.data.task));
  }

  getTasks(): Observable<Task[]> {
    return this.tasks
      .watch()
      .valueChanges.pipe(map(result => result.data.tasks));
  }

  getTasksByAccount(account: String): Observable<Task[]> {
    return this.tasksByAccount
      .watch({account: account})
      .valueChanges.pipe(map(result => result.data.tasksByAccount));
  }

  getTasksByProject(project: String): Observable<Task[]> {
    return this.tasksByProject
      .watch({ project: project })
      .valueChanges.pipe(map(result => result.data.tasksByProject));
  }

  getTasksByCustomer(customer: String): Observable<Task[]> {
    return this.tasksByCustomer
      .watch({ customer: customer })
      .valueChanges.pipe(map(result => result.data.tasksByCustomer));
  }
}
