import { useState } from "react";
import "./App.css";
import Wrapper from "../Wrapper";
import CakeView from "./features/cake/CakeView";
import IcecreamView from "./features/icecream/IcecreamView";
import UserView from "./features/user/UserView";
function App() {
  return (
    <>
      <Wrapper>
        <h1>Get one icecream free on Ordering Cake</h1>
        <CakeView />
        <IcecreamView />
      </Wrapper>
      <UserView />
    </>
  );
}

export default App;
