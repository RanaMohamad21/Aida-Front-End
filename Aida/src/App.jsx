import Footer from "./UI/Footer";
import routes from "./Routes/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthenticationProvider } from "./Contexts/AuthenticationContext";
import { VendorSignUpProvider } from "./Contexts/VendorSignUpProvider";
import ShoppingCartProvider from "./Contexts/ShoppingCartProvider";
import CustomerProfilePage from "./Customer/CustomerProfilePage";
import AccountInfo from "./Customer/AccountInfo";
import CustomerOrdersHistory from "./Customer/CustomerOrdersHistory";
import PendingOrders from "./Customer/PendingOrders";
import CustomerSubscriptions from "./Customer/CustomerSubscriptions";
import SettingsPage from "./Customer/SettingsPage";
import { UserProvider } from "./Customer/UserContext";

function App() {
  return (
    <UserProvider>
      <VendorSignUpProvider>
        <ShoppingCartProvider>
          <AuthenticationProvider>
            <div className="grid grid-rows-[1fr,auto]">
              <BrowserRouter>
                <Routes>
                  {routes.map((route, index) => (
                    <Route
                      key={index}
                      path={route.path}
                      element={route.element}
                    />
                  ))}

                  <Route
                    path="CustomerProfile"
                    element={<CustomerProfilePage />}
                  >
                    <Route index element={<AccountInfo />} />
                    <Route path="account" element={<AccountInfo />} />
                    <Route
                      path="ordersHistory"
                      element={<CustomerOrdersHistory />}
                    />
                    <Route path="pendingOrders" element={<PendingOrders />} />
                    <Route
                      path="subscription"
                      element={<CustomerSubscriptions />}
                    />
                    <Route path="settings" element={<SettingsPage />} />
                  </Route>
                </Routes>
              </BrowserRouter>
              <Footer />
            </div>
          </AuthenticationProvider>
        </ShoppingCartProvider>
      </VendorSignUpProvider>
    </UserProvider>
  );
}

export default App;

// import Footer from "./UI/Footer";
// import routes from "./Routes/index";
// import { BrowserRouter, Route, Routes } from "react-router-dom";
// import { AuthenticationProvider } from "./Authentication/AuthenticationContext";
// import VendorSignUpProvider from "./Contexts/VendorSignUpProvider";
// function App() {
//   console.log(routes[0].component);
//   return (
//     <VendorSignUpProvider>
//       <AuthenticationProvider>
//         <div>
//           <BrowserRouter>
//             <Routes>
//               {routes.map((route, index) => (
//                 <Route key={index} path={route.path} element={route.element} />
//               ))}
//             </Routes>
//           </BrowserRouter>
//           <Footer />
//         </div>
//       </AuthenticationProvider>
//     </VendorSignUpProvider>
//   );
// }

// export default App;
