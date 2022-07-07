const itemObject = [
  { quantity: 1, price: 200 },
  { quantity: 3, price: 350 },
  { quantity: 5, price: 400 },
];

// Question 1
function question1() {
  let arr = itemObject.map((item) => {
    let obj = { ...item };
    obj.quantity = obj.quantity * 2;
    obj.price = obj.price * 2;
    return obj;
  });
  console.log(arr);
}

// Question 2
function question2() {
  let obj = itemObject.filter((ele) => {
    return ele.quantity > 2 && ele.price > 300;
  });
  console.log(obj);
}

// Question 3
function question3() {
  let sum = itemObject.reduce((prev, cur) => {
    return cur.quantity * cur.price + prev;
  }, 0);
  console.log(sum);
}

// Question 4
const string =
  " Perhaps The Easiest-to-understand   Case   For Reduce Is   To Return The Sum Of  All The Elements In  An Array  ";
function question4() {
  let newString = string.toLocaleLowerCase().trim().split(/[ -]+/).join(" ");
  console.log(newString);
}

const first = [
  { uuid: 2, name: "test" },
  { uuid: 5, name: "test5" },
  { uuid: 3, name: "test3" },
];
const second = [
  { uuid: 6, role: "pm" },
  { uuid: 4, role: "engineer" },
  { uuid: 1, role: "manager" },
  { uuid: 2, role: "associate" },
];
// Question 5
function question5() {
  // let obj = first.concat(second);

  // const newObj = [];
  // obj.forEach((item) => {
  //   const str = item.uuid - 1;
  //   if (typeof newObj[str] === "undefined") {
  //     newObj[str] = item;
  //     console.log(newObj[str], item);
  //   } else {
  //     newObj[str].name = `${item.name}`;
  //     newObj[str].role = `${item.role}`;
  //   }
  // });

  let obj = first.reduce((pre, cur) => {
    let temp = pre.find((ee) => ee.uuid == cur.uuid);
    if (temp) {
      Object.assign(temp, cur);
    } else {
      pre.push(cur);
    }
    return pre;
  }, second);

  obj.sort((a, b) => {
    return a.uuid - b.uuid;
  });

  obj.forEach((item) => {
    if (typeof item.name === "undefined") item.name = "N/A";
    else if (typeof item.role === "undefined") item.role = "N/A";
  });

  console.log(obj);
}

 question1();
 question2();
 question3();
 question4();
question5();
