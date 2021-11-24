import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./Context";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import About from "./components/About";
import AddContact from "./components/AddContact";
import { Fragment } from "react";
import Error from "./components/Error";

function App() {
  return (
    <Provider>
      <Router>
        <Fragment>
          <div className='App'>
            <Header branding='Contact Manager' />

            <Routes>
              <Route exact path='/' element={<Contacts />} />

              <Route exact path='/about' element={<About />} />

              <Route exact path='/contacts/add' element={<AddContact />} />
              <Route element={<Error />} />
            </Routes>
          </div>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
