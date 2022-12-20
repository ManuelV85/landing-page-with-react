import React from "react";
import Navbar from "./Navbar.jsx";
import Jumbotron from "./Jumbotron.jsx";
import Cards from "./Cards.jsx";
import Footer from "./Footer.jsx";


//create your first component
const Home = () => {
	return (
		<>
			<Navbar />
			<Jumbotron />
			<Cards />
			<Footer />
		</>
	);
};

export default Home;