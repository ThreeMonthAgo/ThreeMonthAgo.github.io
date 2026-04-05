// Used for index.html

document.getElementById("Avatar").src = Settings.Avatar;
document.getElementById("Name").textContent = Settings.Name;
var tags = document.getElementById("Tags");
Settings.Tags.forEach(text => {
    var e = createTagElement(text);
    tags.appendChild(e);
});
document.title = Settings.Title;

function createTagElement(text){
    var decorator = document.createElement("div");
    decorator.className = "TagDecorator";
    var t = document.createElement("p");
    t.className = "TagContent";
    t.textContent = text;
    decorator.appendChild(t);
    return decorator;
}
