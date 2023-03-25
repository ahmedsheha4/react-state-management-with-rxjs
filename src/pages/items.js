import React from "react";
import itemStore, { state } from "../store/slices/items";

export default function Items() {
  const items = state.items;
  const removeItem = (id) => {
    itemStore.removeItem(id);
  };
  return (
    <div>
      <p>Added Items..</p>
      <div>
        {items.map((data, idx) => (
          <div onClick={() => removeItem(data.id)} key={idx}>
            {data.item}
          </div>
        ))}
      </div>
    </div>
  );
}
