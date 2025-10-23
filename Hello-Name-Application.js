const btnElement = document.querySelector("button");
const spanElement = document.getElementById("updateContent");

btnElement.onclick = function() {
    const name = prompt("Please enter your name:");

        spanElement.textContent = name + " !";

}
