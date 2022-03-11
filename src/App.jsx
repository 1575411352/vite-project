import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";

export default function App() {
	return (
		<BrowserRouter>
      
			<ul>
				<li>
					<Link to="/">去主页</Link>
				</li>
				<li>
					<Link to="/about">去关于</Link>
				</li>
			</ul>

			<Routes>
				<Route path="/" element={<Home />}></Route>
				<Route path="/about" element={<About />}></Route>
			</Routes>

		</BrowserRouter>
	);
}
