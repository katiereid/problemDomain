function Adopter(distPreference, personalityPreference, agePreference) {
  this.distPreference= distPreference;
  this.personalityPreference=personalityPreference;
  this.agePreference=agePreference;
}

function Shelter(location, distance, cats) {
  this.location= location;
  this.distance = distance;
  this.cats = [];
}    

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


function allShelters() {
  this.shelters = [];
}

allShelters.prototype.addShelter = function(location, distance, cats) {
  this.shelters.push(new Shelter(location, distance, cats));
}

var allShelters = new allShelters();
allShelters.addShelter("Shoreline", 10, this.cats);
allShelters.addShelter("Bellevue", 19, this.cats);

function submitIt() {
  inputArray = []
  userDistPref     = document.getElementById('distInput').value;
  userPersPref    = document.getElementById('persInput').value;
  userAgePref     = document.getElementById('ageInput').value;

  inputArray = [userDistPref, userPersPref, userAgePref];
  
  for(var i=0; i<this.cats.length; i++) {
    var catDescribe = ("I am a wonderful cat with a ", this.personality, "personality, and I'm", this.cuteness, 
    "cute and I'm ", this.age, "years old. Adopt me!");
    var list           = document.getElementById('resultsOutput');
    var newItemLast    = document.createElement('li');
    var newTextLast    = document.createTextNode(catDescribe);
    newItemLast.appendChild(newTextLast);
    list.appendChild(newItemLast);
    var suggestions = [];
    var currentCat;currentCat = this.cats[i];
    currentShelter = this.Shelter[i];
    if(userPersPref === currentCat.personality && userDistPref<= currentShelter.distance && userAgePref === currentCat.age)
    {
      suggestions.push(currentCat.catDescribe);
      }else {
        console.log("I'm sorry, no cats match your preferences at this time. Please check back soon!");
      }
    }
  }

  function bindEventListener () {
  var elSubmit = document.getElementById("submitButtonClick");
  elSubmit.addEventListener("click", submitIt, false);
}
  window.onload = bindEventListener;



