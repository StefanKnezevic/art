/* ---------------------------------------- SCROLL -------- */

window.onscroll = function () { scrollFunction() };

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("myBtn").style.display = "block";
  } else {
    document.getElementById("myBtn").style.display = "none";
  }
}
// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


/* ---------------------------------------- DROPDOWN MENY -------- */

function dropdownMeny() {
  var x = document.getElementById("dropdownClick");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


/* ---------------------------------------- GET MODAL ELEMENTS -------- */
var modal = document.getElementById('simpleModal');
var modalBtn = document.getElementById('log_in');
var closeBtn = document.querySelector('.closeBtn');

modalBtn.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', clickOutside);

function openModal() {
  modal.style.display = 'block';
}

function closeModal() {
  modal.style.display = 'none';
}

function clickOutside(e) {
  if (e.target == modal) {
    modal.style.display = 'none'
  }
}

