const log = console.log;
/* 
$("#bt-ok").click(function(){
  for(var i=1; i<=100; i++) {
      $("#box-wrap").append('<div> '+i+'</div>');
   }
}); 

$("#bt-init").click(function(){
  //$("#box-wrap").html(' ');
  $("#box-wrap").empty();
})

*/

var btok = document.getElementById("bt-ok");
var btInit = document.getElementById("bt-init");
var boxWrap = document.getElementById("box-wrap");
btok.addEventListener("click", function () {
  for(var i=1; i<=100; i++){
    boxWrap.innerHTML += '<div>'+i+'</div>';
  }
});

btInit.addEventListener("click", function () {
  boxWrap.innerHTML = ' ';
});