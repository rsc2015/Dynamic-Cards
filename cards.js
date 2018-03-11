console.log("cards.js");

// function displayContainer(){
//     let arrayOfCards;


    
//     +=`<div id="messag1" class="is-hidden">
//     <h3>Card Message</h3>
//     <div id="card-no1">
//      ${message}
//     </div>
//     <div id="cart-price"></div>
//     <button id="deleteButton">delete</button>
//   </div>`
// }


//created  function to the deleteButton at the card message
// var dBtn = document.getElementById("deleteButton");

// dBtn.addEventListener("click", () => {
//     var elem = document.getElementById("message1");
//     elem.parentNode.removeChild(elem);
// });

  //created a function for the createButton
  var btn = document.getElementById("createButton");
// btn.addEventListener("click", () => {
//     document.getElementById("message1").className -= "is-hidden";
//     document.getElementById("card-no1").innerHTML += `${message}`;
// });

btn.addEventListener("click", () => {
  var cardMsg1 = document.getElementById("postMessage").value;
  //document.getElementById("card-no1").innerHTML += `${message}`;
  // document.getElementById("cardDisplay").innerHTML = cardMsg1
  // var node = document.createElement("DIV");
  // document.getElementById("cardDisplay").appendChild(node) = cardMsg1
  document.getElementById('cardDisplay').append('<div class="newMsg"></div>').innerHTML = cardMsg1;
});



// function myFunction() {
//   var x = document.getElementById("myTextarea").value;
//   document.getElementById("demo").innerHTML = x;
// }

// function myFunction() {
//     var btn = document.createElement("BUTTON");
//     var t = document.createTextNode("CLICK ME");
//     btn.appendChild(t);
//     document.body.appendChild(btn);
// }