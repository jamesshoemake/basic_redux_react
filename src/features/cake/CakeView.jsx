import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { order, restock } from "./cakeSlice";

export const CakeView = () => {
  const numOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <>
      <h2>Number of Cakes - {numOfCakes}</h2>
      <button onClick={() => dispatch(order())}>Order Cake</button>
      <button onClick={() => dispatch(restock(5))}>Restock Cakes</button>
    </>
  );
};
