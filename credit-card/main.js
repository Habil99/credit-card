/* --------------------------- Selectors -------------------------*/
const month = document.getElementById("month");
const year = document.getElementById("year");
const m = document.getElementById("m");
const my = document.getElementById("my");
const exp_date = document.getElementById("exp_date");
const owner_name = document.getElementById("owner_name");
const name = document.getElementById("name");
let card_number = document.getElementById("card_number");
const card_number_input = document.getElementById("card_number_input");
const card_owner_input = document.getElementById("card_owner_input");
const mastercard = document.getElementById("mastercard");
const visacard = document.getElementById("visacard");
var btn = document.getElementById("btn");


card_owner_input.addEventListener("input", bindOwnerName);
card_number_input.addEventListener("input", bindCardNumber);
card_number_input.addEventListener("keyup", determineCredCard);
year.addEventListener("click", bindYear);
month.addEventListener("click", bindMonth);
btn.addEventListener("click", submitForm);

function bindOwnerName(e) {
  owner_name.innerText = e.target.value;
  showHideName();
}

function bindCardNumber(e) {
  let value = e.target.value;
  let res = [...value]
    .map((d, i) => (i % 4 == 0 ? " " + d : d))
    .join("")
    .trim();
  card_number.innerText = res;
}

function showHideName() {
  if (card_owner_input.value.length > 0) {
    name.style.display = "none";
    owner_name.style.display = "block";
  } else {
    name.style.display = "block";
    owner_name.style.display = "none";
  }
}

function determineCredCard(e) {
  let cardValue = e.target.value;
  var visacardRegEx = /^4[0-9]{12}(?:[0-9]{3})?$/;
  var mastercardRegEx = /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2720)[0-9]{12}$/;

  if (cardValue.match(visacardRegEx)) {
    visacard.style.display = "block";
    mastercard.style.display = "none";
  } else if (cardValue.match(mastercardRegEx)) {
    visacard.style.display = "none";
    mastercard.style.display = "block";
  }
}

function bindYear(e) {
  let selectedYear = e.target.value;
  exp_date.innerText = `${selectedYear}`;
  showHideMY();
  function showHideMY() {
    if (selectedYear === " ") {
      my.style.display = "none";
      exp_date.style.display = "block";
    } else if (selectedYear.length > 0) {
      my.style.display = "none";
    };
  };
};

function bindMonth(e) {
  let selectedMonth = e.target.value;
  m.innerText = `${selectedMonth} /`
  if (selectedMonth === " ") {
    my.style.display = "block";
    exp_date.style.display = "none";
  } else if (selectedMonth.length > 0) {
    my.style.display = "none";
  };
};

function submitForm(e) {
  e.preventDefault();
  showDetails();
};

function showDetails() {
  console.log(``)
}
