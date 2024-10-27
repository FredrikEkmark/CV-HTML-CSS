"use strict";

function a4Formating() {
    document.getElementById("mainColumn").classList.add("a4Format");
    document.getElementById("sideBar").classList.add("a4Format");
    document.getElementById("body").classList.add("a4Format");
    document.getElementById("main").classList.add("a4Format");
    document.getElementById("header").classList.add("a4Format");
    document.getElementById("skillsList").classList.add("a4Format");
    document.getElementById("linksDiv").innerHTML = `
        <p id="gitHubLink">github.com/FredrikEkmark</p>
        <p id="linkedInLink">se.linkedin.com/in/fredrik-ekmark-21255012a</p>
    `;
    document.getElementById("linksDiv").classList.add("a4Format");
    document.getElementById("contact").innerHTML = `
        <h2>Kontakt</h2>
        <p>Telefon:</p>
        <p>0727278516</p>
        <p>Email:</p>
        <p>Fredrik.ekmark@gmail.com</p>
        <p>Adress:</p>
        <p>Tappvägen 12 <br>168 78 Bromma</p>
            `;
    document.getElementById("header").innerHTML = "";
};