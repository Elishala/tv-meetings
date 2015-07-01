//returned undefined
(function JSON_CALLBACK($) {
  var url = "http://fake-co-calendar.herokuapp.com/api/v1/events?callback=JSON_CALLBACK=?"

  $.ajax({
    type: 'GET',
    url: "http://fake-co-calendar.herokuapp.com/api/v1/events?callback=JSON_CALLBACK=?",
    async: false,
    crossDomain: true,
    jsonpCallback: 'jsonCallback',
    contentType: "application/json",
    dataType: 'jsonp',
    success: function(json) {
      console.dir(json.sites);
    },
    error: function(e) {
      console.log(e.message);
    }
  });
}) (jQuery);




//json call back, using the core $.ajax() method- didn't work
//console returns JSON_CALLBACK is not defined, in ff & chrome
// $.ajax({
//   url: "http://fake-co-calendar.herokuapp.com/api/v1/events?callback=JSON_CALLBACK",
//   type: "GET",
//   dataType: "JSONP",
//   jsonp: "callback"
//   data: {
//     q: "type" : "events.all" , "events" : {"list" : [" "]};
//     q: "type" : "events.all" , "events" : "http://fake-co-calendar.herokuapp.com/api/v1/events?callback=JSON_CALLBACK",
//     format: "json"
//   },
//   success: function (json) {
//     $("<li>").text(json.title) .appendTo("body");
//     $("<div class=\"flex-items\>").html (json.html).appendTo("body");
//   },
//   error: function (xhr, status, errorThrown) {
//     alert("Sorry, there was a problem!");
//     console.log("Error: " + errorThrown);
//     console.log("Status: " + status);
//     console.dir(xhr);
//   },
//   complete: function (xhr, status) {
//     alert("The request is complete!");
//   }
// });



//json call back- didn't work
// $.ajax({
//   dataType: "JSON",
//   url: "http://fake-co-calendar.herokuapp.com/api/v1/events",
//   data: ["GET"],
//   success: function (data, status,jqXHR) {
//     $(document).ajaxSuccess(function (event, jqXHR, settings) {
//       alert("Global success callback.");
//     });
//     $(document).ajaxError(function (evt, jqXHR, settings, err) {
//       alert("Global error callback.");
//     });
//     $(document).ajaxComplete(function (event, XHR, settings) {
//       alert("Global completion callback.");
//     });
//   }
// });


//pseudocode:
//function( tell AJAX to call API and return JSONP) {
//for(each list item, look through it, keep going until there's nothing to look at) {
//put each item in an <li>
//AJAX will refresh the monitor as the day progresses, and meetings come and go
// }
// }
// var favCO = {
//   "location":" ",
//   "time": " ",
//   "meetingRm": " ",
//   "attendees": " "
// };
