const tableInfo = {
  tableHeader: ["Student Name", "Age", "Phone", "Address"],
  tableContent: [
    {
      "Student Name": "John",
      Age: 19,
      Phone: "455 - 983 - 0903",
      Address: "123 Ave, San Francisco, CA, 94011",
    },
    {
      "Student Name": "Alex",
      Age: 21,
      Phone: "455 - 983 - 0912",
      Address: "456 Rd, San Francisco, CA, 94012",
    },
    {
      "Student Name": "Josh",
      Age: 22,
      Phone: "455 - 345 - 0912",
      Address: "789 Dr, Newark, CA, 94016",
    },
    {
      "Student Name": "Matt",
      Age: 23,
      Phone: "321 - 345 - 0912",
      Address: "223 Dr, Sunnyvale, CA, 94016",
    },
  ],
};

let thead = document.querySelector("#thead");
let row1 = document.createElement("tr");

let title = tableInfo.tableHeader.map((ele) => {
  let th = document.createElement("th");
  th.textContent = ele;
  return th;
});

title.forEach((ele) => {
  row1.appendChild(ele);
});
thead.append(row1);

let tbody = document.querySelector("#tbody");
tableInfo.tableContent.forEach((ele) => {
  function getElement(obj) {
    let arr = [];
    for (i in obj) {
      let th = document.createElement("th");
      th.textContent = obj[i];
      arr.push(th);
    }
    return arr;
  }
  let row2 = document.createElement("tr");
  getElement(ele).forEach((element) => {
    row2.appendChild(element);
  });
  tbody.append(row2);
});

// Question2
const list = ["HTML", "JavaScript", "CSS", "React", "Redux", "Java"];
let ol = document.querySelector("#ol");
let ul = document.querySelector("#ul");

const listLi = (listName) => {
  list.forEach((ele) => {
    let li = document.createElement("li");
    li.textContent = ele;
    listName.append(li);
  });
};

listLi(ol);
listLi(ul);

// Question3
const dropDownList = [
  { value: "newark", content: "Newark" },
  { value: "santaClara", content: "Santa Clara" },
  { value: "unionCity", content: "Union City" },
  { value: "albany", content: "Albany" },
  { value: "dalyCity", content: "Daly City" },
  { value: "sanJose", content: "San Jose" },
];

let select = document.querySelector("#select");
dropDownList.forEach((ele) => {
  let option = document.createElement("option");
  option.value = ele.value;
  option.textContent = ele.content;
  select.appendChild(option);
});
