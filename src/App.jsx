import "./App.css";
import Aboutme from "./components/Aboutme";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Intro from "./components/Intro";
import Portfolio from "./components/Portfolio";
import TimeLine from "./components/TimeLine";

function App() {
	return (
		<>
			<Intro />
			<Portfolio />
			<TimeLine />
			<Aboutme />
			<Contact />
			<Footer />
		</>
	);
}

export default App;
