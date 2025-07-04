// HTML ELEMENTS
const buttonAddRandom = document.querySelector("#btn-add-random");
const tableBody = document.querySelector("tbody#contacts");


// ITERATION 0 | Example Row
// Splice 1 element from the contacts array at the random index
const randomIndex = Math.floor(Math.random() * contacts.length);
const splicedArr = contacts.splice(randomIndex, 1);
console.log(splicedArr);

// Get the element from the spliced array
const randomContact = splicedArr[0];

const exampleRow = document.createElement("tr");
exampleRow.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;

tableBody.appendChild(exampleRow);





// ITERATION 1 - Display 3 contacts
// Get the first 3 contacts from the 'contacts' array.

const threeContacts = contacts.splice(0, 3); //get 3 contacts from array
console.log(threeContacts);


for(let i=0;i<threeContacts.length;i++){//iterate over 3 contacts and create new table row
  const iteration = threeContacts[i];
  const exampleRow2 = document.createElement("tr");//new rows
  exampleRow2.innerHTML = `
  <td>
    <img src="${iteration.pictureUrl}" />
  </td>
  <td> ${iteration.name} </td>
  <td> ${iteration.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
tableBody.appendChild(exampleRow2); //add 3 created rows to existing base table as children
};


  // ITERATION 2 - Delete Buttons............................................///

// create new variable to find all delete-buttons
let allDelButtons = document.querySelectorAll('.btn-delete');
console.log(allDelButtons);//so its array


  //FOR LOOP
  
// for(let b=0;b<allDelButtons.length;b++){//itarate allDelButtons
//   let allDelButtonsIteration = allDelButtons[b];//set iteration variable
// allDelButtonsIteration.addEventListener('click',function(){ // add EventListener
//   allDelButtonsIteration.closest("tr").remove();}) //remove closest table row of button
// }

// forEACH array method
allDelButtons.forEach(function(buttonElement){//buttonElement=iteration of array
  buttonElement.addEventListener("click",function(){
    buttonElement.closest("tr").remove();
  });
});

//................................................................................... ///

  // ITERATION 3 - Like Buttons..........................................................////

//get all likes in variable
const likesAll = document.querySelectorAll(".btn-like");
//.........................................................

likesAll.forEach(function(likesElement){//likesElement=iteration of array
  likesElement.addEventListener("click",function(){
    likesElement.classList.toggle("selected");//(toggle) switch condition of css style (one style or another)
  });
});

//...........................................................................................////
  
  


// Bonus: ITERATION 4 - Add Random Contacts
const copyOfContacts = [...contacts];//first copy Array that will never change
let workingCopyOfContacts = [...copyOfContacts];//second copy of Array of contacts that will be changed
let displayedContacts = [];//array that will be displayed on screen

//add eventListener to aadContactButton

buttonAddRandom.addEventListener("click",()=>{/////////////////////////////
  //if Array of contacts will end than we fill it again
  if (workingCopyOfContacts.length === 0) {
    alert("All contacts have been added!!!");
    workingCopyOfContacts = copyOfContacts.filter(contact => !displayedContacts.includes(contact));
    //filter check each element of copyOfContacts
    //displayedContacts.includes(contact) means contact is in an Array
    //! not in displayed Array
    //than workingCopyOfContacts will have only contacts that are not included in DisplayedArray
  }
  
   // Every time choose new random contact...///
  const randomIndex = Math.floor(Math.random() * workingCopyOfContacts.length);
  const randomContact = workingCopyOfContacts[randomIndex];
  workingCopyOfContacts.splice(randomIndex,1);//delete random contact from working array
  displayedContacts.push(randomContact);//add random contact to displayedContacts it was empty array
  //.......................................///
  //Create new child of table
const createLastChildOfTable = document.createElement("tr");
//.............................
//create new row
createLastChildOfTable.innerHTML = `
  <td>
    <img src="${randomContact.pictureUrl}" />
  </td>
  <td> ${randomContact.name} </td>
  <td> ${randomContact.popularity.toFixed(2)} </td>
  <td>
    <button class="btn-delete">Delete</button>
  </td>
  <td>
    <button class="btn-like">
      <img src="./images/icon.png" alt="like" />
    </button>
  </td>
`;
//...............................
tableBody.appendChild(createLastChildOfTable);

//del buttons for new
let delButton = createLastChildOfTable.querySelector(".btn-delete");
delButton.addEventListener("click", function() {
  createLastChildOfTable.remove();//delete the row of table

  const indexDisplayed = displayedContacts.indexOf(randomContact);//find index of displayed random contact
  //if index not found...indexDisplayed = -1. if found it return 0,1,2...index
  
  //if indexDisplayed not equal -1, means it founded again
  if (indexDisplayed > -1) {

    displayedContacts.splice(indexDisplayed, 1);/*delete the element from displayedContacts
    Array from index position; 1 means one time*/
  }
  if (!workingCopyOfContacts.includes(randomContact)) {// if false, random contact is not in working Array
    //than add it to working array
      workingCopyOfContacts.push(randomContact);
    }
});

// like button for new 
let likeButton = createLastChildOfTable.querySelector(".btn-like");
likeButton.addEventListener("click", function() {
  likeButton.classList.toggle("selected");
});
});////////////////////////////////////////////////////////////////////////////////////////////////


