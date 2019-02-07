

//var : ES5
// let : ES6

const log = console.log;

var Man = {
    weight : 75,
    height: 175,
    name : "조현상",
    gender : "M",
    run : function () {
      log("뛴다");
    },
    eat : function () {
      log("먹는다");
    }
};

Man.name = "홍길순";
log(Man.name);
Man.run();
Man.eat();

//생성자란 Human이 실행 될때 최초 실행 되는 것.
// new 될 때 실행되는 함수가 human 이다.
var Human = (function(){
  function Human(_name){
    this.name = _name;

  }
  Human.prototype.eat = function (food) {
    log(this.name + "이(가)" + food + "을(를) 먹습니다.");
  }
  return Human;
}());

var hong = new Human("홍길동");
log(hong);
log(hong.name)
hong.eat("양꼬치");

var kilsun = new Human("홍길순");
log(kilsun);
log(kilsun.name);
kilsun.eat("회");

/* $("#box1").click(function(){ 
  $(this).animate({"width":"100%", "height":"100%"}, 2000, function(){
  });
}); */


$("#box1").click(function(){ 
  $(this).animate({"width":"100%"}, 1000, function(){
    $(this).animate({"height":"100%"}, 1000);
  });
});

/* 
var n = 0;
var interval = setInterval(function(){
  log(n++);
}, 500)
 */
$("#music > li").each(function(){
  var li = $(this);
  var interval = setInterval(function(){
    var per = Math.floor(Math.random()*70) + 30;
    li.css({"height":per+"%"});
  }, 100);

});