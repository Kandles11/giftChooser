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
    existingDiv.style.borderStyle = "hidden solid solid solid";
    makeRadioButtons();

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
      name: nameInput,
      gifts: []
    })
  }
  document.getElementById("newName").value='';
  console.log(people)
}

function makeRadioButtons() {
  var radioButtonsDiv = document.getElementById("radioButtonsForm");
  radioButtonsDiv.innerHTML = "";
  for( i=0; i<people.length; i++) {
    var radioInput = document.createElement('input');
    var label = document.createElement('label');    
    var linebreak = document.createElement('br')

    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'existingPerson');
    radioInput.setAttribute('value', people[i].name);
    radioInput.setAttribute('onclick', "showExistingTextInput()");

    label.setAttribute("for", people[i].name);
    label.innerHTML = people[i].name;

    radioButtonsDiv.appendChild(radioInput);  
    radioButtonsDiv.appendChild(label);
    radioButtonsDiv.appendChild(linebreak);
  }
  var giftInput = document.createElement('input');
  var giftInputLabel = document.createElement('label');
  var linebreak = document.createElement('br')

  giftInput.setAttribute('id', 'giftInput');
  giftInput.setAttribute('class', 'giftInput');

  giftInputLabel.setAttribute("for", 'giftInput');
  giftInputLabel.setAttribute("id", "giftInputLabel");
  giftInputLabel.setAttribute("class", "giftInputLabel");
  giftInputLabel.innerHTML = "What's the gift? 🎁";

  radioButtonsDiv.appendChild(giftInputLabel);
  radioButtonsDiv.appendChild(linebreak);
  radioButtonsDiv.appendChild(giftInput);  
  $("#giftInput").hide();
  $("#giftInputLabel").hide();

  var giftInputSubmit = document.createElement('input');
  
  giftInputSubmit.setAttribute("type", "submit");
  giftInputSubmit.setAttribute("id", "giftInputSubmit");
  giftInputSubmit.setAttribute("value", "submit");

  radioButtonsDiv.appendChild(giftInputSubmit);
  $("#giftInputSubmit").hide();

}

function showExistingTextInput() {
  $("#giftInput").show();
  $("#giftInputLabel").show();
  $("#giftInputSubmit").show();
}

function existingPersonSubmit() {
  event.preventDefault();
  giftInput = document.getElementById("giftInput").value.trim();
  radioPersonInput = $("input[name=existingPerson]:checked").val()
  console.log(radioPersonInput);
  console.log(giftInput)
  if (giftInput !== "") {
    giftInputIndex = people.findIndex(i => i.name === radioPersonInput);
    console.log(giftInputIndex)
    people[giftInputIndex].gifts.push(giftInput);
    console.log(people);
  }
  document.getElementById("giftInput").value='';
}