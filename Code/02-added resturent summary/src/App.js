import React, { Fragment } from "react";
import Header from "./component/Layout/Header";
import Cart from "./component/Cart/CartIcon";
import AvailableMeals from "./component/Meals/AvailableMeals";

import MealsSummary from "./component/Meals/MealsSummary";


const App = () => {
  return (
    <Fragment>
      <Cart />
      <Header />
      <MealsSummary/>
      <AvailableMeals/>
    </Fragment>
  );
};
export default App;
