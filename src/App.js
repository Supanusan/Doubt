import { Provider } from "react-redux";
import Task from "./Task";
import store from "./Redux/Store/ReduxStore"


function App() {
  return (
    <Provider store={store}>
      <Task />
    </Provider>

  );
}

export default App;
