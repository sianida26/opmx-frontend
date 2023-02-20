import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter, BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistStore } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import { store } from "./redux/store";
import "./styles/tailwind.css";
import "./styles/app.css";
import "./styles/fonts.css";
import "bootstrap-icons/font/bootstrap-icons.css";

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
	<React.StrictMode>
		<Provider store={store}>
			<PersistGate
				loading={
					<div>Loading... (This page will be designed soon)</div>
				}
				persistor={persistor}
			>
				<App />
			</PersistGate>
		</Provider>
	</React.StrictMode>
);
