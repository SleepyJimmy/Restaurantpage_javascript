function createElement(tag, className = "", innerHTML = "") {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}


function createContactItem(ContactName, descrip, number, email) {
    const elementContainer = createElement("div", "contact-container", "");
    const element = document.createElement("div");
    element.className = "contact";
    const contact = createElement("h2", "", ContactName);
    const des = createElement("p", "", descrip);
    const num = createElement("p", "", number);
    const em = createElement("p", "", email);
    element.appendChild(contact);
    element.appendChild(des);
    element.appendChild(num);
    element.appendChild(em);
    elementContainer.appendChild(element);
    return elementContainer
}


export function loadTab3() {
    // clear current content in the div
    const content = document.getElementById("content");
    content.innerHTML = "";

    // Create and add title container
    const titleContainer = createElement("div", "title-container");
    const title = createElement("div", "title", "Contact Us");
    titleContainer.appendChild(title);

    // Create and add contacts
    const Contact1 = createContactItem("Mama Bear", "Chef", "555-555-5554", "totallyRealEmail@notFake.com");
    const Contact2 = createContactItem("Papa Bear", "Manager", "555-555-5555", "perfectlyRealEmail@notFake.com");
    const Contact3 = createContactItem("Baby Bear", "Waiter", "555-555-555", "totallyRealEmail@notFake.com");

    content.appendChild(titleContainer);
    content.appendChild(Contact1);
    content.appendChild(Contact2);
    content.appendChild(Contact3);
}