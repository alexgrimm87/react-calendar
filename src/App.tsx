import {FC, useEffect} from 'react';
import {Layout} from "antd";
import {IUser} from "./models/IUser";
import {useActions} from "./hooks/useActions";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import './App.css';

const App:FC = () => {
  const {setUser, setIsAuth} = useActions();

  useEffect(() => {
    //Simulation, if we were working with a real server, then here we would send some token for checking
    //and depending on it, we would set the necessary values in the state.
    if(localStorage.getItem('auth')) {
      setUser({username: localStorage.getItem('username' || '')} as IUser);
      setIsAuth(true);
    }
  }, []);

  return (
    <Layout>
      <Navbar />
      <Layout.Content>
        <AppRouter />
      </Layout.Content>
    </Layout>
  );
}

export default App;
