import Footer from "./UI/Footer";
import routes from "./Routes/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthenticationProvider } from "./Authentication/AuthenticationContext";
import { VendorSignUpProvider } from "./Contexts/VendorSignUpProvider";
import ShoppingCartProvider from "./Contexts/ShoppingCartProvider";
function App() {
  console.log(routes[0].component);
  return (
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
              </Routes>
            </BrowserRouter>
            <Footer />
          </div>
        </AuthenticationProvider>
      </ShoppingCartProvider>
    </VendorSignUpProvider>
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
