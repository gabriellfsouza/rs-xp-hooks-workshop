import { useState } from "react";
export default function useCounter() {
  const [value, setVAlue] = useState(0);

  const increment = () => {
    setVAlue(value + 1);
  };

  const decrement = () => {
    setVAlue(value - 1);
  };

  return [value, increment, decrement];
}
