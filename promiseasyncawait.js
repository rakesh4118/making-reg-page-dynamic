console.log("person1: shows ticket");
console.log("person2: shows ticket")

const preMovie = async() => {
    const promiseWifeBringingTicks = new Promise((resolve,reject) => {
        setTimeout(() => {
            resolve("ticket")
        },3000)
    });

const getPopcorn = new Promise((resolve,reject) => resolve("popcorn"));

const addButter = new Promise((resolve,reject) => resolve("butter"))

const getColdDrinks = new Promise((resolve,reject) => resolve("cold drinks"))

let ticket = await promiseWifeBringingTicks;

console.log("wife: i have the tickets")
console.log("husband: we should go in");
console.log("wife: no i am hungry");

let popcorn = await getPopcorn;

console.log("husband: i got some popcorn")
console.log("husband: we should go in");
console.log("wife: I need butter on my popcorn");

let butter = await addButter;

console.log("i got cold drinks");

return ticket
}
preMovie().then((m) => console.log("person 3: shows ticket"))

console.log("person4: shows ticket");
console.log("person5: shows ticket")