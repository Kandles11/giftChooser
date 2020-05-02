var people = []
function newClicked() {
  var buttonsDiv = document.getElementById("initButtons");
  var newDiv = document.getElementById("newPerson");
  var existingDiv = document.getElementById("existingPersonRadio");
  if (newDiv.style.display == "none") {
    newDiv.style.display = "block";
    existingDiv.style.display = "none";
    buttonsDiv.style.borderStyle = "hidden solid hidden solid";
  } else {
    newDiv.style.display = "none";
    buttonsDiv.style.borderStyle = "hidden solid solid solid";
  }
} 

function existingClicked() {
  var buttonsDiv = document.getElementById("initButtons");
  var newDiv = document.getElementById("newPerson");
  var existingDiv = document.getElementById("existingPersonRadio");

  if (existingDiv.style.display == "none") {
    existingDiv.style.display = "block";
    newDiv.style.display = "none";
    buttonsDiv.style.borderStyle = "hidden solid hidden solid";

  } else {
    existingDiv.style.display = "none";
    buttonsDiv.style.borderStyle = "hidden solid solid solid";

  }
}

function createPerson() {
  event.preventDefault()
  nameInput = document.getElementById("newName").value.trim()
  if (nameInput !== "") {
    people.push(person = {
      name: nameInput
    })
  }
  document.getElementById("newName").value='';
  console.log(people)
}

