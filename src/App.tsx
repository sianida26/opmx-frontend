import { Routes, Route, Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import session1 from "./data/session1";
import Session1 from "./layouts/Session1";
import LandingPage from "./pages/LandingPage";
import S1P1 from "./pages/session1/S1P1";
import S1P2 from "./pages/session1/S1P2";
import S1P3 from "./pages/session1/S1P3";
import S1P4 from "./pages/session1/S1P4";
import S1P5 from "./pages/session1/S1P5";
import S1P6 from "./pages/session1/S1P6";
import Session1Finish from "./pages/session1/Session1Finish";

function App() {

	const router = createBrowserRouter([
		//Landing page route
		{
			path: "/",
			element: <LandingPage />,
		},

		//Session 1 routes
		{
			path: "/session1",
			element: <Session1 />,
			children: [
				{
					index: true,
					element: <Navigate to="./page1" replace />,
				},
				...session1.map(x => ({
					path: `page${x.page}`,
					element: x.element,
				})),
			]
		},
		{
			path: "/session1/finish",
			element: <Session1Finish />,
		}
	], {
		basename: import.meta.env.BASE_URL
	})
	
	return (
		<RouterProvider router={ router } />
	);
}

export default App;
