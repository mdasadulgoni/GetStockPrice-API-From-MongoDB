"use client"
// 1. Import Area
import { FormControl, MenuItem, Select } from "@mui/material";
import { useState } from "react";


// 2. Defination Area
function Home() { // old way to define a function
  // 2.1 Hooks Variable
  // const [stockName,setStockName] = useState("")
  const [selectedValue,setSelectedValue] = useState("")
  const [stockPrice,setStockPrice] = useState("")

// 2.2 Function Define Area
const handleChange = (anil)=>{ // new way to define a function
  // console.log("Hi");
  console.log(anil.target.value);

  // call the API
  fetch('/api/getstockprice').then((res)=>{
    return res.json()
  }).then((data)=>{
    console.log(data);
    setStockPrice(data.price)
  }).catch((err)=>{

  }).finally(()=>{

  })
}
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