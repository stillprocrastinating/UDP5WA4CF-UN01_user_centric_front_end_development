
// This JavaScript was not functioning and is not in use, but is being kept for prosperity of life cycle procedures

function validateFormEmail() {
  let x = document.forms["form-prp"]["email"].value;
  if (x == "") {
    alert("Please use a valid email address.");
    return false;
  }
}