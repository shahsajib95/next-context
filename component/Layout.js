import Notify from "./Notify";

function Layout({ children }) {
  return (
    <div>
      <Notify />
      {children}
    </div>
  );
}

export default Layout;
