import { lazy, Suspense } from "react";
// import UseRef from "./hooks/UseRef";
const UseRef = lazy(() => import("./hooks/UseRef"));

function App() {
  return (
    <Suspense fallback={<div>please wait for few second</div>}>
      <div className="App">
        <UseRef />
      </div>
    </Suspense>
  );
}

export default App;
