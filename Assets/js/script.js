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

//collects current date and displays
var currentDate = function () {
    date = moment().format("dddd, MMMM Do");
    dateEl.textContent = date;
}

//compares timeslot vs current time to adjust color
var timeCompare9 = function () {
    var test = moment('9:00am', 'h:mma')
    if(moment().isBefore(test, 'hour') === true) {
        $(nineAmText).addClass("future");
    } else if (moment().isAfter(test, 'hour') === true) {
        $(nineAmText).addClass("past");
    } else {
        $(nineAmText).addClass("present");
    }; 
};
var timeCompare10 = function () {
    var test = moment('10:00am', 'h:mma')
    if(moment().isBefore(test, 'hour') === true) {
        $(tenAmText).addClass("future");
    } else if (moment().isAfter(test, 'hour') === true) {
        $(tenAmText).addClass("past");
    } else {
        $(tenAmText).addClass("present");
    }; 
};
var timeCompare11 = function () {
    var test = moment('11:00am', 'h:mma')
    if(moment().isBefore(test, 'hour') === true) {
        $(elvAmText).addClass("future");
    } else if (moment().isAfter(test, 'hour') === true) {
        $(elvAmText).addClass("past");
    } else {
        $(elvAmText).addClass("present");
    }; 
};
var timeCompareNoon = function () {
    var test = moment('12:00pm', 'h:mma')
    if(moment().isBefore(test, 'hour') === true) {
        $(noonText).addClass("future");
    } else if (moment().isAfter(test, 'hour') === true) {
        $(noonText).addClass("past");
    } else {
        $(noonText).addClass("present");
    }; 
};
var timeCompareOne = function () {
    var test = moment('1:00pm', 'h:mma')
    if(moment().isBefore(test, 'hour') === true) {
        $(onePmText).addClass("future");
    } else if (moment().isAfter(test, 'hour') === true) {
        $(onePmText).addClass("past");
    } else {
        $(onePmText).addClass("present");
    }; 
};
var timeCompareTwo = function () {
    var test = moment('2:00pm', 'h:mma')
    if(moment().isBefore(test, 'hour') === true) {
        $(twoPmText).addClass("future");
    } else if (moment().isAfter(test, 'hour') === true) {
        $(twoPmText).addClass("past");
    } else {
        $(twoPmText).addClass("present");
    }; 
};
var timeCompareThree = function () {
    var test = moment('3:00pm', 'h:mma')
    if(moment().isBefore(test, 'hour') === true) {
        $(threePmText).addClass("future");
    } else if (moment().isAfter(test, 'hour') === true) {
        $(threePmText).addClass("past");
    } else {
        $(threePmText).addClass("present");
    }; 
};
var timeCompareFour = function () {
    var test = moment('4:00pm', 'h:mma')
    if(moment().isBefore(test, 'hour') === true) {
        $(fourPmText).addClass("future");
    } else if (moment().isAfter(test, 'hour') === true) {
        $(fourPmText).addClass("past");
    } else {
        $(fourPmText).addClass("present");
    }; 
};
var timeCompareFive = function () {
    var test = moment('5:00pm', 'h:mma')
    if(moment().isBefore(test, 'hour') === true) {
        $(fivePmText).addClass("future");
    } else if (moment().isAfter(test, 'hour') === true) {
        $(fivePmText).addClass("past");
    } else {
        $(fivePmText).addClass("present");
    }; 
};

// click event saving to localStorage
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


// Loads content from localStorage
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

// call functions
timeCompare9();
timeCompare10();
timeCompare11();
timeCompareNoon();
timeCompareOne();
timeCompareTwo();
timeCompareThree();
timeCompareFour();
timeCompareFive();
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