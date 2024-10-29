import TodoList from "./views/TodoList";
import Header from "./components/todos/Header";
import "./assets/css/index.css";
import { Provider } from "react-redux";
import store from "./state/store";

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <Header />
        <TodoList />
      </Provider>
    </div>
  );
}

export default App;
