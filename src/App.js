import React, { createContext, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { BasketPage } from "./pages/UserPages/BasketPage";
import { HomePage } from "./pages/HomePage";
import { AllProducts } from "./pages/UserPages/ProductPages/AllProducts";
import { Drinks } from "./pages/UserPages/ProductPages/Drinks";
import { Salads } from "./pages/UserPages/ProductPages/Salads";
import { Soups } from "./pages/UserPages/ProductPages/Soups";
import { UserPage } from "./pages/UserPage";
import { AdminPage } from "./pages/AdminPage";
import { AddPage } from "./pages/AdminPages/AddPage";
import { ApplicationsPage } from "./pages/AdminPages/ApplicationsPage";
import { UsersPage } from "./pages/AdminPages/UsersPage";
import { DeliveredPage } from "./pages/AdminPages/DeliveredPage";
import { DeliveredPage2 } from "./pages/DelivererPages/DeliveredPage2";
import { StatisticsPage } from "./pages/AdminPages/StatisticsPage";
import { DelivererPage } from "./pages/DelivererPage";
import { ApplicationsPage2 } from "./pages/DelivererPages/ApplicationsPage2";
import { ErrorPage } from "./pages/ErrorPage";
import { LoginPage } from "./pages/Login";

const LoginContext = createContext({ isLogin: false, setIsLogin: () => {} });

function App() {
  const [isLogin, setIsLogin] = useState(false);
  console.log(isLogin);
  return (
    <LoginContext.Provider value={{ isLogin, setIsLogin }}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        {isLogin && (
          <>
            <Route path="/user" element={<UserPage />}>
              <Route path="home" element={<AllProducts />} />
              <Route path="salads/*" element={<Salads />} />
              <Route path="soups/*" element={<Soups />} />
              <Route path="drinks/*" element={<Drinks />} />
            </Route>
            <Route path="/basket" element={<BasketPage />} />
            <Route path="/admin" element={<AdminPage />}>
              <Route path="home" element={<ApplicationsPage />} />
              <Route path="delivered" element={<DeliveredPage />} />
              <Route path="statistics" element={<StatisticsPage />} />
              <Route path="add" element={<AddPage />} />
              <Route path="users" element={<UsersPage />} />
            </Route>
            <Route path="/deliverer" element={<DelivererPage />}>
              <Route path="home" element={<ApplicationsPage2 />} />
              <Route path="delivered" element={<DeliveredPage2 />} />
            </Route>
          </>
        )}

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </LoginContext.Provider>
  );
}
export { LoginContext };
export default App;
