"use client"
// 1. Import Area
import { FormControl, InputLabel, MenuItem, Select } from "@mui/material";
import { useState } from "react";

// 2. Defination Area
function Home() {
  // 2.1 Hooks Variable
  const [selectedValue,setCelectedValue] = useState("")
  const [stockPrice,setStockPrice] = useState("")

  // Function Defination Area
  const handleChange = (goni)=>{
    // console.log('ok'+goni);
    // console.log(goni.target.value);

    // Now Call the API
    // This is called promisechane
    fetch('/api/getstockprice').then((Response)=>{
      return Response.json()
    }).then((data)=>{
      console.log(data.price);
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