window.onscroll = function() {myFunction()};
var navbar = document.getElementById("menulabel");

var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
var sticky = navbar.offsetTop;

var tasks = $(".linebottomtask")//линии под тасками
// Добавить класс sticky к навигационной панели, когда вы достигнете ее положения прокрутки. Удалите "sticky", когда вы покидаете положение прокрутки
function myFunction() {
  if (document.documentElement.scrollTop >= 35) {
    navbar.classList.remove("stickyt");
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
    navbar.classList.add("stickyt");
  }
  //console.log(document.documentElement.scrollTop);

  if ($(window).scrollTop() > 350) {
    for (i=0; i < tasks.length; i++){
        tasks[i].classList.add("linebottomtaskafter");
      }
}
}



