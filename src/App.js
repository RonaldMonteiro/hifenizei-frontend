import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Answer from "./routes/Answer";
import About from "./routes/About";
import Help from "./routes/Help";
import Home from "./routes/Home";

function App() {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route exact path="/" element={<Home />} />
					<Route  path="answer" element={<Answer />} />
					<Route  path="about"  element={<About />} />
					<Route  path="help"   element={<Help />} />
				</Routes>
			</BrowserRouter>
  		</div>
	);
}

export default App;
