import { BrowserRouter, Routes, Route } from "react-router-dom";
import { BaseRoutes } from "./constants/baseRoute";
import PrivateRoute from "./route/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        {BaseRoutes.map(({ path, Layout, component: Component, useAuth }) =>
          Layout && useAuth ? (
            <Route
              key={path}
              path={path}
              element={
                <PrivateRoute>
                  <Layout>
                    <Component />
                  </Layout>
                </PrivateRoute>
              }
            />
          ) : (
            <Route path={path} key={path} element={<Component />} />
          )
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
