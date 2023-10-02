import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PizzaDetails from "./pages/PizzaDetails";
import { Spinner } from "@chakra-ui/react";
// import PizzaLayout from "./pages/PizzaLayout";

const PizzaLayout = lazy(() => import("./pages/PizzaLayout"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Spinner />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/pizza" element={<PizzaLayout />}>
            <Route path="/pizza/details/:id" element={<PizzaDetails />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
