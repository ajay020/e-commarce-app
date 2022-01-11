import { Provider } from "react-redux";
import store from "../../redux/store";
import { Navabr } from "../../components";

const Layout = ({ children }) => {
  return (
    <Provider store={store}>
      <Navabr />
      <div>{children}</div>
    </Provider>
  );
};

export default Layout;
