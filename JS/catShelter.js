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

Shoreline.addCat(Grumpy);
Bellevue.addCat(Sassy);
Bellevue.addCat(Kitty);
Bellevue.addCat(Grumpy);

console.log(Bellevue.cats);
console.log(Shoreline.cats);

var shelters = [];
shelters.push(Shoreline);
shelters.push(Bellevue);


console.log(shelters);

function submitIt() {
  inputArray = []
  userDistPref     = document.getElementById('distInput').value;
  userPersPref    = document.getElementById('persInput').value;
  userAgePref     = document.getElementById('ageInput').value;

  inputArray = [userDistPref, userPersPref, userAgePref];
  
  var list           = document.getElementById('resultsOutput');
  var newItemLast    = document.createElement('li');
  
  var counter = 0;
  var catFunction = function (e) {
        var currentCat = currentShelter.cats[e];
        console.log("current cat age " + currentCat.age);
        var catDescribe = "I am a wonderful cat named " + currentCat.name + " with a " + currentCat.personality + " personality, and I'm " + currentCat.cuteness + " cute and I'm " + currentCat.age + " years old. Adopt me!";
        var newTextLast;    
        console.log("userPersPref " + userPersPref);
        console.log("current cat pers " + currentCat.personality);
        console.log("user age pref" + userAgePref);
        if ((userPersPref === currentCat.personality) && (userAgePref >= currentCat.age)) {
          console.log("im inside the if ");
          console.log(currentCat.name);
          console.log(catDescribe);
          newTextLast = document.createTextNode(catDescribe);
           newItemLast.appendChild(newTextLast);
          list.appendChild(newItemLast);
        } else if (counter === 0) {
            alert("I'm sorry, no cats match your preferences at this time. Please check back soon!");
          }
        };

    for(var i=0; i<shelters.length; i++) {
    var currentShelter = shelters[i]; 
    console.log(userDistPref + currentShelter.distance);
    if (userDistPref >= currentShelter.distance) {
        console.log("hello");
      for(var e = 0; e < currentShelter.cats.length; e++) {
        catFunction();
        
      }
    } else {
        alert("I'm sorry, no shelters are in your area!");
      }
  }
}
   
   
  
var elSubmit = document.getElementById("submitButtonClick");
elSubmit.addEventListener("click", submitIt, false);




