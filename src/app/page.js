"use client"
// 1. Import Area
import { FormControl, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";


// 2. Defination Area
function Home() { // old way to define a function
  // 2.1 Hooks Variable
  var [stockName,setStockName] = useState("")
  // var [stockName,setStockName] = useState("ICICI")
  // var [stockName,setStockName] = useState("IDFC")
  const [selectedValue,setSelectedValue] = useState("")
  const [stockPrice,setStockPrice] = useState("")
  useEffect(()=>{
    setInterval(function(){
      // console.log('Ok');
      getstockprice(stockName)
    },3000)
  },[stockName])

// 2.2 Function Define Area
const getstockprice = (sn)=>{
  fetch(`/api/getstockprice?stockName=${sn}`).then((res)=>{
    return res.json()
  }).then((data)=>{
    console.log(data);
    setStockPrice(data.price)
  }).catch((err)=>{

  }).finally(()=>{

  })
}
const handleChange = (anil)=>{ // new way to define a function
  // console.log("Hi");
  setStockName(anil.target.value)
  
  console.log(anil.target.value);
  getstockprice(anil.target.value)

  // call the API

}
// 2.3 Return
  return (
    <>
      <h1>Corrent Price is {stockPrice} </h1> 
      <FormControl sx={{ m: 1, minWidth: 600 }} size="small">
        <Select value={selectedValue} onChange={handleChange}>
          <MenuItem value={"IDFC"}>IDFC BANK</MenuItem>
          <MenuItem value={"ICICI"}>ICICI BANK</MenuItem>
          <MenuItem value={"HDFC"}>HDFC BANK</MenuItem>
        </Select>
      </FormControl>
    </>
  )
}
//3. Export Area
export default Home;