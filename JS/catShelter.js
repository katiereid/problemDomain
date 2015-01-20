function Adopter(distPreference, personalityPreference, agePreference) {
  this.distPreference= distPreference;
  this.personalityPreference=personalityPreference;
  this.agePreference=agePreference;
}

function Cat(name, personality, cuteness, age) {
this.name = name;  
this.personality = personality;
this.cuteness = cuteness; 
this.age = age;    
}

var Grumpy = new Cat("Grumpy", "happy", "super", 2);
var Sassy = new Cat("Sassy", "happy", "super", 2);
var Kitty = new Cat("Kitty", "playful", "a little", 1);
var Frito = new Cat("Frito", "scratchy", "extra", 6);
var Toby = new Cat("Toby","curious", "mediocrely", 5);
var Jasper = new Cat("Jasper", "bossy", "handsomely", 7);
var George = new Cat("George", "cuddly", "very", 4);

function Shelter(location, distance, cats) {
  this.location= location;
  this.distance = distance;
  this.cats = [];
}  
 

Shelter.prototype.addCat = function(cat) {
  this.cats.push(cat);
}

var Shoreline = new Shelter("Shoreline", 10, this.cats);
var Bellevue = new Shelter("Bellevue", 19, this.cats);

Bellevue.addCat(Sassy);
Bellevue.addCat(Kitty);
Bellevue.addCat(Frito);
Bellevue.addCat(George);
Shoreline.addCat(Grumpy);
Shoreline.addCat(Jasper);
Shoreline.addCat(Toby);

var shelters = [];
shelters.push(Shoreline);
shelters.push(Bellevue);

function submitIt() {
  inputArray = []
  userDistPref     = document.getElementById('distInput').value;
  userPersPref    = document.getElementById('persInput').value;
  userAgePref     = document.getElementById('ageInput').value;

  inputArray = [userDistPref, userPersPref, userAgePref];
  
  var list           = document.getElementById('resultsOutput');
  var newItemLast    = document.createElement('li');
  var counter = 0;

  for(var i=0; i<shelters.length; i++) {
    var currentShelter = shelters[i]; 
    
    if (userDistPref >= currentShelter.distance) {
    
      for(var e = 0; e < currentShelter.cats.length; e++) {
        var currentCat = currentShelter.cats[e];
        var catDescribe = "There is a wonderful cat named " + currentCat.name + " with a " + currentCat.personality + " personality, and who is " + currentCat.cuteness + " cute and " + currentCat.age + " years old. Adopt me!";
        var newTextLast;    
        if ((userPersPref === currentCat.personality) && (userAgePref >= currentCat.age)) {
          newTextLast = document.createTextNode(catDescribe);
          newItemLast.appendChild(newTextLast);
          list.appendChild(newItemLast);
        } 
      }
    } else {
      alert("Sorry! No matches at this time, try again soon!");
    }
  }
}

var elSubmit = document.getElementById("submitButtonClick");
elSubmit.addEventListener("click", submitIt, false);




