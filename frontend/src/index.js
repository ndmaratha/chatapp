import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App, { appRouter } from "./App";
import { RouterProvider } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
	<React.StrictMode>
		<ChakraProvider>
			<RouterProvider router={appRouter}>
				<App />
			</RouterProvider>
		</ChakraProvider>
	</React.StrictMode>
);
