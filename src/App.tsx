import Homepage from "./pages/Homepage";
import PizzaDetails from "./pages/PizzaDetails";
import PizzaLayout from "./pages/PizzaLayout";
import { BrowserRouter, Route, Routes } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="/pizza" element={<PizzaLayout />}>
          <Route path="/pizza/details/:id" element={<PizzaDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
