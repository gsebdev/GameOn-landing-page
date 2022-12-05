import Modal from './class/modal-class.js';
import Form from './class/form-class.js';

const modal = new Modal(document.querySelector(".bground"), document.querySelectorAll('.close'), document.querySelectorAll(".modal-btn"));
const form = new Form(document.querySelector("#reservation-form"));

modal.init();
modal.reset();
form.init();

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

