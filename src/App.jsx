import { Link, BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import About1 from "./pages/About1";
import About2 from "./pages/About2";

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
				<Route path="/about" element={<About />}>
					<Route path="/about/about1" element={<About1 />}></Route>
					<Route path="/about/about2" element={<About2 />}></Route>
				</Route>
			</Routes>

		</BrowserRouter>
	);
}
