const span = document.querySelector("span");
const numbers = document.querySelectorAll(".numbers");
const operator = document.querySelectorAll(".operator");
const c = document.getElementById("c");
const equal = document.getElementById("equal");
const leftGlass = document.getElementById("leftGlass");
const rightGlass = document.getElementById("rightGlass");
const clear = document.getElementById("clear");

leftGlass.innerText = "(";
rightGlass.innerText = ")";


numbers.forEach(element => {
    element.addEventListener("click", () => {
        if(span.innerText.length < 20) {
            span.innerText = span.innerText + element.innerText
        }
    })
});

operator.forEach(el => {
    el.addEventListener('click', () => {
        if(span.innerText.length && !span.innerText.includes(el.innerText)) {
            span.innerText = span.innerText + el.innerText
        }
    })    
});

c.addEventListener("click", () => {
    const arr = span.innerText.split("");
    arr.length = arr.length - 1;
    span.innerText = arr.join("")
});

clear.addEventListener("click", () => {
    span.innerText = ""
});

equal.addEventListener("click", () => {
    try {
        span.innerText = eval(span.innerText);
        if(span.innerText === "undefined") {
            throw new Error()
        }
    } catch {
        span.innerText = "Error"
        setTimeout(() => {
            span.innerText = ""
        }, 1500)
    }
});

leftGlass.addEventListener("click", () => {
    span.innerText = span.innerText + leftGlass.innerText
});

rightGlass.addEventListener("click", () => {
    span.innerText = span.innerText + rightGlass.innerText
})