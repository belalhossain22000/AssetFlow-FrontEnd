import AddShoes from "../pages/AddShoes";
import Dashboard from "../pages/Dashboard";
import Shoes from "../pages/Shoes";

export const routePaths = [
    {
      name: 'Dashboard',
      path: 'dashboard',
      element: <Dashboard />,
    },
    {
      name: 'Shoes',
      path: 'shoes',
      element: <Shoes />,
    },
    {
      name: 'Add Shoes',
      path: 'add-shoes',
      element: <AddShoes />,
    },
   
  ];
  