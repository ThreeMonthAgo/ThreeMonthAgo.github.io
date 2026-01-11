// Used for index.html

document.getElementById("Avatar").src = Settings[0];
document.getElementById("Name").textContent = Settings[1];
var tags = document.getElementById("Tags")
Settings[2].forEach(text => {
    var e = createTagElement(text);
    tags.appendChild(e)
});

function createTagElement(text){
    var decorator = document.createElement("div");
    decorator.className = "TagDecorator"
    var t = document.createElement("p");
    t.className = "TagContent"
    t.textContent = text;
    decorator.appendChild(t);
    return decorator;
}