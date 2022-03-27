var cal = $(".calcname");

for (i=0; i < cal.length; i++){
    var k = cal[i]
    $(k).attr('onClick', 'calc(' + i + ')');
  }

function calc(i){
    console.log(i)

    if (!$(cal[i]).hasClass('active')){
        console.log('no')
        cal[i].classList.add("active");
    } else {
        console.log('yes')
        cal[i].classList.remove("active");
    }

    
    
}