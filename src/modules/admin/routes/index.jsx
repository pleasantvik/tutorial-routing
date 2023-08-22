import { Route, Routes } from "react-router-dom";
import { Admin } from "..";
import Bank from "../Bank";
import Dashboard from "../Dashboard";

const AdminRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Admin />}>
        <Route path="bank" element={<Bank />} />
        <Route path="dashboard" element={<Dashboard />} />
        <Route />
      </Route>
    </Routes>
  );
};

export default AdminRoute;
