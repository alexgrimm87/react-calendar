import {FC} from 'react';
import {Layout} from "antd";
import Navbar from "./components/Navbar";
import AppRouter from "./components/AppRouter";
import './App.css';

const App:FC = () => {
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
