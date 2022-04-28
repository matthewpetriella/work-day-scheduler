// moment.js script
var m = moment();

// get today's date to display when page is loaded
$("#currentDay").text(moment().format('MMMM Do, YYYY'));

$(document).ready( function() {
    colorChange ();
    renderText();
});

// function to change color of text area based on past, present, future
//source https://stackoverflow.com/questions/59995703/trying-to-change-background-color-based-off-if-the-hour-is-in-the-past-current
function colorChange () {
    
    var currentTime = moment().hours();

    $(".input").each(function () {
        var scheduledTime = parseInt($(this).attr("id"));

        if (currentTime > scheduledTime) {
            $(this).removeClass("future");
            $(this).removeClass("present");
            $(this).addClass("past");
        } else if (currentTime < scheduledTime) {
            $(this).removeClass("present");
            $(this).removeClass("past");
            $(this).addClass("future");
        } else {
            $(this).removeClass("future");
            $(this).removeClass("past");
            $(this).addClass("present");
        }
    });
}
// save button functionality
var eventText;
var eventTime;

//source: Javasctip and Jquery - Jon Duckett, Wiley publications"
$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    colorChange ();
    renderText ();
    
});