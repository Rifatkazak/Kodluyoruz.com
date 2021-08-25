
function askName() {
    var name = prompt("Adınız nedir?");
    document.getElementById("myName").innerText = name;
 }
 const stopTime = document.querySelector('#stop');
const resumeTime = document.querySelector('#start');

 let interval;
 resumeTime.disabled=true;
 
 function showTime() {
   var date = new Date();
   var h = date.getHours();
   var m = date.getMinutes();
   var s = date.getSeconds();
   var session = date.getDay();
 
   if (session == 1) {
     session = "Pazartesi";
   } else if (session == 2) {
     session = "Salı";
   } else if (session == 3) {
     session = "Çarşamba";
   } else if (session == 4) {
     session = "Perşembe";
   } else if (session == 5) {
     session = "Cuma";
   } else if (session == 6) {
     session = "Cumartesi";
   } else if (session == 7) {
     session = "Pazar";
   }
 
   h = h < 10 ? "0" + h : h;
   m = m < 10 ? "0" + m : m;
   s = s < 10 ? "0" + s : s;
 
   var time = h + ":" + m + ":" + s + " " + session;
   document.getElementById("myClock").innerText = time;
   document.getElementById("myClock").textContent = time;
 
//    setTimeout(showTime, 1000);



 }
 askName();
//  showTime();

interval = setInterval(showTime,1000); // saniyede bir showTime'ı yenile.

stopTime.addEventListener("click",function(){ // stop düğmesine basınca zamanı durdur. Interval'i temizler.
    clearInterval(interval)
    // hangi düğme basılı ise onu disabled, diğerini aktif yap
    stopTime.disabled =true; 
    resumeTime.disabled=false;
})

resumeTime.addEventListener("click",function(){
    interval = setInterval(showTime,1000); // 1sn ile showTime'ı yeniden başlat. interval değişkinenine yeniden ata.
    // hangi düğme basılı ise onu disabled, diğerini aktif yap
    resumeTime.disabled=true;
    stopTime.disabled=false;
});




 