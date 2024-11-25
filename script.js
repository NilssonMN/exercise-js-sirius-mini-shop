// Code here!

/*
[1]
Byt namn på första hoodien från Ash till Potato.
*/
const newNameHoodie1 = document.querySelector(".art-1 h3");
newNameHoodie1.innerText = "Potato";

/* [2]
Byt namn på Home till Start.
*/
const newNameHome = document.querySelector("a");
newNameHome.innerText = "Start";

/* [3]
Byt namn på Contact till Mail Us.
*/
document.querySelectorAll('nav a').forEach(link => {
    if (link.textContent === 'Contact') {
      link.textContent = 'Mail Us';
    }
  });

  /*
  [4]
  Byt ut informationen om Sinus Hoodie - Fire.
  */
  const newNameInfo = document.querySelector(".art-2 p");
  newNameInfo.innerText = "This is a red sinus hoodie";

  /*
  [5]
  Byt bakgrundsfärg och text på en knapp.
  */
  const changeBtnText = document.querySelector(".art-1 button");
  changeBtnText.innerText = "Buy now";
  changeBtnText.style.backgroundColor = "green";

  /* 
  [6]
  Byt bakgrundsfärg på någon av produkterna.
  */
  const newBackground = document.querySelector(".art-1 figure");
  newBackground.style.backgroundColor = "gray";

  /*
  [7]
  Byt ut adressen på sidan.
  */
  const addressElement = document.querySelector('footer article:nth-child(2) p');

  addressElement.innerHTML = 'Lund Skateboards <br> New Lund 45 <br> 123 45, Lund';


  /* 
  [8]
  Byt färg på samtliga <p>.
  */
  const changeAllP = document.querySelectorAll("p");

changeAllP.forEach(function(p) {
p.style.color = "blue"
  });

  /* 
  [9]
  Ändra text på samtliga knappar till add to cart.
  */
 const changeAllBtn = document.querySelectorAll("button")

 changeAllBtn.forEach(function(button) {
  button.style.backgroundColor = "green"
  button.innerText = "add to cart"
 });

 /*
 [10]
 Lägg till classen active på menyalternativet home.
 */
 const footer = document.querySelector("footer"); // Hämta footer från DOM
 if (footer) {
     const menuHome = footer.querySelector("article:nth-of-type(1) a:first-of-type");
     if (menuHome) {
         menuHome.classList.add("active"); // Lägg till "active" på länken
     }
 }

 /*
 [11]
 Ta bort classen logo på logotypen.
*/

const logo = document.querySelector("img.logo");

if (logo) {
    logo.classList.remove("logo");
}


/*
[12]
Lägg till ett nytt menyalternativ.
*/
const menuArticle = document.querySelector("section article");

const newMenuItem = document.createElement("a");
newMenuItem.href = "#";
newMenuItem.textContent = "Blog";

if (menuArticle) {
  menuArticle.appendChild(newMenuItem);
}


/*
[13]
Lägg till en ny produkt med följande info.
img	hoodie-forrest.png
h2	Sinus Hoodie
h3	Forrest
p	Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.
*/
class Product {
  constructor(imageSrc, imageAlt, nameText, colorText, descriptionText, id) {
    this.article = document.createElement("article");
    this.figure = document.createElement("figure");
    this.img = document.createElement("img");
    this.name = document.createElement("h2");
    this.color = document.createElement("h3");
    this.description = document.createElement("p");
    this.button = document.createElement("button");

    this.img.setAttribute("src", imageSrc);
    this.img.setAttribute("alt", imageAlt);
    this.name.innerHTML = nameText;
    this.color.innerHTML = colorText;
    this.description.innerHTML = descriptionText;
    this.button.innerHTML = "add to cart";
    this.id = this.article.setAttribute("id", id);

    this.figure.appendChild(this.img);

    this.initialiseProduct();
  }

  initialiseProduct() {
    const elements = [this.figure, this.name, this.color, this.description, this.button];
    elements.forEach((element) => this.article.appendChild(element));
  }
}

const hoodieForrest = new Product(
  "img/hoodie-forrest.png",
  "hoodie-forrest",
  "Sinus Hoodie",
  "Forrest",
  "Lorem ipsum dolor sit amet consectetur adipisicing elit. Saepe, dolores.",
  "Forrest"
);

const products = document.querySelector("main");
products.appendChild(hoodieForrest.article);

/*
[14]
Lyssna efter ett klick på logotypen (.logo). 
När den registrerar ett klick skall du console.log:a "found you!";
*/
logo.addEventListener("click", () => {
  console.log("found you!");
});


/*
[15]
Lyssna efter klick på samtliga produkter ( <article>). När den registrerar ett klick 
skall du console.log:a "Hi, Im article Fire / Ash / Water".
*/
const articles = products.querySelectorAll("article");
articles[0].setAttribute("id", "Ash");
articles[1].setAttribute("id", "Fire");
articles[2].setAttribute("id", "Water");
articles.forEach(article => {
    article.addEventListener("click", () => {
        console.log("Hi, I´m article " + article.id);
    });
});












 



  












