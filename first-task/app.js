//**imported text files
//and fs module
const fs = require('fs');
let text = fs.readFileSync('./input.txt', 'utf8');
let search = fs.readFileSync('./patterns.txt', 'utf8');


/**
 * wrapper for taking user input
 * I imported that wrapper and named rl
 * @type {module}
 */
const readline = require("readline");
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

//**	I split input file into column of words
// and patterns file into column of searchs
text = text.split('\n')
search = search.split('\n')

//** created blank array and pushed everything that matched
//** 
result = []

/**
 * created method of first
 * @return {[array]} [changes array result]
 */
function first() {
	for (let i of search) {
		for (let j of text){
			if (j.includes(i)) {
				result.push(j);
			}
		}
	}
}

/**
 * created method of second
 * @return {array} changes array result
 */
function second() {
	text.forEach(function(item, index, array) {
		if (item.includes(search[index])) {
			result.push(item)
		}
	})
}

/**
 * created another variable with the name of textSplitted
 * in order to work with third method 
 * splitted every element of text array to make
 * them array of every word as well
 * @type {Array}
 */
let textSplitted = []
for (let every of text){
	event = every.split(' ')
	textSplitted.push(event);
}

/**
 * created third method of the task
 * @return {array} changes the result array
 * so that is it compatible with the third method
 */
// function third() {
// 	textSplitted.forEach(function(item, index, array) {
// 		for (let element of item) {
// 			count = 0
// 			for(let z = 0; z<element.length; z++) {
// 				if(search[index].length != element.length) {
// 					count +=2;
// 					break;
// 				} else if (search[index][z] == element[z]){
// 					continue;
// 				} else {
// 					count +=1;
// 				}
// 			}
// 			if (count<2) {
// 				result.push(item.join(' '));
// 				break;
// 			}
// 		}
// 	})
// }
// 

function third() {
	text.forEach(function(item, index, array) {
		count = 0;
		for (let e = 0; e<item.length; e++) {	
			if(item[e] === search[index][e]) {
				continue;
			} else {
				count+=1
			}
		}
		if (count<2) {
			result.push(item)
		}
	})	
}


/**
 * so this gives question and takes number as an asnwer to choose
 * @param  {[string]}) {console.log(`You chose the method ${number}! [It answers which answer I gave]
 * @param  {[string]} Look below for results \n\n`); if [just some comment]
 * @return {[function and array]} [According to asnwer processes function and gives array]
 */
rl.question("Which method do you want ? (1, 2 or 3) ", function(number) {
    console.log(`You chose the method ${number}!, Look below for results \n\n`);
    if (number == 1) {
    	first();
    } else if (number == 2) {
    	second();
    } else if (number == 3) {
    	third();
    }

    /**
     * the answer
     * printed out every matched word
     */
    for (let i of result) {
	console.log(i)
	}

	/**
	 * closing user input and output
	 */
    rl.close();
});



