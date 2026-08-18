// for of

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
    console.log(num);
}
    
const greetings = "Hello world!"
for (const greet of greetings) {
    //console.log(`Each char is ${greet}`)
}

// Maps - these are like arrays but has iterations n all maps are known for unique values and in the order u have entered they are in same order


const map = new Map()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")

//console.log(map);

for (const [key, value] of map) {
    console.log(key, ':-', value);
}