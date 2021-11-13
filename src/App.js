import "./styles.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import GetRandomColor from "./Components/GetRandomColor";
// import ClickMe from "./Components/ClickMe";
// import ClickM from "./Components/ClickMeClassComponent/ClickMeClass";

export default function App() {
  return (
    <div className="App">
      <GetRandomColor />
      {/* <ClickMe />
      <ClickM /> */}
    </div>
  );
}
