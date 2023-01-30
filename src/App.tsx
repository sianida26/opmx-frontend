import { Routes, Route, Navigate } from "react-router-dom";
import Session1 from "./layouts/Session1";
import LandingPage from "./pages/LandingPage";
import S1P1 from "./pages/session1/S1P1";
import S1P2 from "./pages/session1/S1P2";
import S1P3 from "./pages/session1/S1P3";
import S1P4 from "./pages/session1/S1P4";
import S1P5 from "./pages/session1/S1P5";
import S1P6 from "./pages/session1/S1P6";

function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/session1" element={<Session1 />}>
				<Route index element={<Navigate to="./page1" />} />
				<Route path="page1" element={<S1P1 />} />
				<Route path="page2" element={<S1P2 />} />
				<Route path="page3" element={<S1P3 />} />
				<Route path="page4" element={<S1P4 />} />
				<Route path="page5" element={<S1P5 />} />
				<Route path="page6" element={<S1P6 />} />
			</Route>
		</Routes>
	);
}

export default App;
