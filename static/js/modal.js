// Получить модель
var modal = $("myModal");

// Получите изображение и вставьте его внутрь модального - используйте его текст "alt" в качестве подписи
var img = $("myImg");
var modalImg = $("img01");

for (i=0; i < cal.length; i++){
    var b = img[i];
    b.onclick = function click(){
        //modal[i].style.display = "block";
        alert("1");
      }
}


// Получить элемент <span>, который закрывает модальный
var span = document.getElementsByClassName("close")[0];

// Когда пользователь нажимает на <span> (x), закройте модальное окно
span.onclick = function() {
  modal.style.display = "none";
}


//переход на jquery
