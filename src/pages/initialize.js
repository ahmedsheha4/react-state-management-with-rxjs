import React from "react";
import itemStore from "../store/slices/items";
export default function Initialize() {
  const init = () => {
    itemStore.initialize();
  };
  return (
    <div>
      <button onClick={init}>Init</button>
    </div>
  );
}
