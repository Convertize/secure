import "./App.css";
import React, { useState, useEffect } from "react";
import Certificate from "./components/Certificate";
import Content from "./components/Content";
import Footer from "./components/Footer";
import TopBar from "./components/TopBar";
import api from "./api";
import { Route, Switch, BrowserRouter as Router } from "react-router-dom";
import CertifiedPage from "./components/CertifiedPage";

function App() {
  const [certified, setCertified] = useState(false);

  const [store, setStore] = useState('');

  const checkCertification = async () => {
    try {
      let res = await api.get(store);
      const data = res.data;
      setStore(data);
      // let storeName = window.location.href.slice(22);
      // localStorage.setItem('store', storeName);
      // setStore(storeName)
    } catch (error) {
      console.log(error.response); 
    }
  };

  

  console.log(store);

  // console.log(window.location.href.slice(10));
  // console.log('https://store.convertize.com.br/api/v1/public/license/accounts/hosts/francoi'.slice(69))
  // console.log('https://store.convertize.com.br/api/v1/public/license/accounts/hosts/oboto'.slice(69))

  useEffect(() => {
    checkCertification();
  }, []);

  return (
    <>
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={CertifiedPage} />
          </Switch>
        </Router>
      </div>
    </>
  );
}

export default App;
