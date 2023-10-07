//Selecting the elements we want to manipulate 
var saveButton = $(".btn")
var textAreaEl =$(".description");
//This gives us the current date/hour and the option to format our date 
var date = new Date();
var currentHour = date.getHours();
var currentDate = dayjs();
//This is the event listner for the saveButton 
$(document).ready(function(){
  $(".btn").on("click", function(){
//$(this) refers to the (.btn) so that when (.btn) is clicked it knows which time block it's referencing 
    var time = $(this).closest(".time-block").attr("id");
    var value = $(this).siblings(".description").val();
//Time is the key and value is the value of the input from the textarea by the user 
    localStorage.setItem(time, value);
  });
//This is grabbing all the stored values from local storge  
  $('#9 .description').val(localStorage.getItem('9'))
  $('#10 .description').val(localStorage.getItem('10'))
  $('#11 .description').val(localStorage.getItem('11'))
  $('#12 .description').val(localStorage.getItem('12'))
  $('#13 .description').val(localStorage.getItem('13'))
  $('#14 .description').val(localStorage.getItem('14'))
  $('#15 .description').val(localStorage.getItem('15'))
  $('#16 .description').val(localStorage.getItem('16'))
  $('#17 .description').val(localStorage.getItem('17'))

//Set a for each loop for each time block so that it can know if each time block is in the past/present/future 
  $(".time-block").each(function(){
    var timeBlock = $(this).attr("id")
    if (currentHour==timeBlock){
      $(this).removeClass("past")
      $(this).removeClass("future")
      $(this).addClass("present")
    }
    else if (currentHour > timeBlock){
      $(this).removeClass("present")
      $(this).removeClass("future")
      $(this).addClass('past')
    }
    else if (currentHour < timeBlock){
      $(this).removeClass("present")
      $(this).removeClass("past")
      $(this).addClass('future')
    }
  })
//This formatting the current date and displaying it on the element with the id of #currentDay 
  $('#currentDay').text(currentDate.format('dddd, MMMM D, YYYY'));

});
