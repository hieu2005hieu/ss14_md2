import React from 'react'
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { addProduct,DELETE,edit } from '../stort/Index';
export default function Produxts() {
    let [user, setUser] = useState();
    let dispath = useDispatch();
    const data = useSelector(state => {
      return state.producReducer.products
    })
  
  
  
  
  
    const handlclick = () => [
        console.log("111111", user),
    dispath(addProduct(user)), setUser("")];
  
    // const hanldDELETE = (age) => {
    //    dispath(DELETE(age))
    // }
    // const hanldEDIT = (products) => {
    //      setUser(products.name)
       
    //  };
  return (
      <>
          <input type="text" />
          <input type="text" value={user} onChange={(e) => setUser(e.target.value)} />
      <button onClick={handlclick}>click</button>
      {data.map((item) => {
        return (
          <div>
            <p>Ten: {item.name}</p>
            <p>Tuoi: {item.age}</p>
            <button onClick={() => hanldDELETE(item.age)}>xoa</button>
            <button onClick={() => hanldEDIT(item)}>edit</button>
          </div>
        );
      })}
 
    </>
  );
}
