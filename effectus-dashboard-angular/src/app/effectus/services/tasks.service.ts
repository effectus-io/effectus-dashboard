import { Injectable } from '@angular/core';

import { Observable } from "rxjs";
import { map } from "rxjs/operators";
import { Task } from '../entity/task.entity';
import { TaskGQL } from '../gql/task.query';
import { TasksGQL } from '../gql/tasks.query';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  constructor(private task: TaskGQL, private tasks: TasksGQL) { }

  getTask(key: string) : Observable<Task> {
    return this.task
      .watch({ key: key })
      .valueChanges.pipe(map(result => result.data.task));
  }

  getTasks(): Observable<Task[]> {
    return this.tasks
      .watch()
      .valueChanges.pipe(map(result => result.data.tasks));
  }

}
