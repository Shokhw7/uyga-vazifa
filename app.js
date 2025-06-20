const title = document.querySelector("h1");

// 1.getElementsByTagName();
// 2.getElementsByClassName();
// 3.getElementsById();
// 4.querySelector() / querySelectorAll();

// 5.textContent
// 6.innerText
// 7.innerHTML

// title.setAttribute("class", "title heading");
// console.log(title.getAttribute("class"));
// console.log(title.hasAttribute("class"));
// }

// classList - DOMTokenList []
// title.classList
// title.classList.add("title");
// title.classList.remove("shefan");
// title.classList.toggle("saidxon");
// console.log(title.classList.contains("container"));
// }


const plusBtn = document.getElementById("plus");
const minusBtn = document.getElementById("minus");
const h1 = document.querySelector("h1");

let son = 0;

// plusBtn.addEventListener("click", () => {
//   son++;
//   h1.textContent = son;
// });

// minusBtn.addEventListener("click", () => {
//   son--;
//   h1.textContent = son;
// });

function yangilash() {
  h1.textContent = son;

  if (son > 0) {
    h1.classList.remove("qizil", "sariq");
    h1.classList.add("yashil");
  } else if (son < 0) {
    h1.classList.remove("yashil", "sariq");
    h1.classList.add("qizil");
  } else {
    h1.classList.remove("yashil", "qizil");
    h1.classList.add("sariq");
  }

  if (son >= 15) {
    plusBtn.disabled = true;
  } else {
    plusBtn.disabled = false;
  }

  if (son <= -15) {
    minusBtn.disabled = true;
  } else {
    minusBtn.disabled = false;
  }
}

plusBtn.addEventListener("click", () => {
  son++;
  yangilash();
});

minusBtn.addEventListener("click", () => {
  son--;
  yangilash();
});

yangilash();