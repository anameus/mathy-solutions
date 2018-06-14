# mathy-solutions
Solutions for Math related problems.
Below are the details/story of each math solution.
This is an ongoing side project where I document my progress as a programmer.
Some of these projects might reveal how much of a 'noob' I am. BUT:
You have to start somewhere right?

## Details for each project:
### Sieve of Eratosthenes
Goal => This solution should calculate all the primes under 100.
 
Process => The Python version of this solution was written in June 2016.
I was in Namibia with family and had no internet to aid me.
Allthough: I had a magazine booklet on Python coding and some prior experience in java coding at school (but this was at the time a good few years ago..) 
Nevertheless I solved it in a day or two and was very proud and excited.
Looking back I can see that the code I wrote was very clunky and inefficient.
So I decided to rewrite it. And in JavaScript. Because why not?
That is the code in 'app.js'. 
And that is my current version of how to solve this very awesome mathy problem.

### Prime Factorization
Goal => The user enters a number and the code should calculate the Prime Factors (if there are any) and display them

Process => First attempt: only calculates the primes up untill the input number. Not the solution yet.
Added if statement to test the modulo (%) of the devision of inputNum and the loop variable i. That did the trick!

### Unit Converter
Goal => Let the user select the type of conversion (Temperature, currency, volume, mass) from dropdown menu and then the units (dollars to rands etc) and then calculate the converted units.

Process => First steps: Made the dropdown menu's text update according to selected link(type of conversion). Version 1.0 - conversion works for celsius only. Dropdown menus populate as expected. Version 1.1 - Conversion of all included units are functional. 

Future updates=> better UI; more units; input validation
