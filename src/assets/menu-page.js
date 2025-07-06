import { manageContentDiv } from "../index.js";
import createHomePage from "../home-page.js";
import cancelSaber from "../project-images/cancel-saber.png";
import soupImage from "../project-images/Dishes/red-soup.jpg";
import moltenLavaCakePic from "../project-images/Dishes/mustafar-lava-cake.jpg";
import wookieCookiePic from "../project-images/Dishes/cookies.jpg";
import cupcakeImage from "../project-images/Dishes/cupcakes.jpg";
import burgerImage from "../project-images/Dishes/burger-pic.jpg";
import souffleImage from "../project-images/Dishes/lemon-souffle.jpg";
import steakImage from "../project-images/Dishes/steak.jpg";

export default function createMenuPage() {
  const menuSection = document.createElement("section");
  menuSection.classList.add("menu-page");

  manageContentDiv(menuSection);
  const menuHeading = document.createElement("h3");
  menuHeading.classList.add("menu-heading");
  menuHeading.textContent = "Menu";

  const cancelBtn = createCancelBtn();
  const recipeContainer = createRecipes();

  menuSection.appendChild(menuHeading);
  menuSection.appendChild(cancelBtn);
  menuSection.appendChild(recipeContainer);
}

function createCancelBtn() {
  const headerElement = document.querySelector("header");
  const cancelBtnContainerDiv = document.createElement("div");
  cancelBtnContainerDiv.classList.add("cancel-btn-container");

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.classList.add("menu-btn-cancel");
  cancelBtn.type = "button";

  const cancelImage = document.createElement("img");
  cancelImage.src = cancelSaber;
  cancelImage.alt = "Cancel Button";

  cancelBtnContainerDiv.appendChild(cancelBtn);
  cancelBtn.appendChild(cancelImage);
  cancelBtn.addEventListener("click", () => {
    headerElement.classList.remove("hide");
    createHomePage();
  });
  return cancelBtnContainerDiv;
}

function createRecipes() {
  const recipeContainer = document.createElement("div");
  recipeContainer.classList.add("recipes-container");

  const allRecipes = [
    {
      imageSrc: soupImage,
      imageAlt: "Soup Image",
      imageName: null,
      imageDesc: null,
    },
    {
      imageSrc: moltenLavaCakePic,
      imageAlt: "Mustafar molten lava cake",
      imageName: "Mustafar molten lava cake",
      imageDesc: `Do not approach this dessert with the same casual arrogance you
              might afford a common brownie. This is a monument to controlled
              chaos. Forged in the intense heat of our ovens, this decadent dark
              chocolate cake stands with an imposing, yet deceptively stable,
              exterior. Its surface holds the promise of order. But a single,
              decisive strike from your utensil will breach its defenses,
              unleashing a molten core of pure, liquid chocolate that flows with
              the untamed, fiery intensity of the Mustafar system itself—a place
              of... significant personal transformation. It is served with a
              lone scoop of cold, pristine vanilla bean ice cream. This is not
              for balance; it is a tactical countermeasure. A momentary reprieve
              before you are consumed entirely by the Dark Side of flavor.
              Consider it your final test. Succeed, and know true delight.
              Fail... and you will have a most impressive mess to contend with.`,
    },
    {
      imageSrc: null,
      imageAlt: null,
      imageName: "Sith Trooper Soup",
      imageDesc: `A striking, deep red tomato and roasted bell pepper bisque, as
              uncompromisingly bold as the Final Order itself. Served with a
              toasted obsidian rye crouton.`,
    },
    {
      imageSrc: wookieCookiePic,
      imageAlt: "Wookie Cookies Image",
      imageName: "Wookie Cookies",
      imageDesc: `Do not be deceived by their deceptively charming appearance. These are the tenacious inhabitants of the forest moon of Endor, rendered in a form far more palatable than their real-life counterparts.  They may appear small and unassuming, but their flavor is surprisingly rebellious. Consume them before they begin worshipping your beverage as a deity. It becomes tedious.`,
    },
    {
      imageSrc: cupcakeImage,
      imageAlt: "Storm-Trooper Cupcakes Image",
      imageName: null,
      imageAlt: null,
    },
    {
      imageSrc: burgerImage,
      imageAlt: "Imperial march burger image",
      imageName: null,
      imageDesc: null,
    },
    {
      imageSrc: souffleImage,
      imageAlt: "Cloud City Soufflé",
      imageName: null,
      imageDesc: null,
    },
    {
      imageSrc: null,
      imageAlt: null,
      imageName: "Imperial March Burger",
      imageDesc:
        "A formidable patty of premium ground chuck on a light brown brioche bun, with sharp cheddar, smoked bacon, and a secret, tangy 'Sith' sauce. Remember, resistance is futile.",
    },
    {
      imageSrc: steakImage,
      imageAlt: "Executor Class Steak Image",
      imageName: "Executor Class Steak",
      imageDesc: `You require sustenance befitting a command position? Very well. Behold the Executor-class Ribeye. This is not a mere cut of meat; it is a statement of culinary dominance, a flagship offering that dwarfs lesser entrees with its sheer presence on the plate.  Prepare to engage.`,
    },
  ];

  allRecipes.forEach((recipe, index) => {
    const recipeElement = document.createElement("div");
    recipeElement.classList.add("recipees", `recipe-${index + 1}`);

    if (recipe.imageSrc) {
      const imageElement = document.createElement("img");
      imageElement.src = recipe.imageSrc;
      imageElement.alt = recipe.imageAlt;

      recipeElement.appendChild(imageElement);
    }

    if (recipe.imageName) {
      const recipeName = document.createElement("p");
      recipeName.classList.add("dish-name");
      recipeName.textContent = recipe.imageName;

      recipeElement.appendChild(recipeName);
    }

    if (recipe.imageDesc) {
      const recipeDescription = document.createElement("p");
      recipeDescription.classList.add("dish-desc");
      recipeDescription.textContent = recipe.imageDesc;

      recipeElement.appendChild(recipeDescription);
    }

    recipeContainer.appendChild(recipeElement)
  })

  return recipeContainer;
}
