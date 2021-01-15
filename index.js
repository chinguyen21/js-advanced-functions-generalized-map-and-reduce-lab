// Add your functions here

const map = (arr, func) => arr.map(ele => func(ele))

const reduce = (arr, func, startingPoint) => {
  if (startingPoint) {
  return arr.reduce((total, ele) => func(total, ele),startingPoint)
  } else {
    if (arr.every(ele => typeof ele === "number")) {
      return arr.reduce((total, ele) => func(total, ele),0)
    } else {
      return arr.reduce((total, ele) => func(total, ele), true)
    }
  }

}
