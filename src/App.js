import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import ClickMe from "./Components/ClickMe";
import ClickM from "./Components/ClickMeClassComponent/ClickMeClass";
export default function App() {
  return (
    <div className="App">
      <ClickMe />
      <ClickM />
    </div>
  );
}
