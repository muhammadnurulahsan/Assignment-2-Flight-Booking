import { Provider } from "react-redux";
import "./style.css";
import Home from "./components/Home";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <Home />
    </Provider>
  );
}

export default App;