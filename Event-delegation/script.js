//Event delegation

//Event delegation, bir üst elemanın alt elemanlarına event listener'ı eklemek için kullanılır.Yani ul içinde li'lere ayrı ayrı tıklayınca event listener'ı çalıştırmak yerine ul'e tek tıklamayla event listener'ı çalıştırır.

document.getElementById("todo-list").addEventListener("click", function(e) {
  if (e.target.tagName === "LI") {
    e.target.style.textDecoration = "line-through";
  }
});

//yani yukardaki örnekte ul in id si todo-list olduğu için bu event listener çalışır Yani diyor ki hangi li'ye target ile onu bulur ve onun textDecoration'ını line-through yapar.

//Bu yöntem daha performanslıdır çünkü sadece bir event listener kullanır ve bu event listener'ın çalışması için birden fazla event listener eklemek yerine sadece bir tane ekleriz.

document.querySelector("#sports").addEventListener("click", function(e){
  console.log(e.target.getAttribbute("id")+"is clicked");
  const target=e.target;
  if(target.matches("li")){
    target.style.backgroundColor="lightgray";
  }

  }
)

//yukardaki örnekte ul in id si sports olduğu için önce bunu getattribute ile id sini alıyoruz çünkü id si içinde yazanla aynı yaptık.sonra da target neyi seçtiğimizi gösteriyor ya o seçtiğimiz şeyle li uyuşuyorsa rengini değiştir dedik.

//Örneğin sportslara bir tane daha madde eklemek istiyoruz dinamik olarak.

document.querySelector("#sports").addEventListener("click",function(e){
  const sports=document.querySelector("#sports");
  const newElement=document.createElement("li");
  newElement.setAttribute("id","rugby");
  newElement.innerText="Rug by";
  sports.appendChild(newElement);
})

//yukardaki örnekte sports id'li ul'in içine bir tane daha li eklemek istiyoruz.Önce ul'i seçiyoruz sonra li'yi oluşturuyoruz ve id'sini veriyoruz ve içine text veriyoruz sonra da ul'i append ile doma ekliyoruz.



