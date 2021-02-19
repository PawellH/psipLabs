
window.onload = function () {
  // Задание 1
  debugger;
  div1.innerHTML = [...document.body.childNodes].map(childNode => {
    return childNode;
  });
  div2.innerHTML = [...document.querySelectorAll("*")].map(childNode => {
    return childNode;
  });

  //Задание 4
  const element1 = document.getElementsByClassName("headings")[0];
  const element2 = document.getElementById("headings");
  const containerEl3 = document.querySelector(".container");
  const element3 = containerEl3.children[0];
  const elements = [element1, element2, element3];
  div4.innerHTML=("Задание 4: " +
    elements.every((element) => {
      return element === elements[0];
    })
  );

  //часть задания 5
  const tableContainer = document.getElementById("table");
  const cell1 = document.createElement("th");
  const cell2 = document.createElement("th");
  cell2.innerHTML = 2013;
  const cell3 = document.createElement("th");
  cell3.innerHTML = 2014;
  const cell4 = document.createElement("th");
  cell4.innerHTML = 2015;
  const cell5 = document.createElement("td");
  cell5.innerHTML = "Нефть";
  const cell6 = document.createElement("td");
  cell6.innerHTML = 43;
  const cell7 = document.createElement("td");
  cell7.innerHTML = 51;
  const cell8 = document.createElement("td");
  cell8.innerHTML = 79;
  const cell9 = document.createElement("td");
  cell9.innerHTML = "Золото";
  const cell10 = document.createElement("td");
  cell10.innerHTML = 29;
  const cell11 = document.createElement("td");
  cell11.innerHTML = 34;
  const cell12 = document.createElement("td");
  cell12.innerHTML = 48;
  const cell13 = document.createElement("td");
  cell13.innerHTML = "Дерево";
  const cell14 = document.createElement("td");
  cell14.innerHTML = 38;
  const cell15 = document.createElement("td");
  cell15.innerHTML = 57;
  const cell16 = document.createElement("td");
  cell16.innerHTML = 36;
  tableContainer.appendChild(buildTable([
    [cell1, cell2, cell3, cell4],
    [cell5, cell6, cell7, cell8],
    [cell9, cell10, cell11, cell12],
    [cell13, cell14, cell15, cell16]
  ]));
};

// Задание 2
function addDaysOfWeek() {
    //часть задания 2
    const listContainer = document.getElementById("list");
    const li1 = document.createElement("li");
    li1.innerHTML = "понедельник";
    const li2 = document.createElement("li");
    li2.innerHTML = "вторник";
    const li3 = document.createElement("li");
    li3.innerHTML = "среда";
    const li4 = document.createElement("li");
    li4.innerHTML = "четверг";
    const li5 = document.createElement("li");
    li5.innerHTML = "пятница";
    const li6 = document.createElement("li");
    li6.innerHTML = "суббота";
    const li7 = document.createElement("li");
    li7.innerHTML = "воскресенье";
    const ul = document.createElement("ul");
    appendChildren([li1, li2, li3, li4, li5, li6, li7], ul);
    const li = document.createElement("li");
    li.appendChild(ul);
    listContainer.appendChild(li);
}

//Задание 3
function writeHeadings() {
  const headingsHtml = getHeadings().map((heading) => {
    return escapeHtmlTags(heading.innerHTML);
  });
  document.getElementById("headings").innerHTML = headingsHtml;
}
function getHeadings() {
  const headings = document.querySelectorAll(
    "main > h1, main > h2, main > h3, main > h4, main > h5, main > h6"
  );
  return [...headings];
}
function escapeHtmlTags(html) {
  return html.replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

//Задание 5 
function buildTable(data) {
  const table = document.createElement("table");
  const tbody = document.createElement("tbody");
  const rows = data.map(row => {
    const rowElement = document.createElement("tr");
    appendChildren(row, rowElement);
    return rowElement;
  });
  appendChildren(rows, tbody);
  table.appendChild(tbody);
  return table;
}

function appendChildren(children, parent) {
  children.forEach(child => {
    parent.appendChild(child);
  })
}
