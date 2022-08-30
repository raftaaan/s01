let sample = `
{
	"name" : "Nick Nelson",
	"age" : "18",
	"address" : {
		"city":"Rochester",
		"country":"England"
	}
}
`;

console.log(sample);
console.log(JSON.parse(sample));

let sampleArr = `
[
	{
		"email":"charliespring@gmail.com",
		"password":"truhamgrammar143",
		"isAdmin": false
	},
	{
		"email":"nicknelson@gmail.com",
		"password":"grammartruham143",
		"isAdmin": true
	}
]
`;

console.log(sampleArr);

let parsedSampleArr = JSON.parse(sampleArr);
console.log(parsedSampleArr);

console.log(parsedSampleArr.pop());
console.log(parsedSampleArr);

sampleArr = JSON.stringify(parsedSampleArr);
console.log(sampleArr);

/*
	
*/

let bsit4astuds = `

[    
    {"name":"Raf", "email":"raf@gmail.com", "age":21},    
    {"name":"Macky", "email":"macky@gmail.com", "age":20},  
    {"name":"Noel", "email":"johnnoel@gmail.com", "age":20},    
    {"name":"Kent", "email":"rikeru@gmail.com", "age":22}   
]  
`;

console.log(bsit4astuds);

let parsedBsit4astuds = JSON.parse(bsit4astuds);
console.log(parsedBsit4astuds);

console.log(parsedBsit4astuds.pop());
let add = {
	"name":"Kentaurus", "email":"kenkent@gmail.com", "age":20
};
parsedBsit4astuds.push(add);
console.log(parsedBsit4astuds);

bsit4astuds = JSON.stringify(parsedBsit4astuds);
console.log(bsit4astuds);


