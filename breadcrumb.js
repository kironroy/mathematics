"use strict";

const breadcrumbItems = [
  { name: "Home", url: "index.html" },
  { name: "1st Matrix Example", url: "roses.html" },
  { name: "2nd Matrix Example", url: "tacos.html" },
  { name: "3rd Matrix Example", url: "pies.html" },
  { name: "Algebra", url: "algebra.html" },
  { name: "Percentages", url: "percentages.html" },
  { name: "Polynomials", url: "polynomials.html" },
  { name: "Functions", url: "functions.html" },
];

const currentPage = window.location.pathname.split("/").pop();

const breadcrumbHTML = `
  <nav aria-label="Breadcrumb">
    <ul class="breadcrumb">
      ${breadcrumbItems
        .map((item) => {
          if (item.url === currentPage) {
            return `<li><span class="active">${item.name}</span></li>`;
          } else {
            return `<li><a href="${item.url}">${item.name}</a></li>`;
          }
        })
        .join("")}
    </ul>
  </nav>
`;

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("breadcrumb-container");
  if (container) {
    container.innerHTML = breadcrumbHTML;
  }
});

