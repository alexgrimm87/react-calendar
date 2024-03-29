import {FC, useState} from 'react';
import {Button, Form, Input} from "antd";
import {rules} from "../utils/rules";
import {useTypedSelector} from "../hooks/useTypedSelector";
//import {useDispatch} from "react-redux";
//import {AuthActionCreators} from "../store/reducers/auth/action-creators";
//import {AppDispatch} from "../store";
import {useActions} from "../hooks/useActions";

const LoginForm: FC = () => {
  const {error, isLoading} = useTypedSelector(state => state.auth);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  //const dispatch = useDispatch<AppDispatch>();
  const {login} = useActions();

  const submit = () => {
    //dispatch(AuthActionCreators.login(username, password));
    login(username, password);
  };

  return (
    <Form onFinish={submit}>
      {error && <div style={{color: 'red'}}>{error}</div>}
      <Form.Item
        label="Username"
        name="username"
        rules={[rules.required("Please input your username!")]}
      >
        <Input
          value={username}
          onChange={e => setUsername(e.target.value)}
        />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[rules.required("Please input your password!")]}
      >
        <Input
          value={password}
          onChange={e => setPassword(e.target.value)}
          type={"password"}
        />
      </Form.Item>
      <Form.Item>
        <Button type="primary" htmlType="submit" loading={isLoading}>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};

export default LoginForm;
