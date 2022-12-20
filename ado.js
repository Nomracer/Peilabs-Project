const inputTheme = document.getElementById("inputTheme")
const buttonTheme = document.getElementById("buttonTheme")
const navTheme = document.getElementById("navTheme")
const footerTheme = document.getElementById("footerTheme")



//Slider//
const slider = document.querySelector('.SideSc');
let isDown = false;
let startX;
let scrollLeft;

slider.addEventListener('mousedown', (e) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if(!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 2;
  slider.scrollLeft = scrollLeft - walk;
  console.log(walk);
});


//Kullanıcı girdisinin sadece ilk kelimesinin alınması.
// Kullanıcı aynı adı büyük küçük harf farklılıklarıyla girse dahi aynı temanın oluşması.
//Girdi alanı boş iken butona basılırsa "alert" ile uyarı verilmesi.

buttonTheme.addEventListener("click", ()=>{
  let data = inputTheme.value
  let result = data.toLowerCase();
  let final = result.split(" ")[0];
  let msg

  for (var i = 0; i < final.length; i++) {
    var s = final.charCodeAt(i).toString(16);
    while (s.length < 2) {
      s = '0' + s;
    }
    msg += s;
  }

  if (msg == "" || msg == null){
    alert("Enter a string");
  }
  else if (msg.length == 1){
    
    msg = "00000" + msg

  }
  else if (msg.length == 2){

    msg = "0000" + msg

  }
  else if(msg.length == 4){

    msg = "00" + msg

  }
  else if (msg.length>6){

    msg = msg.slice(msg.length - 6, msg.length)

  }

  buttonTheme.style.backgroundColor = "#" + msg
  navTheme.style.background = "#" + msg
  footerTheme.style.background = "#" +msg
} )
