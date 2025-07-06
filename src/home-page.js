import sithLogoPic from "./project-images/Sith-Icon.png";
import lightsaberPic from "./project-images/Lightsaber.png";
import { manageContentDiv } from "./index.js";


export default function createHomePage() {
  
  
  // Elements creation
  

  const homepageSection = document.createElement("section");
  homepageSection.classList.add("home-page");
  
  const imageContainerDiv1 = document.createElement("div");
  imageContainerDiv1.classList.add("sith-logo");

  const image = document.createElement("img");
  image.src = sithLogoPic;
  image.alt = "Sith Icon";
  image.classList.add("sith-icon");

  const imageContainerDiv2 = document.createElement("div");
  imageContainerDiv2.classList.add("lightsaber-one");

  const lightsaber1ImageElement = document.createElement("img");
  lightsaber1ImageElement.src = lightsaberPic;
  lightsaber1ImageElement.alt = "Lightsaber Image";
  lightsaber1ImageElement.classList.add("lightsaber");

  const headingElement = document.createElement("p");
  headingElement.classList.add("home-heading");
  headingElement.textContent = `Vader-Delights`;

  const homepageDescElement = document.createElement("p");
  homepageDescElement.classList.add("delights-content");
  homepageDescElement.textContent = `Welcome to Vader Delights! Resistance to Deliciousness is futile, so do not underestimate the power of a well-made confection. Or my patience. Enter, if you must cause I find your lack of good taste...infuriating. Fortunately, I am here to correct it and may your journey
  towards the dark side(of delicious meals) be terrific. You're welcome
  and try not to disappoint me with indecision or, Force forbid,
  complaints about the portion sizes. The portions are correct. The
  seasoning is precise.`;

  const imageContainerDiv3 = document.createElement("div");
  imageContainerDiv3.classList.add("lightsaber-two");

  const lightsaber2ImageElement = document.createElement("img");
  lightsaber2ImageElement.src = lightsaberPic;
  lightsaber2ImageElement.alt = "Lightsaber Image";
  lightsaber2ImageElement.classList.add("lightsaber");

  //Appending elements
  manageContentDiv(homepageSection)

  //Section Element child elements

  const sectionElementChildren = [
    imageContainerDiv1,
    imageContainerDiv2,
    headingElement,
    homepageDescElement,
    imageContainerDiv3,
  ];

  sectionElementChildren.forEach((child) => homepageSection.appendChild(child));

  imageContainerDiv1.appendChild(image);
  imageContainerDiv2.appendChild(lightsaber1ImageElement);
  imageContainerDiv3.appendChild(lightsaber2ImageElement);

  return homepageSection
}
