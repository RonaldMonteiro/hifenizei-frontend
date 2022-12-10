import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";

import Answer from "./Answer";
import About from "./About";
import Help from "./Help";
import Home from "./Home";

function Desktop () {
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

export default Desktop;




