var editSmall = document.querySelector("small");
var textInput = document.querySelector("input");
var span = document.querySelectorAll("span");
var ul = document.getElementById("text-holder");

editSmall.addEventListener("click", function() {
    textInput.style.display = "block";
});

for(var i=0 ; i<span.length ; i++) {
    span[i].addEventListener("click", function() {
        this.parentElement.style.display = "none";
    });
}

textInput.onkeypress = (function(event) {
    // if press enter
    if(event.which == 13) {
        var Todo = document.createElement("LI");
        var deleted = document.createElement("SPAN");
        deleted.innerHTML = "&times;";

        Todo.appendChild(deleted);
        Todo.appendChild(document.createTextNode(this.value));

        document.getElementById("text-holder").appendChild(Todo);
        this.value = "";
    }
});

ul.addEventListener("click", function(event) {
    if(event.target.tagName === "SPAN") {
        event.target.parentElement.style.display = "none";
    }
});