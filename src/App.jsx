import { Provider } from "react-redux";
import "./App.css";
import UserData from "./components/userData";
import { store } from "../store";

function App() {
  return (
    <Provider store={store}>
      <div className="flex justify-center items-center min-h-screen">
        <div className="border border-gray-800 xl:h-[800px] xl:w-[1500px] bg-[#1f2937] shadow-xl shadow-slate-700 h-[700px] w-[350px] rounded-md">
          <UserData />
        </div>
      </div>
    </Provider>
  );
}

export default App;
