//the first way to convert shallow copy to deep copy 
let data=["Amirmohamamd","Akbarloo",23,true,true,null]
let result=Array.from(data)
result.push("New")
console.log(data);
console.log(result);
console.log("********************************");
//the second way to convert shallow copy to deep copy 
let user=["Amirmohamamd","Akbarloo",23,true,true,null]
let check=Array.from(user)
check.pop()
console.log(user);
console.log(check);
console.log("********************************");
//the third way to convert shallow copy to deep copy 
let id=["Amirmohamamd","Akbarloo",23,true,true,null]
let human=Array.from(id)
human.unshift("first")
console.log(id);
console.log(human);
console.log("********************************");

