var arr = $(".sername");
var ser = $(".servabout");
//добавил онклики
for (i=0; i < arr.length; i++){
  var k = arr[i]
  $(k).attr('onClick', 'showstep(' + i + ')');
}

function showstep(i){
    $(".servabout").css('display', 'none');
    $(".servabout").css('opacity', '0');
    for (m=0; m < arr.length; m++){
        arr[m].classList.remove("active");
        
      }

  var a = $(".servabout")[i];
  $(a).css('display', 'block');
  $(a).animate({opacity: '1'}, 'slow');

  arr[i].classList.add("active");

}
showstep(0);