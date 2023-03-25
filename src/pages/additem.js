/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from "react";
import useRender from "../hooks/useRender";
import itemStore from "../store/slices/items";
import Initialize from "./initialize";
import Items from "./items";
export default function AddItem() {
  const [item, setItem] = useState("");
  const render = useRender();
  const addItem = () => {
    setItem("");
    itemStore.addItem(item);
  };
  useEffect(() => {
    itemStore.subscribe(render);
    return () => {};
  }, []);

  return (
    <div>
      <input
        placeholder="Item.."
        value={item}
        onChange={(e) => setItem(e.target.value)}
      />
      <button onClick={addItem}>Add</button>
      <br />
      <Items />
      <br />
      <Initialize />
    </div>
  );
}
