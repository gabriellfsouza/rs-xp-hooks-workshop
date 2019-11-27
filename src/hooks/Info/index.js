import React from "react";

// import { Container } from './styles';

export default function Info() {
  return (
    <div>
      <AppContext.Provider value={{ title: "workshop" }}></AppContext.Provider>
    </div>
  );
}
