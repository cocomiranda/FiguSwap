import LoginForm from "./components/login/loginform";
import Home from "./components/homepage/home"
import Profile from "./components/profile/account"
import Contacts from "./components/list/contacts"
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
    { path: "/:name", element: <Home /> },
    { path: "/:name/:location", element: <Profile /> },
    { path: "/:figu", element: <Contacts /> },
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