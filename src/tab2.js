function createElement(tag, className = "", innerHTML = "") {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}
    

function createMenuItem(itemName, descrip, price) {
    const elementContainer = createElement("div", "item-container", "");
    const element = document.createElement("div");
    element.className = "item";
    const item = createElement("p", "", itemName);
    const des = createElement("p", "", descrip);
    const pri = createElement("p", "", price);
    element.appendChild(item);
    element.appendChild(des);
    element.appendChild(pri);
    elementContainer.appendChild(element);
    return elementContainer
}

export function loadTab2() {
    // clear current content in the div
    const content = document.getElementById("content");
    content.innerHTML = "";
    
    // Create and add title container
    const titleContainer = createElement("div", "title-container");
    const title = createElement("div", "title", "Menu");
    titleContainer.appendChild(title);

    const beveragesSubheader = createElement("div", "subheader-container", "");
    const beverages = createElement("div", "subheader", "Beverages");
    beveragesSubheader.appendChild(beverages);
    const bev1 = createMenuItem("Honey Tea", "A warm, sweet tea made with the highest quality honey and a bit of lemon to start your day off right!", "$2");
    const bev2 = createMenuItem("Beary Tea", "A comforting, almost filling, tea that is infused with the flavors of several kinds of berries. Best served cold, but can be served hot on request.", "$3");

    const sidesSubheader = createElement("div", "subheader-container", "");
    const sides = createElement("div", "subheader", "Sides");
    sidesSubheader.appendChild(sides);
    const side1 = createMenuItem("Toast and Jam", "A slice of toast, your choice of bread, and our homemade blackberry or raspberry jam.", "$1");
    const side2 = createMenuItem("Fresh Fruit", "A small bowl of fresh fruit, whatever we find at the market for the day.", "$3");
   
   
    const mainSubheader = createElement("div", "subheader-container", "");
    const main = createElement("div", "subheader", "Main Dishes");
    mainSubheader.appendChild(main);
    const main1 = createMenuItem("Pancakes", "A stack of homemade buttermilk pancakes, served with our locally sourced maple syrup.", "$4");
    const main2 = createMenuItem("French Toast", "Two slices of the best french toast you will ever eat, served with our locally sourced maple syrup.", "$5");
    const main3 = createMenuItem("Beary Veggie Sandwich", "Do you like vegetables? Then this is the sandwich for you! Stuffed full of a variety of fresh produce, it will fill you up.", "$8");
    const main4 = createMenuItem("BLT", "Interested in the Beary Veggie Sandwich but also love bacon? Say no more.", "$6");
    const main5 = createMenuItem("Bagel and Lax", "Our house specialty, you can't go wrong with a hearty bagel topped with sustainably harvested salmon.", "$8");
    const main6 = createMenuItem("Honeycomb", "Are you a bear like us? Then you will love our honeycomb. And, yes humans, it is just a piece of honeycomb, not the popular breakfast cereal.", "$6");
    const main7 = createMenuItem("Beary Bowl", "Get a big ole bowl of our berries! Side of honey is $1 extra.", "$7");
    const main8 = createMenuItem("The Beary Best Porridge", "Made by Baby Bear himself, this porridge is guarenteed to be just right, or your money back.", "$5");
    

    content.appendChild(titleContainer);
    content.appendChild(beveragesSubheader);
    content.appendChild(bev1);
    content.appendChild(bev2);
    content.appendChild(sidesSubheader);
    content.appendChild(side1);
    content.appendChild(side2);
    
    content.appendChild(mainSubheader);
    content.appendChild(main1);
    content.appendChild(main2);
    content.appendChild(main3);
    content.appendChild(main4);
    content.appendChild(main5);
    content.appendChild(main6);
    content.appendChild(main7);
    content.appendChild(main8);
}