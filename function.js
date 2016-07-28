function greet(){
	console.log('hi');
}
greet();

function logGreeting(fn){
	fn();
}
logGreeting(greet);

//function expression

var greetMe =function(){
	console.log('Hi Tony');
}
greetMe();
//it's first class
logGreeting(greetMe);
//A function on the Fly
logGreeting(function(){
	console.log('Hello Tony');
});