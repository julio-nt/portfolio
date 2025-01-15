import Experience from "./components/Experience/Experience";
import Header from "./components/Header/Header";
import Section from "./components/Section/Section";
import { COLORS } from "./layout/COLORS";
import Intro from "./sections/Intro";

function App() {
  return (
    <>
      <Header />
      {/* <div className="first-section" /> */}
      <Section>
        <Intro />
      </Section>
      <Section backgroundColor={COLORS.backgrounLighter}>
        <Experience />
      </Section>
    </>
  );
}

export default App;
