import{Component, OnInit, ViewChild}from "@angular/core";
import {Chart}from "chart.js";

@Component({
selector: "app-dashboard",
templateUrl: "./dashboard.component.html",
styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
@ViewChild("DataChart") private chartRef;
chart: any;

data: {
labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"];
datasets: [
{
label: "# of Votes";
data: [12, 19, 3, 5, 2, 3];
// backgroundColor: [
//   "rgba(255, 99, 132, 0.2)",
//   "rgba(54, 162, 235, 0.2)",
//   "rgba(255, 206, 86, 0.2)",
//   "rgba(75, 192, 192, 0.2)",
//   "rgba(153, 102, 255, 0.2)",
//   "rgba(255, 159, 64, 0.2)"
// ],
// borderColor: [
//   "rgba(255,99,132,1)",
//   "rgba(54, 162, 235, 1)",
//   "rgba(255, 206, 86, 1)",
//   "rgba(75, 192, 192, 1)",
//   "rgba(153, 102, 255, 1)",
//   "rgba(255, 159, 64, 1)"
// ],
borderWidth: 1;
}
];
};

options: {
scales: {
yAxes: [
{
ticks: {
beginAtZero: true;
};
}
];
};
};

constructor() {}

  ngOnInit() {
    this.chart = new Chart(this.chartRef.nativeElement, {
      type: "bar",
      data: {
        labels: ["Mon", "Tue", "Wed", "Thu"],
        datasets: [
          {
            label: "Travel Time",
            type: "line",
            borderColor: "#8e5ea2",
            data: [408, 547, 675, 734],
            fill: false
          },
          {
            label: "Utilization",
            type: "line",
            borderColor: "#3e95cd",
            data: [133, 221, 783, 2478],
            fill: false
          },
          {
            label: "Europe",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            data: [408, 547, 675, 734]
          },
          {
            label: "Africa",
            type: "bar",
            backgroundColor: "rgba(0,0,0,0.2)",
            backgroundColorHover: "#3e95cd",
            data: [133, 221, 783, 2478]
          }
        ]
      },
      options: {
        title: {
          display: true,
          text: "Population growth (millions): Europe & Africa"
        },
        legend: { display: true }
      }
    });
  }
}
