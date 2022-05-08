import "./styles.css";
import { HEAD } from "./Components/Head";
import { ROUTING } from "./Routing";

export default function App() {
  return (
    <div className="app_wrapper">
      <HEAD />
      <ROUTING />
    </div>
  );
}
