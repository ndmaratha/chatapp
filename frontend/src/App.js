import { Outlet, createBrowserRouter } from "react-router-dom";
import LoginPage from "./Component/Authentication/LoginPage";
import SignUpPage from "./Component/Authentication/SignUpPage";
import HomePage from "./pages/HomePage";
import "./App.css";
import ChatPage from "./pages/ChatPage";
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
				path: "/",
				element: <HomePage />,
			},

			{
				path: "/chats",
				element: <ChatPage />,
			},
		],
	},
]);
export default App;
