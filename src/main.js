function displayPoem (response){

    new Typewriter("#poem", {
      strings:response.data.answer,
      autoStart: true,
      delay: 2,
      cursor: "",
    });

}


function generatePoem (event) {

  event.preventDefault () ;

let instructionsInput = document.querySelector("#user-instructions");
let apikey = "5fa91afbb646o4d4c1d2at71e7c05a3b";
let prompt = `User instructions : Generate a South African poem about ${instructionsInput.value}`;
let context = "You're a romantic Poem expect and love to write  short poems. Your mission is to generate a 4 line poem , provided in HTML format. example : <div>This is the poem <div/> and seperate each line with a <br/>. Make sure to follow the user instructions. Don't include a tittle to the poem. Sign the poem with `SheCodes AI` inside a <strong> element at the bottom of the poem. ";
let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apikey}`;


 let poemElement = document.querySelector("#poem");
 poemElement.classList.remove("hidden");
 poemElement.innerHTML = `<div class="generating">⏳ Generating a South African poem about ${instructionsInput.value}</div>`;



axios.get(apiUrl).then(displayPoem);



}



let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);