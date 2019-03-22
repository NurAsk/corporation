var video = document.getElementById("myVideo");

// Get the button
// Критическая ошибка: стоит дать осмысленное имя кнопке
var btn = document.getElementById("myBtn");

// Критическая ошибка: Часто в видео называют функции типа myFunction или просто Function, следует давать осмысленные имена функциям. Если проект разрастется, а это происходит не заметно, будет сложно разобраться за что отвечает эта функция 
// Pause and play the video, and change the button text
function myFunction() {
  if (video.paused) {
    video.play();
    btn.innerHTML = '<i class="fa fa-pause-circle"></i><br/>';
  } else {
    video.pause();
    btn.innerHTML = '<i class="fa fa-play-circle"></i><br/>';
  }
}