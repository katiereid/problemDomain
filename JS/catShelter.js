


// Cat.prototype.describe = function () {
//   console.log("I am a wonderful cat with a ",
//     this.personality, "personality, and I'm", this.cuteness, 
//     "cute. Adopt me!");
// }
// adoptableCats.prototype.describeCats = function () {
//   for(var i = 0; i < this.Cats.length; i++) {
//     this.Cats[i].describe(); 
//   }
// }
// adoptableCats.prototype.recommend = function(Adopter) {
//   var suggestions = [];
//   var currentCat;
//   for(var i=0; i<this.Cats.length; i++) {
//     currentCat = this.Cats[i];
//     if(adopter.personalityPreference === currentCat.personality){
//       suggestions.push(currentCat.cuteness);
//     }
//   }
//   return suggestions;
// Shelter.prototype.describe = function () {
// //   console.log("The ", this.location, "shelter is a distance of",
// //     this.distance, "miles away from you, and has", this.catAmount, 
// //     "available for adoption.");
// this.addPersonality = function () {
//     return(Math.floor(Math.random() * (this.personality.length + 1) * this.personality));
//   }
//   this.addCuteness = function() {
//     return(Math.floor(Math.random() * (this.cuteness.length + 1) * this.cuteness)); 
//   };

function Adopter(distPreference, personalityPreference, agePreference) {
  this.distPreference= distPreference;
  this.personalityPreference=personalityPreference;
  this.agePreference=agePreference;
}

function Shelter(location, distance, cats) {
  this.location= location;
  this.distance = distance;
  this.cats = [];
    function Cat(personality, cuteness, age) {
    this.personality = personality;
    this.cuteness = cuteness; 
    this.age = age;

    Shelter.prototype.addCat = function(personality, cuteness) {
    this.cats.push(new Cat(personality, cuteness));
    }
    var allCats = new allCats();
    allCats.addCat("happy", "super", 2);
    allCats.addCat("playful", "a little", 1);
    allCats.addCat("scratchy", "extra", 6);
    allCats.addCat("curious", "mediocrely", 5);
    allCats.addCat("bossy", "handsomely", 7);
    allCats.addCat("cuddly", "very", 4);
  }
}

function allShelters() {
  this.shelters = [];
}

allShelters.prototype.addShelter = function(location, distance, catAmount) {
  this.shelters.push(new Shelter(location, distance, catAmount));
}
var allShelters = new allShelters();
allShelters.addShelter("Shoreline", 10, "40 cats");
allShelters.addShelter("Bellevue", 19, "16 cats");

function showShelters() {
  var printShelters = document.getElementById("shelterOutput");
  printShelters.innerHTML = showAllShelters;
  document.body.appendChild(printShelters);

var shelterSubmit =document.getElementById("shelterSubmit");
shelterSubmit.addEventListener('click', showShelters, false);



function allCats() {
  this.cats = [];
}

Shelter.prototype.addCat = function(personality, cuteness) {
  this.cats.push(new Cat(personality, cuteness));
}

var allCats = new allCats();
allCats.addCat("happy", "super");
allCats.addCat("playful", "a little");
allCats.addCat("scratchy", "extra");
allCats.addCat("curious", "mediocrely");
allCats.addCat("bossy", "handsomely");
allCats.addCat("cuddly", "very");


// function Adopter(distPreference) {
//   // this.personalityPreference = personalityPreference;
//   // this.cutenessPreference = cutenessPreference;
//   this.distPreference = distPreference;
//   // this.catAmountPref = catAmountPref;
// }

// allShelters.prototype.recommend = function(adopter) {
//   var suggestions = [];
//   var currentShelter;
//   for(var i=0; i<this.shelters.length; i++) {
//     currentShelter = this.shelters[i];
//     if(adopter.distPreference <= currentShelter.distance){
//       suggestions.push(currentShelter.catAmount);
//     }
//   }
//   return(suggestions);

