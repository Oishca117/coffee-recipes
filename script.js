// Below is my object I cretaed to store drink data, and use to create drink cards later.

const espressoBasedDrinks = [{
  name: "Espresso",
  description: "A concentrated coffee beverage",
  ingredients: ["Finely ground coffee beans", "Hot water"],
  specs: "18g coffee | ~ 2oz",
  layers: [
    { name: "espresso", color: "#3F1B01", height: 30 },
    { name: "crema", color: "#BE5103", height: 10 }
  ]
},//end espresso
{
  name: "Americano",
  description: "Espresso diluted in water",
  ingredients: ["Espresso", "water"],
  specs: "2oz espresso | ~ 6-10oz water",
  layers: [
    { name: "espresso", color: "#3F1B01", height: 30 },
    { name: "crema", color: "#BE5103", height: 10 },
    { name: "water", color: "#ADD8E6", height: 60 }
  ]
},//end americano
{
  name: "Latte",
  description: "Espresso with steamed milk",
  ingredients: ["Espresso", "milk  (personal preference)"],
  specs: "2oz espresso | ~10oz steamed milk | thin foam layer",
  layers: [
    { name: "espresso", color: "#3F1B01", height: 30 },
    { name: "crema", color: "#BE5103", height: 10 },
    { name: "milk", color: "#bb8e5d", height: 50 },
    { name: "foam", color: " #EFE0D1", height: 10 }
  ]
},//end latte
{
  name: "Cappuccino",
  description: "Espresso with steamed milk and foam",
  ingredients: ["Espresso", "milk (personal preference)"],
  specs: "2oz espresso | ~4oz steamed milk |  ~2oz thick foam",
  layers: [
    { name: "espresso", color: "#3F1B01", height: 30 },
    { name: "crema", color: "#BE5103", height: 10 },
    { name: "milk", color: "#bb8e5d", height: 40 },
    { name: "foam", color: " #EFE0D1", height: 20 }
  ]
}//end cap
];//end obj array

//Create a DOM Reference to my Menu container

const menu = document.querySelector(".menu");

//create for of loop to iterate through our object and create drink cards

function createDrinkCards(drinks) {
  for (let drink of drinks) {

    const newDrinkArticle = document.createElement("article");
    newDrinkArticle.className = "drink-card";

    const glass = document.createElement("div");
    glass.className = "glass";

    const layers = document.createElement("div");
    layers.className = "layers";


    for (let layer of drink.layers) {
      const layerDiv = document.createElement("div");
      const layerLabel = document.createElement("span");
      layerLabel.className = "layer-label";
      layerDiv.className = layer.name;
      layerLabel.textContent = layer.name;
      layerDiv.style.backgroundColor = layer.color;
      layerDiv.style.height = layer.height + "%";
      layerDiv.appendChild(layerLabel);
      layers.append(layerDiv);
    }
    glass.appendChild(layers);
    newDrinkArticle.append(glass);
    menu.append(newDrinkArticle);

    //Creates the dividing line in the drink card to separate the visual from the text content
    const divider = document.createElement("div");
    divider.className = "divider";

    newDrinkArticle.append(divider);

    //creates container for all text going into my drink card
    const cardText = document.createElement("div");
    cardText.className = "card-text";

    const drinkName = document.createElement("h2");
    drinkName.className = "drink-name";

    drinkName.textContent = drink.name;

    const description = document.createElement("p");

    description.className = "description";
    description.textContent = drink.description;

    const ingredients = document.createElement("p")

    ingredients.className = ("ingredients");

    ingredients.textContent = drink.ingredients.join(", ");

    const specs = document.createElement("p")

    specs.className = ("specs");

    specs.textContent = drink.specs;

    cardText.append(drinkName);
    cardText.append(description);
    cardText.append(ingredients);
    cardText.append(specs);
    newDrinkArticle.append(cardText);
  }//end for of loop 


}//end function 

createDrinkCards(espressoBasedDrinks);