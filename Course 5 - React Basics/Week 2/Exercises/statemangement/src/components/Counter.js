import { useMealsListContext } from "../providers/MealsProvider";
import MealsList from "./MealsList";

const Counter = () =>{
    return(
        <div>
            <h3>Number of meals today: {MealsList.length}</h3>
        </div>
    );
}

export default Counter;