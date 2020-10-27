// Moment declaration for day and time
moment(Date);
$("#currentDay").text(moment().format("ddd MMM Do YYY, h:mm a"));
// Moment current time
let currentTime = moment();
// Returning nearest hour for current time
currentTime = currentTime.startOf("hour");
// Setting start of the day at 9am
let beforeTime = moment().startOf("day").add(9, "hours");

// Time blocks
// 9 AM
let time1 = beforeTime.add(0, "h");
time1 = time1.format("hh:mm A");
// Print time into html
$(".block1").text(time1);
// 10 AM
let time2 = beforeTime.add(1, "h");
time2 = time2.format("hh:mm A");
$(".block2").text(time2);
// 11 AM
let time3 = beforeTime.add(1, "h");
time3 = time3.format("hh:mm A");
$(".block3").text(time3);
// 12 PM
let time4 = beforeTime.add(1, "h");
time4 = time4.format("hh:mm A");
$(".block4").text(time4);
// 1 PM
let time5 = beforeTime.add(1, "h");
time5 = time5.format("hh:mm A");
$(".block5").text(time5);
// 2 PM
let time6 = beforeTime.add(1, "h");
time6 = time6.format("hh:mm A");
$(".block6").text(time6);
// 3 PM
let time7 = beforeTime.add(1, "h");
time7 = time7.format("hh:mm A");
$(".block7").text(time7);
// 4 PM
let time8 = beforeTime.add(1, "h");
time8 = time8.format("hh:mm A");
$(".block8").text(time8);
// 5 PM
let time9 = beforeTime.add(1, "h");
time9 = time9.format("hh:mm A");
$(".block9").text(time9);

// Compare hours to currenty time slots
function showTime() {
  // Add time1 9 AM
  time1 = moment().startOf("day").add(9, "hours");
  // Adjust current time to the hour
  currentTime = currentTime.startOf("hour");
  // Add time1 if/else
  if (currentTime.isAfter(time1)) {
    $(".form9").addClass("past");
  } else if (currentTime.isBefore(time1)) {
    $(".form9").addClass("future");
  } else if (currentTime.isBefore(time1)) {
    $(".form9").addClass("present");
    0;
  }
  // Add time2 10 AM
  time2 = moment().startOf("day").add(10, "hours");
  // Add time2 if/else
  if (currentTime.isAfter(time2)) {
    $(".form10").addClass("past");
  } else if (currentTime.isBefore(time2)) {
    $(".form10").addClass("future");
  } else if (currentTime.isBefore(time2)) {
    $(".form10").addClass("present");
  }
  // Add time3 11 AM
  time3 = moment().startOf("day").add(11, "hours");
  // Add time3 if/else
  if (currentTime.isAfter(time3)) {
    $(".form11").addClass("past");
  } else if (currentTime.isBefore(time3)) {
    $(".form11").addClass("future");
  } else if (currentTime.isBefore(time3)) {
    $(".form11").addClass("present");
  }
  // Add time4 12 AM
  time4 = moment().startOf("day").add(12, "hours");
  // Add time4 if/else
  if (currentTime.isAfter(time4)) {
    $(".form12").addClass("past");
  } else if (currentTime.isBefore(time4)) {
    $(".form12").addClass("future");
  } else if (currentTime.isBefore(time4)) {
    $(".form12").addClass("present");
  }
  // Add time5 1 PM
  time5 = moment().startOf("day").add(13, "hours");
  // Add time5 if/else
  if (currentTime.isAfter(time5)) {
    $(".form1").addClass("past");
  } else if (currentTime.isBefore(time5)) {
    $(".form1").addClass("future");
  } else if (currentTime.isBefore(time5)) {
    $(".form1").addClass("present");
  }
  // Add time6 2 PM
  time6 = moment().startOf("day").add(14, "hours");
  // Add time6 if/else
  if (currentTime.isAfter(time6)) {
    $(".form2").addClass("past");
  } else if (currentTime.isBefore(time6)) {
    $(".form2").addClass("future");
  } else if (currentTime.isBefore(time6)) {
    $(".form2").addClass("present");
  }
  // Add time7 3 PM
  time7 = moment().startOf("day").add(15, "hours");
  // Add time2 if/else
  if (currentTime.isAfter(time7)) {
    $(".form3").addClass("past");
  } else if (currentTime.isBefore(time7)) {
    $(".form3").addClass("future");
  } else if (currentTime.isBefore(time7)) {
    $(".form3").addClass("present");
  }
  // Add time8 4 PM
  time8 = moment().startOf("day").add(16, "hours");
  // Add time8 if/else
  if (currentTime.isAfter(time8)) {
    $(".form4").addClass("past");
  } else if (currentTime.isBefore(time8)) {
    $(".form4").addClass("future");
  } else if (currentTime.isBefore(time8)) {
    $(".form4").addClass("present");
  }
  // Add time9 5 PM
  time9 = moment().startOf("day").add(17, "hours");
  // Add time9 if/else
  if (currentTime.isAfter(time9)) {
    $(".form5").addClass("past");
  } else if (currentTime.isBefore(time9)) {
    $(".form5").addClass("future");
  } else if (currentTime.isBefore(time9)) {
    $(".form5").addClass("present");
  }
}

showTime();
// Loop through input to get item from local storage
var x = [9, 10, 11, 12, 1, 2, 3, 4, 5];
// showTime loop
for (let i = 0; i < x.length; i++) {
  let dataHour = localStorage.getItem(x[i]);

  $(".form" + x[i]).val(dataHour);
}

// Even listener saving to local storage
$(".saveBtn").click(function () {
  event.preventDefault();
  let formValue = $(this).siblings(".form-control").val();
  let listItem = $(this).parent().data("hour");

  localStorage.setItem(listItem, formValue);
});
