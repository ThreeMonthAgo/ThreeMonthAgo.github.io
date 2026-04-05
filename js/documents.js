// Used for documents.html

document.title = Settings.Title;
document.getElementById("FooterTitle").textContent = Settings.Title;

const viewer = document.getElementById("Viewer");
const reading = document.getElementById("Reading");

const errorMsg = 
`
# Error
[**document not fouund**]
`;

var param = new URLSearchParams(window.location.search);
if(param.has("path")){
    var p = param.get("path")
    viewer.src = p;
    reading.textContent = "Reading: " + p;
} else {
    const notFound = document.createElement("script");
    notFound.type = "text/markdown";
    notFound.textContent = errorMsg;
    viewer.appendChild(notFound);
}