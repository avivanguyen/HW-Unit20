console.log("Your index.js file is loaded correctly!");

$("button:active").click(function(){
  alert ("Your message has been sent. You'll be contact regarding the email purpose.")
});

$(".linkedin").click(function(){
  alert ("You will be directed to an external site.")
});

$('#exampleModal').on('shown.bs.modal', function () {
  $('#myInput').trigger('focus')
})