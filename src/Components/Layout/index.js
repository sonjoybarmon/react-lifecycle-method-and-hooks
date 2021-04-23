import NavMenu from "./Navbar";

const index = ({ children }) => {
  return (
    <div>
      <NavMenu />
      {children}
    </div>
  );
};

export default index;
