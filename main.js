///1.buy some milk chocolate
//2. add some mint flavoring
//3.combine the chocolate and the mind
//4. bake the mixture
//5. break the hardened sheet in 6 pieces


//define function named buyChocolate w no parameters
//should return an object w a type property whose value is milk chocolate


//set the function buychocolate to variable
//



const buyChocolate= () => {
  const chocolate = {
    type: "Milk Chocolate"
  } 
  return chocolate 
}
let newCandy = buyChocolate()

// addFlavoring function needs 1 parameter
//to accept an object as input 
//should add new flavor property to the object w value of "mint"
const addFlavoring = (flavorShot) => {
    flavorShot.flavoring= "mint"
    return flavorShot
}
 let chocolateWithFlavoring = addFlavoring(newCandy)


//makeBarkMixture needs one parameter for incoming object
//to be stored for use in the function
const makeBarkMixture = (barkMixture) => {
   if (barkMixture.flavoring === "mint") {
       barkMixture.mixed = true
   } 
   else {
    barkMixture.mixed = false
   }
   return barkMixture
}

let barkMixture = makeBarkMixture(newCandy)

const bakeCandy = (candyInOven) => {
    if (candyInOven.mixed === true ) {
        candyInOven.baked = true
    } else {
        candyInOven.baked = false
    } 
    return candyInOven
}

let candyInOven = bakeCandy(newCandy)

//function breakBark should have one parameter
//for incoming object to be stored for use in function
//if the incoming object baked property is true,
//function should return new array w 6 strings 
//no else block
//strings should be "Mint Chocolate Bark Piece"
const breakBark = (breakCandy) => {
    if (breakCandy.baked === true) {
        
       let candyArray= ["Mint Chocolate Bark Piece",
                     "Mint Chocolate Bark Piece",
                     "Mint Chocolate Bark Piece",
                     "Mint Chocolate Bark Piece",
                     "Mint Chocolate Bark Piece",
                     "Mint Chocolate Bark Piece"]
        
        return [candyArray]
    }
    
}

let breakCandy = breakBark(newCandy)
 

console.log(breakCandy)