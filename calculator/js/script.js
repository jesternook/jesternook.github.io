const display = window.document.getElementById("display");
const buttons = window.document.querySelectorAll("button");

buttons.forEach((item) => {
    item.onclick = () => {
        if (item.innerText == '.' && display.innerText.includes('.')) {
            return;
        }
        if (item.id == "clear") {
            display.innerText = "";
        }
        else if (item.innerText != "" && item.id == "equal") {
            display.innerText = eval(display.innerText);
        }
        else {
            display.innerText += item.id;
        }
    }
});

