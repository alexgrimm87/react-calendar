import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Layout} from "antd";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const {isAuth} = useTypedSelector(state => state.auth);

  return (
    <Layout.Header>
      {isAuth ? (
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{color: 'white', marginRight: 10}}>User Name</div>
          <Button onClick={() => console.log('exit')}>Logout</Button>
        </div>
      ) : (
        <Button onClick={() => navigate(RouteNames.LOGIN)}>Login</Button>
      )}
    </Layout.Header>
  );
};

export default Navbar;
