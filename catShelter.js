




// function Cat(personality, cuteness) {
//   this.personality = personality;
//   this.cuteness = cuteness;
// }
// Cat.prototype.describe = function () {
//   console.log("I am a wonderful cat with a ",
//     this.personality, "personality, and I'm", this.cuteness, 
//     "cute. Adopt me!");
// }
// function adoptableCats() {
//   this.Cats = [];
// }
// adoptableCats.prototype.addCat = function(personality, cuteness) {
//   this.Cats.push(new Cat(personality, cuteness));
// }
// adoptableCats.prototype.describeCats = function () {
//   for(var i = 0; i < this.Cats.length; i++) {
//     this.Cats[i].describe(); 
//   }
// }
// var adoptableCats = new adoptableCats();
// adoptableCats.addCat("playful", "very");
// adoptableCats.addCat("scratchy", "extra");
// adoptableCats.describeCats();


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
// }
// function Staff(numPeopleWorking) {
//   this.numPeopleWorking = numPeopleWorking;
// }
// function numStaff() {
//   this.Staff = [];
// }
// workingStaff.prototype.addStaff = function(numPeopleWorking) {
//   this.Staff.push(new Staff(numPeopleWorking));
// }
function Shelter(location, distance, catAmount) {
  this.location= location;
  this.distance = distance;
  this.catAmount= catAmount;
}
Shelter.prototype.describe = function () {
  console.log("The ", this.location, "shelter is a distance of",
    this.distance, "miles away from you, and has", this.catAmount, 
    "available for adoption.");
}

function allShelters() {
  this.shelters = [];
}
allShelters.prototype.addShelter = function(location, distance, catAmount) {
  this.shelters.push(new Shelter(location, distance, catAmount));
}
allShelters.prototype.describeShelters = function () {
  for(var i = 0; i < this.shelters.length; i++) {
    this.shelters[i].describe(); 
  }
}
var allShelters = new allShelters();
allShelters.addShelter("Shoreline", 10, "40 cats");
allShelters.addShelter("Bellevue", 19, "16 cats");
allShelters.describeShelters();

function Adopter(distPreference) {
  // this.personalityPreference = personalityPreference;
  // this.cutenessPreference = cutenessPreference;
  this.distPreference = distPreference;
  // this.catAmountPref = catAmountPref;
}

allShelters.prototype.recommend = new function() {
  var suggestions = [];
  var currentShelter;
  for(var i=0; i<this.shelters.length; i++) {
    currentShelter = this.shelters[i];
    if(adopter.distPreference <= currentShelter.distance){
      suggestions.push(currentShelter.catAmount);
    }
  }
  return(suggestions);
}