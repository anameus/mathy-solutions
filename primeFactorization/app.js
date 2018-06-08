"use strict";
// Have the user enter a number and find all Prime Factors (if there are any) and display them
const inputNum = prompt("Input number: ");
for(let i=2; i<=inputNum;i++){
	let isPrime = true;
	for(let j=2;j<i; j++){
		if(i%j === 0){
			isPrime = false;
		}
	}
	if (isPrime) console.log(i);
}
//this only calculates the primes up untill inputNum. this is NOT the solution yet...