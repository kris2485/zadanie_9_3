// scripts.js
var text = ('Velociraptor is a genus of herbivorous ceratopsid dinosaur that first appeared during the late Maastrichtian stage of the late Cretaceous period.');
var dinosaur = ('triceratops');
var dinosaurUpperCased = dinosaur.toUpperCase();
console.log(dinosaurUpperCased);
var textCharsAfter = text.replace('Velociraptor', dinosaurUpperCased); 
console.log(textCharsAfter);
var partOfText = textCharsAfter.slice(0,72);
console.log(partOfText);