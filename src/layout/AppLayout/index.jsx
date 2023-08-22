/* eslint-disable react/prop-types */
import SideBar from "../SideBar";

const AppLayout = ({ children }) => {
  return (
    <div className="grid grid-cols-[20rem_1fr] h-screen">
      <SideBar />
      <main className="bg-yellow-500">{children}</main>
    </div>
  );
};

export default AppLayout;
