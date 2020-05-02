var people = []
function newClicked() {
  var x = document.getElementById("newPerson");
  var y = document.getElementById("existingPersonRadio");
  if (x.style.display == "none") {
    x.style.display = "block";
    y.style.display = "none";
  } else {
    x.style.display = "none";
  }
} 

function existingClicked() {
  var x = document.getElementById("newPerson");
  var y = document.getElementById("existingPersonRadio");
  if (y.style.display == "none") {
    y.style.display = "block";
    x.style.display = "none";
  } else {
    y.style.display = "none";
  }
}

function createPerson() {
  event.preventDefault()
  people.push(person = {
    name: document.getElementById("newName").value
  })
  document.getElementById("newName").value='';
  console.log(people)
}

