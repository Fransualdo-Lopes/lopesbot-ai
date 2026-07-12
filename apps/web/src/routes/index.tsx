import {
 BrowserRouter,
 Routes,
 Route
} from "react-router-dom";


import Login from "../pages/Login";
import Dashboard from "../pages/Dashboard";
import DashboardLayout from "../layouts/DashboardLayout";


export default function AppRoutes(){


return (

<BrowserRouter>

<Routes>


<Route 
path="/" 
element={<Login/>}
/>


<Route
path="/dashboard"
element={

<DashboardLayout>

<Dashboard/>

</DashboardLayout>

}
/>


</Routes>

</BrowserRouter>

)

}