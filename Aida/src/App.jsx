import Footer from "./UI/Footer";
import routes from "./Routes/index";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AuthenticationProvider } from "./Authentication/AuthenticationContext";
function App() {
  console.log(routes[0].component);
  return (
    <AuthenticationProvider>
      <div>
        <BrowserRouter>
          <Routes>
            {routes.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
        </BrowserRouter>
        <Footer />
      </div>
    </AuthenticationProvider>
  );
}

export default App;
