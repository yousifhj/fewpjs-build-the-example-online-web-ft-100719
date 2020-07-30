// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!

document.addEventListener("DOMContentLoaded", ()=>{
  addLikeListenerForAll();
})

function addLikeListenerForAll() {
  const allHearts = document.querySelectorAll('.like');
  allHearts.forEach((heart) => {
    heart.addEventListener('click', (event) => {likes(event)})
  });
}
function likes(thisHeart)
{
  /////
  mimicServerCall()
  .then(function(response) {
    if (thisHeart.target.innerText === EMPTY_HEART)
    {
      thisHeart.target.innerText = FULL_HEART;
      thisHeart.target.style.color = '#FF0000';
    } else 
    {
      thisHeart.target.innerText = EMPTY_HEART;
      thisHeart.target.style.color = '#CCCCCC';
    }
  })
  .catch((error) =>  {
      alert("Network Problem!");
      document.getElementById("modal").className = ""
      setTimeout(function(){ document.getElementById("modal").className = "hidden" }, 2000);
   });

}
//------------------------------------------------------------------------------
// Ignore after this point. Used only for demo purposes
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}