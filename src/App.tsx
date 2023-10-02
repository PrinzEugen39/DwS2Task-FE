import { lazy, Suspense } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import Homepage from "./pages/Homepage";
import PizzaDetails from "./pages/Food/2-FoodsDetails";
import SpinnerFullPage from "./components/SpinnerFullPage"

const PizzaLayout = lazy(() => import("./pages/FoodsPage"));

export default function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<SpinnerFullPage />}>
        <Routes>
          <Route index element={<Homepage />} />
          <Route path="/pizza" element={<PizzaLayout />}>
            <Route path="/pizza/details/:id" element={<PizzaDetails isOpen={false} onClose={function (): void {
              throw new Error("Function not implemented.");
            } } />} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
