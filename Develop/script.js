// moment.js script
var m = moment();

// get today's date to display when page is loaded
$("#currentDay").text(moment().format('MMMM Do, YYYY'));

$(document).ready( function() {
    colorChange ();
    renderText();
});

// function to change color of text area based on past, present, future
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

$(".saveBtn").click(function() {
    eventText = $(this).siblings(".input").val();
    console.log(eventText);
    eventTime = $(this).siblings(".hour").text();
    console.log(eventTime);
    localStorage.setItem(eventTime, JSON.stringify(eventText));

    colorChange ();
    renderText ();
    
});

    // get and set event text input
function renderText () {

    var saveEventText9 = JSON.parse(localStorage.getItem("9:00 am"));
    $("#9").val("");
    $("#9").val(saveEventText9);
    
    var saveEventText10 = JSON.parse(localStorage.getItem("10:00 am"));
    $("#10").val("");
    $("#10").val(saveEventText10);
    
    var saveEventText11 = JSON.parse(localStorage.getItem("11:00 am"));
    $("#11").val("");
    $("#11").val(saveEventText11);
    
    var saveEventText12 = JSON.parse(localStorage.getItem("12:00 pm"));
    $("#12").val("");
    $("#12").val(saveEventText12);
    
    var saveEventText1 = JSON.parse(localStorage.getItem("1:00 pm"));
    $("#13").val("");
    $("#13").val(saveEventText1);

    var saveEventText2 = JSON.parse(localStorage.getItem("2:00 pm"));
    $("#14").val("");
    $("#14").val(saveEventText2);

    var saveEventText3 = JSON.parse(localStorage.getItem("3:00 pm"));
    $("#15").val("");
    $("#15").val(saveEventText3);

    var saveEventText4 = JSON.parse(localStorage.getItem("4:00 pm"));
    $("#16").val("");
    $("#16").val(saveEventText4);

    var saveEventText5 = JSON.parse(localStorage.getItem("5:00 pm"));
    $("#17").val("");
    $("#17").val(saveEventText5);
};