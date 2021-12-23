
let bill = document.getElementById("bill-input");
let percent = document.querySelectorAll(".button");
let people = document.getElementById("number-of-people");
let custom = document.getElementById("custom");
let reset = document.getElementById("reset");

let tipSplit = (billAmount, percentage, amtPeople) => {
  billAmount = parseFloat(bill.value);
  amtPeople = parseFloat(people.value);
  if (!billAmount || !percentage || !amtPeople) {
    return;
  }
  if (custom.value) {
    percentage = parseFloat(custom.value / 100);
  } 


  let tipPerPerson = (billAmount * percentage) / amtPeople;

  let totalPerPerson = billAmount / amtPeople + tipPerPerson;

  document.getElementById("tip-per-person").innerText =
    "$" + tipPerPerson.toFixed(2);

  document.getElementById("total-per-person").innerText = "$" + totalPerPerson.toFixed(2);

};

bill.addEventListener("change", tipSplit);
custom.addEventListener("change", () => this.tipSplit());
people.addEventListener("change", tipSplit);
percent.forEach((btn) => {
  btn.addEventListener("click", () => {
    let btns = parseFloat(btn.dataset.num);
    tipSplit(bill, btns, people);
  });
});
reset.addEventListener("click", () => {
    bill.value = 0
    people.value = 0
    percent.value = 0
    custom.value = ""
    document.getElementById("tip-per-person").innerText =
    "$" + 0.00.toFixed(2);
    document.getElementById("total-per-person").innerText = "$" + 0.00.toFixed(2);

})





