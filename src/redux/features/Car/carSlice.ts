import { createSlice } from "@reduxjs/toolkit";

export type TCar = {
    _id: string
  name: string
  description: string
  color: string
  isElectric: boolean
  status: string
  features: string[]
  pricePerHour: number
  isDeleted: boolean
  image: string
  location: string
  carType: string
  createdAt: string
  updatedAt: string
  __v: number
}


const initialState:TCar[] = []

const carSlice = createSlice({
    name:'car',
    initialState,
    reducers:{

    }
    
})

export default carSlice.reducer;