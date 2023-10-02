import { useContext } from "react";
import { FoodContext } from "./PIzzaContext";

export function useFoods() {
  const context = useContext(FoodContext);
  if (context === undefined)
    throw new Error("FoodContext was used outside of Provider");
  return context;
}
