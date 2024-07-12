import { Container } from "react-bootstrap";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Container className="text-center">
        <Header/>

      </Container>
    </div>
  );
}

export default App;