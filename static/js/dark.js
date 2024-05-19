window.addEventListener('DOMContentLoaded',function(){
    document.querySelector('.mode-switch__toggle').addEventListener('click',function() {

if(document.body.classList.contains('dark-mode')) {
    document.body.classList.remove('dark-mode');
} else {
    document.body.classList.add('dark-mode');
}
});
});



document.oncontextmenu=new Function("event.returnValue=false");
document.onselectstart=new Function("event.returnValue=false");
document.onkeydown = function () {
          if (window.event && window.event.keyCode == 123) {
              event.keyCode = 0;
              event.returnValue = false;
              return false;
          }
      };
    