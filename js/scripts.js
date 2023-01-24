//User Interface Logic
newAddressBook = new AddressBook();

window.onload = function() {
  
//set up an event handler for the form submission
let form = document.querySelector("form");
  form.onsubmit = function(event) {
  event.preventDefault();
  let fName = document.getElementById("firstName").value
  let lName = document.getElementById("lastName").value
  let pNumber = document.getElementById("phoneNumber").value

  newAddressBook.addContact(new Contact(fName, lName, pNumber));

  document.querySelector(".firstName").innerText = fName
  document.querySelector(".lastName").innerText = lName
  document.querySelector(".phoneNumber").innerText = pNumber

  }
}

//Business Logic for AddressBook
//Constructor function for AddressBook objects
function AddressBook() {
  this.contacts = {};
  this.currentId = 0;
}

AddressBook.prototype.addContact = function(contact) {
  contact.id = this.assignId();
  this.contacts[contact.id] = contact;
};

AddressBook.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

AddressBook.prototype.findContact = function(id) {
  if (this.contacts[id] !== undefined) {
      return this.contacts[id];
  }
  return false;
};

AddressBook.prototype.deleteContact = function(id) {
  if (this.contacts[id] === undefined) {
    return false;
  }
  delete this.contacts[id];
  return true;
};

//Business logic for Contacts
//Constructor function for Contact objects
function Contact(firstName, lastName, phoneNumber) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.phoneNumber = phoneNumber;
  }

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
};


