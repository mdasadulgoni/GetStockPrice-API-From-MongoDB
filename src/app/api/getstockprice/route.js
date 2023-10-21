// 1. Import Area

const { connectToMongoDB } = require("@/db/db")



connectToMongoDB()
// 2. Defination Area
async function GET(req){
  const searchParams = req.nextUrl.searchParams
  const stockName = searchParams.get('stockName')
  // await
  var min,max,stockPrice,resData
  

  switch(stockName) {
    case 'IDFC':
      // code block
      var db = await connectToMongoDB();
      var collection = db.collection('stockPrice');
      var stockPrice = await collection.find({}).toArray();
      // resData.status(200).json(posts)
      // min = 124
      // max = 126
      // stockPrice = (Math.random() * (min - max) + min).toFixed(2)
      // stockPrice = parseFloat(stockPrice);
      resData = {
        stockName,
        price:stockPrice
      }
      break;
    case 'ICICI':
      // code block
      min = 800
      max = 1000
      stockPrice = (Math.random() * (min - max) + min).toFixed(2)
      stockPrice = parseFloat(stockPrice);
      resData = {
        stockName,
        price:stockPrice
      }
      break;
    case 'HDFC':
      // code block
      min = 1400
      max = 1600
      stockPrice = (Math.random() * (min - max) + min).toFixed(2)
      stockPrice = parseFloat(stockPrice);
      resData = {
        stockName,
        price:stockPrice
      }
      break;
    default:
      // code block
      resData = {
        msg:"Invalide Stock Name"
      }
  }

  // every function return something
  return Response.json(resData)
}
// 3. Export Area
// 3.1 Default Export 
// 3.2 Named Export 
module.exports = {GET}