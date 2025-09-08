
function generatePoem (event) {

  event.preventDefault () ;

  new Typewriter ("#poem", {
    strings : "The beauty lies in the eyes ",
    autoStart : true ,
    delay : 2 ,
    cursor : "" ,
  });
}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);