import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TitleScreen from "./pages/titleScreen"; // Assurez-vous que le chemin est correct

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <TitleScreen />,
            },
        ],
    },
]);

export default router;
