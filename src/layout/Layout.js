import Navbar from './Navbar';
import "./Layout.css"

const Layout = (props) => {
  return (
    <>
      <Navbar />
        <div className="pg-container">
          {props.children}
        </div>
    </>
  );
}

export default Layout;