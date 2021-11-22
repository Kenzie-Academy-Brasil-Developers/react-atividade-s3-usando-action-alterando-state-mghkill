import "./App.css";
import Form from "./components/Form";
import Student from "./components/Student";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Student />
        <Form />
      </header>
    </div>
  );
}

export default App;
