import { Fragment } from 'react';

import MealsSummary from './MealsSummary';
import AvailableMeals from './AvailableMeals';
import MealItem from './MealItem/MealItem';

const Meals = () => {
  return (
    <Fragment>
      <MealsSummary />
      <AvailableMeals />
      {/* <MealItem/> */}
    </Fragment>
  );
};

export default Meals;