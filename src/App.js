import LoginForm from "./components/login/loginform";
import Home from "./components/homepage/home"
import Profile from "./components/profile/account"
import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import React from "react";


// const App = () => {

//   return (
//     <div className="page">
//       {/* <LoginForm /> */}
//       <Routes>
//         <Route path="/login" element={<LoginForm />} />
//         {/* <Route path="/homepage" element={<Home />} /> */}
//       </Routes>
//     </div>
//   );
// };

// export default App;

const App = () => {
  const routes = useRoutes([
    { path: "/", element: <LoginForm /> },
    { path: "/homepage", element: <Home /> },
    { path: "/profile", element: <Profile /> },
    // ...
  ]);
  return routes;
};

const AppWrapper = () => {
  return (
    <div className="page">
      <Router>
        <App />
      </Router>
    </div>
  );
};

export default AppWrapper;