"use strict";

const targetElement = document.getElementById("target");

const par1 = document.createElement("p");
const par2 = document.createElement("p");
const par3 = document.createElement("p");
const par4 = document.createElement("p");
const par5 = document.createElement("p");
const par6 = document.createElement("p");

const now = new Date();
const date = now.toLocaleDateString("fi-FI", {
  day: "numeric",
  month: "long",
  year: "numeric",
});
const time = now.toLocaleTimeString("fi-FI", {
  hour: "2-digit",
  minute: "2-digit",
});

par1.textContent = `Browser info: ${navigator.userAgent}`;
par2.textContent = `Operating system: ${navigator.oscpu}`;
par3.textContent = `Screen size: ${screen.width}x${screen.height}`;
par4.textContent = `Available screen space: ${screen.availWidth}x${screen.availHeight}`;
par5.textContent = `Current date: ${date}`;
par6.textContent = `Current time: ${time}`;

targetElement.appendChild(par1);
targetElement.appendChild(par2);
targetElement.appendChild(par3);
targetElement.appendChild(par4);
targetElement.appendChild(par5);
targetElement.appendChild(par6);

console.log(window.navigator);
