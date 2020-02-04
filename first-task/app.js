//**imported text files
//and fs module
const fs = require('fs');
let mata = [];
let text = fs.readFileSync('./input.txt', 'utf8');
let search = fs.readFileSync('./patterns.txt', 'utf8');

//**	I split input file into column of words
// and patterns file into column of searchs
text = text.split('\n')
search = search.split('\n')

//** created blank array and pushed everything that matched
//** 
result = []
for (let i of search) {
	for (let j of text){
		if (j.includes(i)) {
			result.push(j);
		}
	}
}

//* printed out every matched words
for (let i of result) {
	console.log(i)
}