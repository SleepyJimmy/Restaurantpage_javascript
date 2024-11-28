function createElement(tag, className = "", innerHTML = "") {
    const element = document.createElement(tag);
    if (className) element.className = className;
    if (innerHTML) element.innerHTML = innerHTML;
    return element;
}

export function loadTab1() {
    // clear current content in the div
    const content = document.getElementById("content");
    content.innerHTML = "";
    
    // Create and add title container
    const titleContainer = createElement("div", "title-container");
    const title = createElement("div", "title", "Beary's Breakfast Bar");
    titleContainer.appendChild(title);
    
    // create and add about container
    const aboutContainer = createElement("div", "about-container");
    const about = createElement("div", "about");
    const about1 = createElement("p", "", "Beary's has the best porridge! The atmosphere and customer service make you feel like you are sitting in the middle of the woods, eating like a bear! This is exactly the kind of place that I like to return to again and again.")
    const about2 = createElement("p", "", "Goldilocks");
    about.appendChild(about1);
    about.appendChild(about2);
    aboutContainer.appendChild(about);    

    // create and add hours container
    const hoursContainer = createElement("div", "hours-container");
    const hours = createElement("div", "hours");
    const hours1 = createElement("p", "", "Hours")
    const hoursList = createElement("ul", "hours-items");
    const hoursData = [
        { day: "Sunday", hours: "8am - 8pm" },
        { day: "Monday", hours: "6am - 6pm" },
        { day: "Tuesday", hours: "6am - 6pm" },
        { day: "Wednesday", hours: "6am - 6pm" },
        { day: "Thursday", hours: "6am - 10pm" },
        { day: "Friday", hours: "6am - 10pm" },
        { day: "Saturday", hours: "8am - 10pm" },
    ];
    hoursData.forEach(({day, hours}) => {
        const listItem = document.createElement("li");
        listItem.textContent = `${day}: ${hours}`;
        hoursList.appendChild(listItem);
    });
    hours.appendChild(hours1);
    hours.appendChild(hoursList);
    hoursContainer.appendChild(hours);

    // create and add loation container
    const locationContainer = createElement("div", "location-container");
    const location = createElement("div", "location");
    const location1 = createElement("p", "", "Location");
    const location2 = createElement("p", "", "123 Forest Drive, Forestville, Maine");
    location.appendChild(location1);
    location.appendChild(location2);
    locationContainer.appendChild(location);

    // append created containers into the main content div
    content.appendChild(titleContainer);
    content.appendChild(aboutContainer);
    content.appendChild(hoursContainer);
    content.appendChild(locationContainer);
}