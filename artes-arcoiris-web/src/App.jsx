import { BrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";

const HomePage = lazy(() => import("./features/home/pages/HomePage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<div className="p-10">Cargando...</div>}>
        <HomePage />
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
