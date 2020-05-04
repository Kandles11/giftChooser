var people = []

//Primary Button Functions
function initButtonsNewClicked() {
  var buttonsDiv = document.getElementById("initButtonsDiv");

  $("#newPersonDiv").show();
  $("#existingPersonDiv").hide();
  $("#randomGiftDiv").hide();
  
  buttonsDiv.style.borderStyle = "hidden solid hidden solid";
} 

function initButtonsExistingClicked() {
  var buttonsDiv = document.getElementById("initButtonsDiv");

  $("#newPersonDiv").hide();
  $("#existingPersonDiv").show();
  $("#randomGiftDiv").hide();

  buttonsDiv.style.borderStyle = "hidden solid hidden solid";

  existingCreateRadioButtons();
  existingCreateGiftForm();
}

function initButtonsGiftClicked() {
  var randomGiftForm = document.getElementById("randomGiftForm");

  $("#newPersonDiv").hide();
  $("#existingPersonDiv").hide();
  $("#randomGiftDiv").show();

  randomGiftCreateRadioButtons()
}

//Form Submits
function newPersonFormSubmit() {
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

function existingPersonFormSubmit() {
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

//Create HTML Elements
function existingCreateRadioButtons() {
  $("#existingPersonForm").html("");
  for( i=0; i<people.length; i++) {
    var radioInput = document.createElement('input');
    var label = document.createElement('label');    
    var linebreak = document.createElement('br')

    radioInput.setAttribute('type', 'radio');
    radioInput.setAttribute('name', 'existingPerson');
    radioInput.setAttribute('value', people[i].name);
    radioInput.setAttribute('onclick', "showExistingGiftForm()");

    label.setAttribute("for", people[i].name);
    label.innerHTML = people[i].name;

    $("#existingPersonForm").append(radioInput);
    $("#existingPersonForm").append(label);
    $("#existingPersonForm").append(linebreak);
  }
}

function existingCreateGiftForm() {
  var radioButtonsDiv = document.getElementById("existingPersonForm");
  var giftInput = document.createElement('input');
  var giftInputLabel = document.createElement('label');
  var linebreak = document.createElement('br')
  var giftInputSubmit = document.createElement('input');

  giftInput.setAttribute('id', 'giftInput');
  giftInput.setAttribute('class', 'giftInput');

  giftInputLabel.setAttribute("for", 'giftInput');
  giftInputLabel.setAttribute("id", "giftInputLabel");
  giftInputLabel.setAttribute("class", "giftInputLabel");
  giftInputLabel.innerHTML = "What's the gift? 🎁";

  $("#existingPersonForm").append(giftInputLabel);
  $("#existingPersonForm").append(linebreak);
  $("#existingPersonForm").append(giftInput);

  $("#giftInput").hide();
  $("#giftInputLabel").hide();

  giftInputSubmit.setAttribute("type", "submit");
  giftInputSubmit.setAttribute("id", "giftInputSubmit");
  giftInputSubmit.setAttribute("value", "submit");

  $("#existingPersonForm").append(giftInputSubmit);
  $("#giftInputSubmit").hide();
}

function randomGiftCreateRadioButtons() {
  randomGiftForm.innerHTML = ""
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

    $("#randomGiftForm").append(radioInput);
    $("#randomGiftForm").append(label);
    $("#randomGiftForm").append(linebreak);
  }
}

//Show GiftForm
function showExistingGiftForm() {
  $("#giftInput").show();
  $("#giftInputLabel").show();
  $("#giftInputSubmit").show();
}





