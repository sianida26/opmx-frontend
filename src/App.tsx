import { Routes, Route, Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import session1 from "./data/session1";
import session2 from "./data/session2";
import Session1 from "./layouts/Session1";
import Session2 from "./layouts/Session2";
import LandingPage from "./pages/LandingPage";
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
		},

		//Session 2 routes
		{
			path: "/session2",
			element: <Session2 />,
			children: [
				{
					index: true,
					element: <Navigate to="./page1" replace />,
				},
				...session2.map(x => ({
					path: `page${x.page}`,
					element: x.element,
				})),
			]
		},
	], {
		basename: import.meta.env.BASE_URL
	})
	
	return (
		<RouterProvider router={ router } />
	);
}

export default App;
