import { useEffect, useState } from "react";
import "./styles/App.css";
import Form from "./components/Form/Form";
import UpdateForm from "./components/Form/UpdateForm";
import { api } from "./services/api";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { IUserInterface } from "./Interfaces/IUserInterface";
import RetriveUser from "./components/RetriveUsers/RetriveUrsers";



const App = () => {

  const [userInfo, setUserInfo] = useState<IUserInterface[]>([]);
  const getUsers = () => {
    api
      .get("/users", {
        headers: { 
          autorization: ""
        }
      })
      .then((response) => setUserInfo(response.data))
      .catch((e) => console.log(e));
  };

  useEffect(() => {
    getUsers();
  }, []);
  return (
  <div className="forms-container">
    <Form/>
    <div className="retrive">
      {userInfo.map((item) => (
        <div key={item.id} className="form-group">
          <RetriveUser {...item}/>
          </div>
        ))}
    </div>
    <UpdateForm/>
  <ToastContainer/>
  </div>
  );
}

export default App;
