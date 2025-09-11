 function displayPoem(response) {
   new Typewriter("#poem", {
     strings: response.data.answer,
     autoStart: true,
     delay: 1,
   });

   let submitButton = document.querySelector("#submit-button");
   submitButton.removeAttribute("disabled");
 }

 function displayAbijahPoem() {
   let poem = `
       Your laughter dances like the morning light, <br/>
A melody that makes the world feel right.<br/>
A beauty wrapped in love, I can't ignore.<br/>
Your grace is like a whisper on the breeze,<br/>
With every moment, you bring me to my knees.<br/>
In your embrace, I find my sweetest peace.<br/>
    <strong>Abijah God'swill Kutwane</strong>
    `;

   new Typewriter("#poem", {
     strings: poem,
     autoStart: true,
     delay: 1,
   });
 }


function generate(event) {
  event.preventDefault();
  let apiKey = "cbbfb900d7a3c5f058f2a44a54t3o340";
  let context =
    "You are a romantic Poem expert and love to write short poems. You mission is to generate a 6 line poem in basic HTML and separate each line with a <br />. Make sure to follow the user instructions. Do not include a title to the poem. Sign the poem with 'Abijah God'swill Kutwane ' inside a <strong> element at the end of the poem and NOT at the beginning. Do not include markdown around it";
  let instructionsInput = document.querySelector("#instructions");
  let prompt = `User instructions: Generate a romantic poem about ${instructionsInput.value}`;
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?context=${context}&prompt=${prompt}&key=${apiKey}`;
  let submitButton = document.querySelector("#submit-button");
  submitButton.setAttribute("disabled", "disabled");

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="waiting">⏳ Generating a poem about ${instructionsInput.value}..</div>`;
  axios.get(apiUrl).then(displayPoem);
}



 let poemForm = document.querySelector("#poem-generator");
 poemForm.addEventListener("submit", generate);
 displayAbijahPoem();
