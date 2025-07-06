import { manageContentDiv } from "../index.js";
import cancelSaber from "../project-images/cancel-saber.png";
import createHomePage from "../home-page.js";

function createNameField() {
  const nameLabel = document.createElement("label");
  nameLabel.setAttribute("for", "name");

  const nameSpan = document.createElement("span");
  nameSpan.classList.add("form-name");
  nameSpan.textContent = "Name";

  const nameInput = document.createElement("input");
  nameInput.type = "text";
  nameInput.id = "name";
  nameInput.name = "form-name";
  nameInput.required = true;

  nameLabel.appendChild(nameSpan);
  nameLabel.appendChild(nameInput);

  return nameLabel;
}

function createMailField() {
  const mailLabel = document.createElement("label");
  mailLabel.setAttribute("for", "email");

  const mailSpan = document.createElement("span");
  mailSpan.classList.add("form-email");
  mailSpan.textContent = "email";

  const mailInput = document.createElement("input");
  mailInput.type = "email";
  mailInput.id = "email";
  mailInput.name = "form-mail";
  mailInput.required = true;

  mailLabel.appendChild(mailSpan);
  mailSpan.appendChild(mailInput);

  return mailLabel;
}

function createMessageField() {
  const messageLabel = document.createElement("label");
  messageLabel.setAttribute("for", "message");

  const messageSpan = document.createElement("span");
  messageSpan.classList.add("form-message");
  messageSpan.textContent = "Message";

  const messageTextArea = document.createElement("textarea");
  messageTextArea.name = "message";
  messageTextArea.id = "message";
  messageTextArea.rows = 8;
  messageTextArea.cols = 30;

  messageLabel.appendChild(messageSpan);
  messageLabel.appendChild(messageTextArea);

  return messageLabel;
}

function createCancelBtn() {
  const headerElement = document.querySelector("header")
  const cancelBtnContainerDiv = document.createElement("div");
  cancelBtnContainerDiv.classList.add("cancel-btn-container");

  const cancelBtn = document.createElement("button");
  cancelBtn.classList.add("cancel-btn");
  cancelBtn.type = "button";

  const cancelImage = document.createElement("img");
  cancelImage.src = cancelSaber;
  cancelImage.alt = "Cancel Button";
  
  cancelBtnContainerDiv.appendChild(cancelBtn);
  cancelBtn.appendChild(cancelImage);
  cancelBtn.addEventListener("click", () => {
    headerElement.classList.remove("hide");
    createHomePage()
  })
  return cancelBtnContainerDiv;
}

function createFormButtons() {
  const formBtnsContainerDiv = document.createElement("div");
  formBtnsContainerDiv.classList.add("form-buttons");

  const submitBtn = document.createElement("button");
  submitBtn.type = "submit";
  submitBtn.textContent = "Send Message";

  const resetBtn = document.createElement("button");
  resetBtn.type = "reset";
  resetBtn.textContent = "Reset";

  formBtnsContainerDiv.appendChild(submitBtn);
  formBtnsContainerDiv.appendChild(resetBtn);

  return formBtnsContainerDiv;
}
function createNameMailField() {
  const nameMailContainerDiv = document.createElement("div");
  nameMailContainerDiv.classList.add("name-mail-section");
  
  const nameField = createNameField();
  const mailField = createMailField();

  nameMailContainerDiv.appendChild(nameField);
  nameMailContainerDiv.appendChild(mailField);

  return nameMailContainerDiv;
}

export default function createContactPage() {
  // Elements Creation
  const contactPageSection = document.createElement("section");
  contactPageSection.classList.add("contact-page");
  manageContentDiv(contactPageSection);
  const formElement = document.createElement("form");

  const fieldsetElement = document.createElement("fieldset");
  fieldsetElement.classList.add("contact-overlay");

  const legendElement = document.createElement("legend");
  legendElement.textContent = "Contact"

  const nameMailContainerDiv = createNameMailField();
  const messageField = createMessageField();
  const cancelBtn = createCancelBtn();
  const formBtns = createFormButtons();

  const fieldSetChildren = [legendElement, cancelBtn,nameMailContainerDiv, messageField, formBtns ]

  contactPageSection.appendChild(formElement);
  formElement.appendChild(fieldsetElement);
  
  fieldSetChildren.forEach((child) => fieldsetElement.appendChild(child));
  
  return contactPageSection;
  
}
