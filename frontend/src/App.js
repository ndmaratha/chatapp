import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Component/Authentication/LoginPage";
import SignUpPage from "./Component/Authentication/SignUpPage";
import Body from "./Component/Body";
import "./App.css";
function App() {
	return (
		<div className="App">
			<Outlet />
		</div>
	);
}
export const appRouter = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		children: [
			{
				path: "/login",
				element: <LoginPage />,
			},
			{
				path: "/",
				element: <Body />,
			},
			{
				path: "/signup",
				element: <SignUpPage />,
			},
		],
	},
]);
export default App;
