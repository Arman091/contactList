import ContactForm from "./components/contactForm";
import { useState } from "react";
import Clients from "./components/Clients";
import Header from "./components/Header";
import "./App.css"
function App() {
  const [UserData, setUserData] = useState([
   
  ]);

  const editHandler = (email, updatedData) => {
  };

  const deleteHandler = (email) => {
  
    setUserData((prevData) => prevData.filter((user) => user.useremail !== email));
  };
  function UserDataHandler(data) {
     setUserData([...UserData, data]);

  }
  return (
    <div className="App" >
     <Header/>
      <div className="main">
        <Clients deleteHandler={deleteHandler} editHandler={editHandler}  UserData={UserData} />
        <ContactForm UserDataHandler={UserDataHandler} />
      </div>
    </div>
  );
}

export default App;
