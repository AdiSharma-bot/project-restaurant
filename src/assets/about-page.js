import { manageContentDiv } from "../index.js";
import createHomePage from "../home-page.js";
import cancelSaber from "../project-images/cancel-saber.png";
import chefVaderImage from "../project-images/chef-vader.png";

export default function createAboutPage() {
  const aboutSection = document.createElement("section");
  aboutSection.classList.add("about-page");
  manageContentDiv(aboutSection);
  const aboutHeading = document.createElement("h3");
  aboutHeading.textContent = "About";

  const cancelBtn = createCancelBtn();

  const aboutImageContainer = document.createElement("div");
  aboutImageContainer.classList.add("about-image-container");

  const aboutImage = document.createElement("img");
  aboutImage.src = chefVaderImage;
  aboutImage.alt = "Image of vader with floating utensils";


  const aboutDescription = document.createElement("p");
  aboutDescription.classList.add("vader-info");
  const aboutDescriptionContent = `You seek knowledge of the being behind the batter, the force behind
          the fork? A bold, if predictable, line of inquiry. Very well. 'Vader
          Delights' was not born from a whimsical desire to please the masses;
          it was forged in the fires of necessity and a profound, galaxy-wide
          lack of decent brunch spots. The precision required to command a
          fleet, to construct a Death Star, to maintain an Empire... it is the
          very same precision I now apply to the art of a perfectly flipped
          pancake. Every ingredient is interrogated. Every recipe is subjected
          to rigorous trials, its weaknesses identified and ruthlessly
          eliminated. There is no room for error, for a scone that is 'a little
          dry' is as great a failure as allowing a critical weakness in an
          exhaust port. The service is efficient because the alternative is...
          undesirable. The decor is minimalist because your focus should be on
          the plate, not on frivolous distractions. <br />And what of the chef?
          Before the armor, before the title, there was a... simpler time. A
          time of sand (it's coarse, and rough, and gets everywhere...
          including, I suspect, in some rival establishments' pastries),
          youthful ambition, and a rather unfortunate haircut. Let us just say
          there was a period of 'aggressive culinary experimentation' involving
          questionable pod-racing snacks and a certain flair for the dramatic.
          That youthful... 'passion'... has since been tempered, refined, and
          channeled into a far more structured and formidable pursuit: ensuring
          that your chocolate lava cake is molten at its core. As it should be.
          Now, you have your answers. <br />Cease your inquiries and consult the
          menu. The Dark Side of deliciousness awaits, and it does not
          appreciate being kept waiting.`
  aboutDescription.innerHTML = aboutDescriptionContent 

  // Append Elements
  aboutImageContainer.appendChild(aboutImage);
  aboutSection.appendChild(aboutHeading);
  aboutSection.appendChild(cancelBtn);
  aboutSection.appendChild(aboutImageContainer);
  aboutSection.appendChild(aboutDescription);
}
function createCancelBtn() {
  const headerElement = document.querySelector("header");
  const cancelBtnContainerDiv = document.createElement("div");
  cancelBtnContainerDiv.classList.add("cancel-btn-container");

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.classList.add("about-btn-cancel")
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
