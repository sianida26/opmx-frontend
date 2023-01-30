import { Routes, Route, Navigate, RouterProvider, createBrowserRouter } from "react-router-dom";
import Session1 from "./layouts/Session1";
import LandingPage from "./pages/LandingPage";
import S1P1 from "./pages/session1/S1P1";
import S1P2 from "./pages/session1/S1P2";
import S1P3 from "./pages/session1/S1P3";
import S1P4 from "./pages/session1/S1P4";
import S1P5 from "./pages/session1/S1P5";
import S1P6 from "./pages/session1/S1P6";

function App() {

	const router = createBrowserRouter([
		{
			path: "/",
			element: <LandingPage />,
		},
		{
			path: "/session1",
			element: <Session1 />,
			children: [
				{
					index: true,
					element: <Navigate to="./page1" />,
				},
				{
					path: "page1",
					element: <S1P1 />,
				},
				{
					path: "page2",
					element: <S1P2 />,
				},
				{
					path: "page3",
					element: <S1P3 />,
				},
				{
					path: "page4",
					element: <S1P4 />,
				},
				{
					path: "page5",
					element: <S1P5 />,
				},
				{
					path: "page6",
					element: <S1P6 />,
				},
			]
		}
	])
	
	return (
		<RouterProvider router={ router } />
	);
}

export default App;
