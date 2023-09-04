import CartPage from "./CartPage";
import Product from "./Product";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Routes,
} from "react-router-dom";

export default function App() {
  return (
    <div className="bg-slate-500 min-h-screen">
    
    
<Routes>



<Route path="/" element={<Product />}/>
<Route path="/cart" element={<CartPage />}/>

</Routes>
    
    </div>
  )
}