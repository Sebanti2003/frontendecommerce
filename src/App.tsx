import { Navigate, Route, Routes } from "react-router-dom";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import Dashboard from "./pages/admin/Dashboard";
import Linecharts from "./pages/admin/Linecharts";
import Toss from "./pages/admin/Toss";
import Customers from "./pages/admin/Customers";
import Transactions from "./pages/admin/Transactions";
import Products from "./pages/admin/Products";
import Barcharts from "./pages/admin/Barcharts";
import Piecharts from "./pages/admin/Piecharts";
import Coupon from "./pages/admin/Coupon";
import Stopwatch from "./pages/admin/Stopwatch";
import Newproduct from "./pages/admin/Newproduct";
import Transactionmanagement from "./pages/admin/Transactionmanagement";
import Productmanagement from "./pages/admin/Productmanagement";
import Header from "./components/Header";
import Footer from "./components/Footer";
import EachProduct from "./pages/EachProduct";
import Shipping from "./pages/Shipping";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import Payment from "./pages/Payment";
import OrderDeatails from "./pages/OrderDeatails";
//lazy import helps to load only the things that has been asked by the client and not everything it will help to increase the speed of the application by increasing its optimality.
const Home = lazy(() => import("./pages/Home"));
const Search = lazy(() => import("./pages/Search"));
const Cart = lazy(() => import("./pages/Cart"));
import { useAppSelector } from "./store/hook";
import PrivateRoute from "./components/ProtectedRoutes";
import { ToastContainer} from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';
function App() {
  const authen=useAppSelector(state=>state.authenticatedornot.auth);
  return (
    <>
      <Header />
      {/* //The loader will be shown when each route is loading. */}
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search" element={<Search />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/payment" element={<Payment />} />
          <Route path="/shipping" element={<Shipping />} />
          <Route path="/login" element={authen?<Navigate to={`/`} replace/>:<Login/>} />
          <Route path="/orderdetails" element={<OrderDeatails />} />
          <Route path="/product/:id" element={<EachProduct />} />
          <Route path="/admin" element={<PrivateRoute/>}>
            {/* Admin Routes */}
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="customers" element={<Customers />} />
            <Route path="transactions" element={<Transactions />} />
            <Route path="product" element={<Products />} />

            {/* charts */}
            <Route path="chart/line" element={<Linecharts />} />
            <Route path="chart/bar" element={<Barcharts />} />
            <Route path="chart/pie" element={<Piecharts />} />

            {/* admin small features */}
            <Route path="app/stopwatch" element={<Stopwatch />} />
            <Route path="app/coupon" element={<Coupon />} />
            <Route path="app/toss" element={<Toss />} />

            {/* management */}
            <Route path="product/new" element={<Newproduct />} />
            <Route
              path="transaction/:id"
              element={<Transactionmanagement />}
            />
            <Route path="product/:id" element={<Productmanagement />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
      <ToastContainer/>
    </>
  );
}

export default App;
