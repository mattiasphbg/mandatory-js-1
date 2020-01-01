const h1 = document.querySelector("#headertext");
h1.textContent = "Fruits & Vegetables Corp";
h1.style.color = "red";
h1.style.fontSize = "xx-large";


const li = document.querySelector("ul");
const main = document.querySelector("#main");
const contactInfo = document.querySelector("#contact");
const aboutText = document.querySelector("#about");
const tHead = document.querySelector("table");
const tdClass = document.getElementsByTagName("td"); // For-loop
const headCssEl = document.head;

function changeTd()  {
for(let i = 0; i < tdClass.length; i++)  {
    let tdEl = document.createElement("th");
    let tdParent = tdClass[i].parentNode;
    tdParent.replaceChild(tdEl, tdClass[i]);
  }
}


const aboutTitle = document.createElement("h2");
const h2Contact =  document.createElement("h2");
const aboutContant = document.createElement("p");
const thEl = document.createElement("th");
const fileCss = document.createElement("link");

fileCss.rel = "styleSheet";
fileCss.type = "text/css";
fileCss.href = "main.css";



li.childNodes[5].childNodes[0].text = "Vegetables";
li.childNodes[5].childNodes[0].href="#Vegetables";
aboutContant.textContent = "We're the best in fruits & vegetables";
aboutTitle.textContent = "About";
h2Contact.textContent = "Contact";
let indexTitle = document.title = "Fruits & Vegetables Corp";

headCssEl.insertAdjacentElement("beforeend", fileCss);
main.insertAdjacentElement("beforebegin", aboutTitle);
main.insertAdjacentElement("beforebegin", aboutContant);
main.removeChild(aboutText);




contactInfo.insertAdjacentElement("beforebegin", h2Contact);
