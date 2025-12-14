// Exercice 1 : Changer le texte
// ----------------------------
function changeText() {
    document.querySelector("#ex1 p").innerText = "Le texte a changé !";
}

// Exercice 2
function changeColor(color) {
    document.querySelector("#ex2 h2").style.color = color;
}

// Exercice 3
function addHTML() {
    document.querySelector("#ex3 .box").innerHTML += "<p>Nouveau contenu ajouté !</p>";
}
function clearHTML() {
    document.querySelector("#ex3 .box").innerHTML = "";
}

// Exercice 4
function addStyle() {
    document.querySelector("#ex4 p").classList.add("styled");
}
function removeStyle() {
    document.querySelector("#ex4 p").classList.remove("styled");
}
function toggleStyle() {
    document.querySelector("#ex4 p").classList.toggle("styled");
}

// Exercice 5
function colorAll() {
    document.querySelectorAll("#ex5 li").forEach(item => item.style.color = "blue");
}
function numberAll() {
    document.querySelectorAll("#ex5 li").forEach((item, i) => {
        item.innerText = `Item ${i + 1}`;
    });
}

// Exercice 6
function setPageColor(color) {
    document.body.style.backgroundColor = color;
}
function resetColor() {
    document.body.style.backgroundColor = "white";
}

// Exercice 7
function updateName() {
    const value = document.querySelector("#ex7 input").value;
    document.querySelector("#ex7 .result").innerText = value;
}
function updateColor() {
    const color = document.querySelector("#ex7 select").value;
    document.querySelector("#ex7 .result").style.color = color;
}

// Exercice 8
function addTask() {
    const input = document.querySelector("#ex8 input");
    const ul = document.querySelector("#ex8 ul");
    if (input.value.trim() !== "") {
        ul.innerHTML += `<li>${input.value}</li>`;
        input.value = "";
    }
}
function clearTasks() {
    document.querySelector("#ex8 ul").innerHTML = "";
}

// Exercice 9
let count = 0;
function updateCounter() {
    const counter = document.querySelector("#ex9 .counter");
    counter.innerText = count;

    counter.classList.remove("red", "green", "black");
    if (count > 0) counter.classList.add("green");
    else if (count < 0) counter.classList.add("red");
    else counter.classList.add("black");
}
function plusOne() { count++; updateCounter(); }
function minusOne() { count--; updateCounter(); }
function resetCounter() { count = 0; updateCounter(); }

// Exercice 10
function openTab(i) {
    const tabs = document.querySelectorAll("#ex10 .tab-content");
    const buttons = document.querySelectorAll("#ex10 button");

    tabs.forEach(t => t.style.display = "none");
    buttons.forEach(b => b.classList.remove("active"));

    tabs[i].style.display = "block";
    buttons[i].classList.add("active");
}
