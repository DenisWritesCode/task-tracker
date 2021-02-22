import Form from "./components/Form";
import Header from "./components/Header";
import Tasks from "./components/Tasks";

function App() {
  return (
    <div className="App">
    <div className="container">
      <Header />
      <Tasks />
      <Form />
    </div>
    </div>
  );
}

export default App;
