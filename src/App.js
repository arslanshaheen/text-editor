//import About from "./component/About";
import Navbar from "./component/Navbar";
import TextForm from "./component/TextForm";
//import Calculator from "./component/Calculator";
import drawer from "./component/Drawer";
function App() {
  return (
    <>
      <Navbar title="TextUtils" aboutText="About TextUtils" />
      {/* <Navbar /> */}
      {/* //<Calculator /> */}
      <div className="container">
        <TextForm heading="Enter the text now" />
      </div>
      {/* <About /> */}
      {/* <Drawer /> */}
    </>
  );
}

export default App;
