var index = Math.floor(Math.random() * 27);
var wordList = ["halloween", "pumpkins", "exorcist", "vampire", "zombie", "haunted", "costume", "october", "autumn", "graveyard", "broomstick", "doorbell", "nighttime", "facepaint", "spiders", "flashlight", "shadow", "skeleton", "supernatural", "werewolf", "lantern", "magical", "forest", "nightmare", "scythe", "chocolate", "cobwebs"];
var word = wordList[index];

var hintList = ["This is the name of the holiday on October 31.", "People often carve ___ into jack-o-lanterns.", "A person who specializes in expelling evil spirits", "The name of the bloodsucking creatures that many people dress up as on Halloween.", "An undead creature.", "___ houses are often filled with jumpscares.", "Most people wear one of these when going trick-or-treating.", "Which month does Halloween occur in?", "The season when Halloween occurs.", "Where the dead rest (and also occasionally rise from).", "You might see a witch flying on a ___.", "Most trick-or-treaters ring the ___ when there is one, but some will knock even if it is present.", "The time of day people often go trick-or-treating.", "Many trick-or-treaters put this on their faces to appear more in costume.", "Eight legged arachnids that are often seen as decoration during Halloween.", "Please bring a ___ when walking in the dark. Also, make sure it actually has battery.", "Everyone has one of these following behind them wherever they go.", "After dead bodies decay, only a ___ remains.", "Monsters such as zombies, ghosts and fairies are considered as part of the ___.", "Monsters that are half human, half wolf.", "The more-traditional replacement for a flashlight when navigating the dark.", "Fairies and witches are ___ beings.", "Don't venture into a ___ during the dark. You may run into wolves, or maybe even a werewolf.", "A bad dream.", "The weapon of choice of the Grim Reaper", "Much of the candy you receive on Halloween will have ___.", "Spiders create ___"];
var hint = hintList[index];

var streak = 0;

document.getElementById("hint").innerHTML = "Hint: " + hint;

function check() {
  var userInput = document.getElementById("input").value.toLowerCase();
  if (userInput == word)
  {
    ++ streak;
  	document.getElementById("ansCheck").innerHTML = "Correct! Your streak is " + streak;
  }
  else
  {
  	if (word == "halloween")
    {
    	word = "Halloween";
    }
    document.getElementById("ansCheck").innerHTML = "Incorrect, the correct answer was " + word + ". Streak has been reset.";
  }
}