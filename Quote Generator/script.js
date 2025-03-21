//variables
let btn=document.querySelector("#new-quote");
let quote=document.querySelector(".quote");
let person=document.querySelector(".person");
const quotes=[ {
  quote: "The only limit to our realization of tomorrow is our doubts of today.",
  person: "Franklin D. Roosevelt"
},
{
  quote: "Success is not final, failure is not fatal: It is the courage to continue that counts.",
  person: "Winston Churchill"
},
{
  quote: "Be yourself; everyone else is already taken.",
  person: "Oscar Wilde"
},
{
  quote: "In the middle of every difficulty lies opportunity.",
  person: "Albert Einstein"
},
{
  quote: "Do not go where the path may lead, go instead where there is no path and leave a trail.",
  person: "Ralph Waldo Emerson"
},
{
  quote: "Happiness is not something ready made. It comes from your own actions.",
  person: "Dalai Lama"
},
{
  quote: "Life is really simple, but we insist on making it complicated.",
  person: "Confucius"
},
{
  quote: "Don’t watch the clock; do what it does. Keep going.",
  person: "Sam Levenson"
},
{
  quote: "You miss 100% of the shots you don't take.",
  person: "Wayne Gretzky"
},
{
  quote: "Believe you can and you're halfway there.",
  person: "Theodore Roosevelt"
}];

//"btn" id'sine sahip butona tıklandığında çalışacak olan kod bloğu.
btn.addEventListener("click",function(){
  let random=Math.floor(Math.random()*quotes.length);
  //math random ile 0 ile 1 arasında rastgele sayı ürettik onu quotes un length ile çarptık çünkü başka bir zaman 10 değil 15 quotes olur o zaman fonks çalışmaz. floor ile tam sayı yaptık. 
  quote.innerText=quotes[random].quote;//quote un inner textini şöyle değiştir diyoruz random olarak sayı üret ve oradaki quote anahtarının içindekini yaz. 
  person.innerText=quotes[random].person;
})
