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
btn.addEventListener("click", () => {
    document.getElementById("message1").className -= "is-hidden";
    document.getElementById("card-no1").innerHTML += `${message}`;
});

