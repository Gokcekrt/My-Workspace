//Önce variable ları tanımlıyoruz

let openBtn=document.getElementById("open-btn");
let modalContainer=document.getElementById("modal-container");
let closeBtn=document.getElementById("close-btn");

//şimdi eventlistener
openBtn.addEventListener("click",function(){
modalContainer.style.display="block";
}
)

closeBtn.addEventListener("click",function(){
  modalContainer.style.display="none";
})

window.addEventListener("click",function(e){//window olduğu için sayfanın neresine tıklarsa tıklasın çalışacaktır.
  if(e.target===modalContainer){ //e.target demek kullanıcının tam olarak tıkladığı yer demek.Burada modalContainerda büyük arka plana deniyor. Eğer modalın dışına tıklanırsa bu arka plan denmiş oluyor yani modalcontainer-kapanacak, ama modalın içine tıklanırsa yani p veya close btn o zaman kapanmıcak ama zaten close btn için ayrı event listener vardı.
     modalContainer.style.display="none";
  }
})