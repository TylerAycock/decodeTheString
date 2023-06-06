// Write a function that takes in a string and returns a string.
// A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

// The number in the string represents how many characters each letter should shift. For example:

// decode=(code)=>{
//     const alphabet = ["a","b", "c","d", "e", "f", "g", "h", "i", "j","k", "l","m","n","o","p","q","r","s","t","u","v","w","x","y","z",];
//     code = code.toLowerCase().split(``)
//     decoder = Number(code[0])
//     answer =[]
//     for(let i=1; i<code.length; i++){
//         alphabet.includes(code[i])
//         answer.push(alphabet[i])
//     }
//     console.log(answer)
// }


// // "1a" // "b"
// // decode("3ce") // "fh"
// decode("2fcjjm") // "hello"

//walkthrough with Lukas

const cypher=(string)=>{
    let num = parseInt(string[0])
    string=string.slice(1)
    decyphered= ``
    let alphabet = "abcdefghijklmnopqrstuvwxyz".split(``)

    for(let i =0; i<string.length; i++){
        let index = alphabet.findIndex((letter)=>letter === string[i])      //letter argument is in reference to the alphabets letters above
            index+=num                                                      //we use findIndex bcs it will return a numerical value 
            if(index > 25){
                index -=26
            }
            decyphered +=alphabet[index]
    }
    return decyphered
}

console.log(cypher("2fcjjm")) // "hello"