import { useReducer } from "react";

export default function useRender() {
  // eslint-disable-next-line no-unused-vars
  const [_, forceUpdate] = useReducer((x) => x + 1, 0);
  return forceUpdate;
}
