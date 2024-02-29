import {FC} from 'react';
import {useNavigate} from "react-router-dom";
import {Button, Layout} from "antd";
import {RouteNames} from "../router";
import {useTypedSelector} from "../hooks/useTypedSelector";
//import {AuthActionCreators} from "../store/reducers/auth/action-creators";
//import {useDispatch} from "react-redux";
//import {AppDispatch} from "../store";
import {useActions} from "../hooks/useActions";

const Navbar: FC = () => {
  const navigate = useNavigate();
  const {isAuth, user} = useTypedSelector(state => state.auth);
  //const dispatch = useDispatch<AppDispatch>();
  const {logout} = useActions();

  return (
    <Layout.Header>
      {isAuth ? (
        <div style={{display: 'flex', alignItems: 'center'}}>
          <div style={{color: 'white', marginRight: 10}}>{user.username}</div>
          {/*<Button onClick={() => dispatch(AuthActionCreators.logout())}>Logout</Button>*/}
          <Button onClick={logout}>Logout</Button>
        </div>
      ) : (
        <Button onClick={() => navigate(RouteNames.LOGIN)}>Login</Button>
      )}
    </Layout.Header>
  );
};

export default Navbar;
