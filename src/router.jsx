import { createBrowserRouter } from "react-router-dom";
import App from "./App";
import TitleScreen from "./pages/titleScreen/titleScreen"; // Assurez-vous que le chemin est correct
import Presentation from "./pages/presentation/presentation";
const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <TitleScreen />,
            },
            {
                path: "/ougabouga",
                element: <Presentation />,
            },
        ],
    },
]);

export default router;
