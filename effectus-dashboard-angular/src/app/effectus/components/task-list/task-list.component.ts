import { Component, OnInit, Input } from "@angular/core";

import { Observable } from "rxjs";
import { Task } from "../../entity/task.entity";
import { TasksService } from "../../services/tasks.service";
import { ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-task-list",
  templateUrl: "./task-list.component.html",
  styleUrls: ["./task-list.component.scss"]
})
export class TaskListComponent implements OnInit {
  @Input("account") account: String;
  @Input("project") project: String;
  @Input("customer") customer: String;
  tasks: Observable<Task[]>;

  constructor(private data: TasksService, private route: ActivatedRoute) {}

  ngOnInit() {
    if (this.account == null && this.project == null && this.customer == null) {
      this.tasks = this.data.getTasks();
    } else if (this.account != null) {
      console.debug("Account:", this.account);
      this.tasks = this.data.getTasksByAccount(this.account);
    } else if (this.project != null) {
      console.debug("Project:", this.project);
      this.tasks = this.data.getTasksByProject(this.project);
    } else if (this.customer != null) {
      console.debug("Customer:", this.customer);
      this.tasks = this.data.getTasksByCustomer(this.customer);
    }
  }
}
