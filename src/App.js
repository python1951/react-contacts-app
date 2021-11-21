import "./App.css";
import Contacts from "./components/Contacts";
import Header from "./components/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import Provider from "./Context"

import AddContact from "./components/AddContact";

function App() {
  return (
    <Provider>
      <div className='App'>
      <Header branding='Contact Manager' />
      <div className='container'>
        <AddContact/>
        <Contacts  />
        
      </div>
    </div>
    </Provider>
    
  );
}

export default App;
