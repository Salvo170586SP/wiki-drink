import { useRoutes } from "react-router-dom";
import { routes } from "./routes";

const MainApp = () => {
    return useRoutes(routes);
}
 
export default MainApp;