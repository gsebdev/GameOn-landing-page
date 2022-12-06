import Modal from './class/Modal.js';
import Form from './class/Form.js';

const modal = new Modal(document.querySelector(".bground"), document.querySelectorAll('.close'), document.querySelectorAll(".modal-btn"));
const form = new Form(document.querySelector("#reservation-form"));

modal.reset();

function editNav() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

