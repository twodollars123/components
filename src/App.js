import "./App.scss";
import Button from "./components/Button/Button";

function App() {
  return (
    <div className="App">
      <Button primary rightIcon={<i className="fa fa-address-book" />}>
        abc
      </Button>
      <Button text>a</Button>
    </div>
  );
}

export default App;
