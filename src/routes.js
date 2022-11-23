import ChiSiamo from "./Pages/ChiSiamo";
import HomePage from "./Pages/HomePage";
import Contattaci from "./Pages/Contattaci";
import DetailCocktail from "./Pages/DetailCocktail";



export const routes = [
    {
        path: '/',
        element: <HomePage />,
    },
    {
        path: '/cocktail/:id',
        element: <DetailCocktail/>
    },
    {
        path: '/chisiamo',
        element: <ChiSiamo />
    },
    {
        path: '/contattaci',
        element: <Contattaci />
    }
];


