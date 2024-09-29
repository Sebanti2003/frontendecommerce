import { Route, Routes } from "react-router-dom";
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

function App() {
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
          <Route path="/login" element={<Login />} />
          <Route path="/orderdetails" element={<OrderDeatails />} />
          <Route path="/product/:id" element={<EachProduct />} />
          <Route>
            {/* Admin Routes */}
            <Route path="/admin/dashboard" element={<Dashboard />} />
            <Route path="/admin/customers" element={<Customers />} />
            <Route path="/admin/transactions" element={<Transactions />} />
            <Route path="/admin/product" element={<Products />} />

            {/* charts */}
            <Route path="/admin/chart/line" element={<Linecharts />} />
            <Route path="/admin/chart/bar" element={<Barcharts />} />
            <Route path="/admin/chart/pie" element={<Piecharts />} />

            {/* admin small features */}
            <Route path="/admin/app/stopwatch" element={<Stopwatch />} />
            <Route path="/admin/app/coupon" element={<Coupon />} />
            <Route path="/admin/app/toss" element={<Toss />} />

            {/* management */}
            <Route path="/admin/product/new" element={<Newproduct />} />
            <Route
              path="/admin/transaction/:id"
              element={<Transactionmanagement />}
            />
            <Route path="/admin/product/:id" element={<Productmanagement />} />
          </Route>
        </Routes>
      </Suspense>
      <Footer />
    </>
  );
}

export default App;
