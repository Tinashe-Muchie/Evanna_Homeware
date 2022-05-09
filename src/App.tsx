import "./styles.css";
import { HEAD, FOOTER } from "./Components/index";
import { ROUTING } from "./Routing";

export default function App() {
  return (
    <div className="app_wrapper">
      <HEAD />
      <ROUTING />
      <footer className="footer">
        <FOOTER />
      </footer>
    </div>
  );
}
