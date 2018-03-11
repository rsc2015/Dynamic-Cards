console.log("cards.js");


  //created a function for the createButton
   let btn = document.getElementById("createButton");
    btn.addEventListener("click", () => {
    let cardMsg1 = document.getElementById("postMessage").value;
    console.log("cardMsg1", cardMsg1);

  //  let delBtn = document.createElement("BUTTON");
  //  let t = document.createTextNode("delete");
  //  delBtn.appendChild(t);
  //  document.getElementById("cardDisplay").append(delBtn);

  // a existing node
  let addMsg = document.getElementById("cardDisplay");

  // create your new node
  let newMsg = document.createElement('DIV');

  // insert after
  addMsg.insertAdjacentElement("beforebegin", newMsg);

  newMsg.innerHTML += `<div class="newMsg">${cardMsg1}</div>`;
  //document.getElementById("cardDisplay").append(`<div class = "newMsg">${cardMsg1} ${btn}</div>`);
  
});

//creat  function for the deleteButton  
// var dBtn = document.getElementById("deleteButton");

// dBtn.addEventListener("click", () => {
//     var elem = document.getElementById("message1");
//     elem.parentNode.removeChild(elem);
// });

// delBtn.addEventListener("click", () => {



// }




