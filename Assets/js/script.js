var dateEl = document.getElementById("currentDay");
var nineAmText = document.querySelector("#task-text-9");
var tenAmText = document.querySelector("#task-text-10");
var elvAmText = document.querySelector("#task-text-11");
var noonText = document.querySelector("#task-text-noon");
var onePmText = document.querySelector("#task-text-1");
var twoPmText = document.querySelector("#task-text-2");
var threePmText = document.querySelector("#task-text-3");
var fourPmText = document.querySelector("#task-text-4");
var fivePmText = document.querySelector("#task-text-5");

var tasks = { nineAm: "", tenAm: "", elvAm: "", noon: "", onePm: "", twoPm: "", threePm: "", fourPm: "", fivePm: "" };

var currentDate = function () {
    date = moment().format("MMMM Do YYYY");
    dateEl.textContent = date;
}

var timeCompare9 = function () {
    var time = moment().format("h:mma");
    var test = moment('9:00am', 'h:mma')
    console.log(time);

    if(moment().isBefore(test, 'hour') === true) {
        console.log(moment().isBefore(test, 'hour'));
        $(nineAmText).addClass("future");
    } else if (moment().isAfter(test, 'hour') === true) {
        console.log(moment().isBefore(test, 'hour'));
        $(nineAmText).addClass("past");
    } else {
        $(nineAmText).addClass("present");
    }; 
};

// var loadTasks = function () {
//     tasks = JSON.parse(localStorage.getItem("tasks"));

//     if (!tasks) {
//         tasks = {
//             time: [],
//             description: []
//         };
//     }
// };

var saveTasks = function () {
    localStorage.setItem("tasks", JSON.stringify(tasks));
}


$(".saveBtn-9am").click(function () {
    var taskText = $.trim($("#task-text-9").val());
    localStorage.setItem("tasks.nineAm", JSON.stringify(taskText));
});

$(".saveBtn-10am").click(function () {
    var taskText = $.trim($("#task-text-10").val());
    localStorage.setItem("tasks.tenAm", JSON.stringify(taskText));
});

$(".saveBtn-11am").click(function () {
    var taskText = $.trim($("#task-text-11").val());
    localStorage.setItem("tasks.elvAm", JSON.stringify(taskText));
});

$(".saveBtn-noon").click(function () {
    var taskText = $.trim($("#task-text-noon").val());
    localStorage.setItem("tasks.noon", JSON.stringify(taskText));
});

$(".saveBtn-1pm").click(function () {
    var taskText = $.trim($("#task-text-1").val());
    localStorage.setItem("tasks.onePm", JSON.stringify(taskText));
});

$(".saveBtn-2pm").click(function () {
    var taskText = $.trim($("#task-text-2").val());
    localStorage.setItem("tasks.twoPm", JSON.stringify(taskText));
});

$(".saveBtn-3pm").click(function () {
    var taskText = $.trim($("#task-text-3").val());
    localStorage.setItem("tasks.threePm", JSON.stringify(taskText));
});

$(".saveBtn-4pm").click(function () {
    var taskText = $.trim($("#task-text-4").val());
    localStorage.setItem("tasks.fourPm", JSON.stringify(taskText));
});

$(".saveBtn-5pm").click(function () {
    var taskText = $.trim($("#task-text-5").val());
    localStorage.setItem("tasks.fivePm", JSON.stringify(taskText));
});



var loadTasks9am = function () {
    var taskText = JSON.parse(localStorage.getItem("tasks.nineAm"));
    nineAmText.textContent = taskText;
};

var loadTasks10am = function () {
    var taskText = JSON.parse(localStorage.getItem("tasks.tenAm"));
    tenAmText.textContent = taskText;
};

var loadTasks11am = function () {
    var taskText = JSON.parse(localStorage.getItem("tasks.elvAm"));
    elvAmText.textContent = taskText;
};

var loadTasksNoon = function () {
    var taskText = JSON.parse(localStorage.getItem("tasks.noon"));
    noonText.textContent = taskText;
};

var loadTasks1pm = function () {
    var taskText = JSON.parse(localStorage.getItem("tasks.onePm"));
    onePmText.textContent = taskText;
};

var loadTasks2pm = function () {
    var taskText = JSON.parse(localStorage.getItem("tasks.twoPm"));
    twoPmText.textContent = taskText;
};

var loadTasks3pm = function () {
    var taskText = JSON.parse(localStorage.getItem("tasks.threePm"));
    threePmText.textContent = taskText;
};

var loadTasks4pm = function () {
    var taskText = JSON.parse(localStorage.getItem("tasks.fourPm"));
    fourPmText.textContent = taskText;
};

var loadTasks5pm = function () {
    var taskText = JSON.parse(localStorage.getItem("tasks.fivePm"));
    fivePmText.textContent = taskText;
};


timeCompare9();
currentDate();
loadTasks9am();
loadTasks10am();
loadTasks11am();
loadTasksNoon();
loadTasks1pm();
loadTasks2pm();
loadTasks3pm();
loadTasks4pm();
loadTasks5pm();