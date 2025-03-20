//EVENT BUBBLING

//Html içerisinde buton, div parentının içinde oluşturulduğu dom yapısında addeventlistener ayrı olmasına rağmen butona tıklandığında dive yayılır ve div'e tıklandı yazısı yazılır.Önemli olan html içerisinde butonun div'in içinde olmasıdır.Bu şekide yayılmasına event bubbling denir.
//Bu aşamalar tarayıcıda kendiliğinden gerçekleşir.Şuan bizim addEventListener ile eklediğimiz event listenerleri kullanarak bu olayı gözönüne getirip console yazdırıyoruz.

document.getElementById("buton").addEventListener("click", () => {
  console.log("Butona tıklandı");
});

document.getElementById("kutu").addEventListener("click", () => {
  console.log("Div'e tıklandı");
});

//stopPropagation ile event bubbling engellenebilir.Bu durumda butona tıklandığında sadece butona tıklandı yazısı yazılır.

document.getElementById("buton").addEventListener("click", (e) => {
  e.stopPropagation();  // yayılmayı durdurur,Olayın kutuya yayılmasını engeller,dive yayılmadı
  console.log("Butona tıklandı (ve yayılma durdu)");
});

//Eğer dive tıklanırsa sadece dive tıklandı yazısı yazılır.

//target: Gerçek tıklanan eleman
//currentTarget: Event listener'ın bağlı olduğu eleman
//Divin içinde herhangi bir yere tıklandığında event listener çalışır ve div'e tıklandı yazısı yazılır.
//Div içindeki butona tıklarsan,varsa önce butonun olduğu event listener çalışır yoksa buton, divin içinde olduğu için divin içindeki event listener çalışır ve dive tıklandı yazar sonra e.target özelliğinden dolayı "target: <button id="buton">Tıkla</button>" sonra da currentTarget özelliğinden dolayı "currentTarget: <div id="kutu">...</div>" yazılır.
document.getElementById("kutu").addEventListener("click", (e) => {
  console.log("Div'e tıklandı");
  console.log("target:", e.target);            // Gerçek tıklanan eleman
  console.log("currentTarget:", e.currentTarget);  // Event listener'ın bağlı olduğu eleman
});

//Div'in boş bir yerine tıklarsan:

//Bu durumda sadece div'e tıklanmış olur, ve div’in event listener’ı çalışır.target ve currentTarget ikisi de div olacaktır.Dolayısıyla dive tıklandı yazısı çıkıcak, sonra target da div içinde çalıştığı için o da çalıştı. currentTarget da çalışıcak

//target: <div id="kutu">...</div>
//currentTarget: <div id="kutu">...</div>

//EVENT CAPTURING

//Event capturing, event bubbling'in tersidir. Yani event listener'ın bağlı olduğu elemanın tıklanmasıyla başlar ve event listener'ın bağlı olduğu elemanın tıklanmasıyla biter.
document.getElementById("kutu").addEventListener("click", () => {
  console.log("Div'e tıklandı (Capture)");
}, true); // Buradaki 'true' capturing'i işaret eder

document.getElementById("buton").addEventListener("click", () => {
  console.log("Butona tıklandı");
});

//Butona basınca orada true olduğu için event capturing ilk olarak div'in event listener'ını çalıştırır, çünkü true verdiğimiz için olay dışarıdan içeriye doğru yayılacaktır (capture phase).Sonra butonun event listener'ı çalışır
//Dolayısıyla çıktı Div'e tıklandı (Capture),Butona tıklandı şeklinde olur.

//Eğer div içinde herhangi bir yere tıklanırsa: sadece dive tıklanmış olur div event listenerı çalışır ve dive tıklandı yazısı çıkar. içe doğru gitmez.

//Alttakilerde arrow function olmayan halleri
document.getElementById("kutu").addEventListener("click", function() {
  console.log("Div'e tıklandı (Capture)");
}, true); // Buradaki 'true' capturing'i işaret eder

document.getElementById("buton").addEventListener("click", function() {
  console.log("Butona tıklandı");
});

