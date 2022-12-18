import { lazy, Suspense } from "react";
import UseEffect from "./hooks/UseEffect/UseEffect";
const UseRef = lazy(() => import("./hooks/UseMemo/UseMemo"));

// const ThemeContext = createContext(ThemeContext);
function App() {
  return (
    <Suspense fallback={<div>please wait for few second</div>}>
      <>
        <UseRef />
      </>
    </Suspense>
  );
}

export default App;
