import { Routes, Route, Navigate } from "react-router-dom";
import Session1 from "./layouts/Session1";
import LandingPage from "./pages/LandingPage";
import S1P1 from "./pages/session1/S1P1";
function App() {
	return (
		<Routes>
			<Route path="/" element={<LandingPage />} />
			<Route path="/session1" element={ <Session1 /> }>
        <Route index element={ <Navigate to="./page1" /> } />
        <Route path="page1" element={ <S1P1 /> } />
      </Route>
		</Routes>
	);
}

export default App;
