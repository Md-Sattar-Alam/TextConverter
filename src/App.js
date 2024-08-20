import "./App.css";
import Form from "./component/Form";
import Hooks from "./component/Hooks";
// Correct import example
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// import { Routes, Route } from "react-router-dom";
import About from "./component/About";
import Navber from "./component/Navber";

// import { Provider } from "react-router";
// import store from "./react-redux/Store";
function App() {
  return (
    <>
      {/* <Provider store={store}> */}
      <Navber />
      <Routes>
        <Route path="about" element={<About />} />
      </Routes>
      <Form heading="Enter the text to blew" />
      <Hooks />
      {/* </Provider> */}
    </>
  );
}

export default App;
