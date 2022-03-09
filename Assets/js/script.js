var dateEl = document.getElementById("currentDay");
var tasks = {};

var currentDate = function () {
    date = moment().format("MMM Do YY");
    dateEl.textContent = date;
    //console.log(date);
}

var loadTasks = function () {
    tasks = JSON.parse(localStorage.getItem("tasks"));

    if (!tasks) {
        tasks = {
            time: [],
            description: []
        };
    }
};

var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

currentDate();
loadTasks();