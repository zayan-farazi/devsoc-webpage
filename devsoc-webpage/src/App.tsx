import "./App.css";
import { RealityProvider } from "./SwapContext";
import { LandingPage } from "./components/landing-page";

export default function App() {
  // made app page more condensed
  return (
    <RealityProvider>
      <LandingPage></LandingPage>
    </RealityProvider>
  );
}
