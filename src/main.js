 function generatePoem(event) {
   event.preventDefault();

   new Typewriter("#poem", {
     strings: " In every corner, beauty lies ",

     autoStart: true,
     delay: 1,
     cursor: "",
   });
 }

 let poemFormElement = document.querySelector("#poem-generator-form");
 poemFormElement.addEventListener("submit", generatePoem);