/*
    In this file, we'll be using variables, conditionals,
    and loops to play out a fight between Jon Snow and
    Jamie Lannister.
*/ 

let jonSnowAttack = 25
let jamieLannisterAttack = 35

if (jonSnowAttack > jamieLannisterAttack) {
    console.log("Jon Snow has better attack than Jamie Lannister")
} else if (jamieLannisterAttack > jonSnowAttack) {
    console.log("Jamie Lannister has better attack than Jon Snow")

} else {
    console.log("They have the same attack")
}

let jonSnowHealth = 100
let jonSnowDefense = 0

if (jonSnowHealth <= jamieLannisterAttack) {
    console.log("Jon Snow has been slain")
} else {
    jonSnowHealth = jonSnowHealth - jamieLannisterAttack
    //jonSnowHealth -= jamieLannisterAttack
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)
    // console.log('here is health ' + jonSnowHealth)
    // console.log('here is health again ', jonSnowHealth)
}
// jon picks up a shield, add to his defense
jonSnowDefense += 25
//jamie attacks again
if (jonSnowHealth <= jamieLannisterAttack - jonSnowDefense) {
    console.log("Jon Snow has been slain")
} else {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log(`Jon Snow's health is down to ${jonSnowHealth}`)

}
//villager throws Jon a health kit, but health cannot exceed 100
if (jonSnowHealth + 50 >= 100) {
    jonSnowHealth = 100
} else {
    jonSnowHealth += 50
}

console.log("Jon Snow's health after the health kit is " + jonSnowHealth)

let coinLandsHeads = true

if (coinLandsHeads) {
    console.log("The fight continues!")
} else {
    console.log("Jon is allowed to run away")
}

for (let i = 0; i < 5; i++) {
    jonSnowHealth -= (jamieLannisterAttack - jonSnowDefense)
    console.log("Jon's health is now " + jonSnowHealth)
}
// post - lab assigment 1:
//write logic in the for loop that detects if jon's health getts to 0 or less, in which case, you will print that jon is dead you will stop further loop iterations (see the "break" JS keyword for leaving a loop early)

// post-lab assigment 2: 
// write the for loop (including the logic you wrote for the first assigment) as a while loop. it should behave exactly the same