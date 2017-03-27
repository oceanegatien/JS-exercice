
/*function returnTrue(){
	return true;
}

console.log(returnTrue());

function hello(){
	return 'Hello World'
console.log(hello());
}

function returnString(){
	var string = "Hello" + " " + "World";
	return string;
};
console.log(returnString());




function nombre(a, b) {
	if (a > b){
	return "Le premier nombre est plus grand";
} else if (a = b){
	return "Les deux nombres sont identiques";
} else{
	return "Le premier nombre est plus petit";
}};
var result = nombre(36, 44);

console.log(nombre());

function unknown(a, b) {
	return a + b;
}
console.log(unknown("coucou ", 4));

function presentationHuman(nom, prenom, age) {
	return "Bonjour " + nom + prenom + ",tu as " + age + " ans";
}
console.log(presentationHuman('gatien ', 'oceane', 27));*/

function presentationHuman(age, genre) {
	if(age>=18 && genre=="homme"){
		return "Vous êtes un homme et vous êtes majeur";
	}else if(age<18 && genre=="homme"){
		return "Vous êtes un homme et vous êtes mineur";
	}else if(age>=18 && genre=="femme"){
		return "Vous êtes une femme et vous êtes majeur";
	}else if(age<18 && genre=="femme"){
		return "Vous êtes une femme et vous êtes mineur";
	}
}
console.log(presentationHuman(17, "homme"));
console.log(presentationHuman(19, "homme"));
console.log(presentationHuman(17, "femme"));
console.log(presentationHuman(19, "femme"));
