// Add your functions here

const map = (arr, func) => arr.map(ele => func(ele))

const reduce = (arr, func, startingPoint) => {
  if (startingPoint) {
    return arr.reduce((total, ele) => func(total, ele),startingPoint)
  } else {
    return arr.reduce((total, ele) => func(total, ele))
  }     
}


// const reduce = (arr, func, startingPoint) => {
//   let r = startingPoint
//   if (!startingPoint) {
//     if (arr.every(ele => typeof ele === "number")) {
//       r = 0
//     } else {
//       r = true
//     }
//   }        
//   return arr.reduce((total, ele) => func(total, ele),r)
          
// }
