// 1. Import Area

// 2. Defination Area
async function GET(){
  // await
  var min = 124
  var max = 126
  var stockPrice = (Math.random() * (min - max) + min).toFixed(2)
  stockPrice = parseFloat(stockPrice);
  // every function return something
  return Response.json(
    {
      price:stockPrice
    }
  )
}
// 3. Export Area
// 3.1 Default Export 
// 3.2 Named Export 
module.exports = {GET}