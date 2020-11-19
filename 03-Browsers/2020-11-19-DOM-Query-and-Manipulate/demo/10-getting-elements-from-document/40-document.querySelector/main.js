
setTimeout(byTagName, 1000);

setTimeout(byClass, 2000);
setTimeout(byId, 3000);

setTimeout(byAttributeValue, 4000);

setTimeout(allByAttributeValue, 6000);
/* */

function byTagName() {
    let element = document.querySelector('p');
    element.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eos reprehenderit sint beatae placeat commodi ut, vitae itaque sed fuga est architecto iusto accusamus mollitia, necessitatibus corporis quibusdam libero dolorem ipsam! Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus architecto optio saepe ipsa ducimus? Animi, voluptatibus! Eligendi velit expedita, blanditiis hic, perferendis consequuntur dicta molestiae molestias debitis dolorem provident id.";
}

function byClass() {
    document.querySelector(".last").style.color = "grey";
}

function byId() {
    document.querySelector("#id_2").style.fontWeight = "bold";
}

function byAttributeValue() {
    let el = document.querySelector("[href^=mailto]");
    el.style.color = "darkred";
    el.style.fontStyle = "italic";
}

function allByAttributeValue() {
    let elements = document.querySelectorAll("[href^=mailto]");

    elements.forEach((el, i) => {
        el.style.color = "darkred";
        el.style.fontStyle = "italic";
        el.style.fontWeight = "bold";
        el.style.fontSize = "smaller";
    });
}
