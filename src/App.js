import { Container } from "react-bootstrap";


import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import CardContainer from "./components/CardContainer";

function App() {
  return (
    <div className="App">
      <Container className="text-center">
        <Header/>
        <CardContainer/>

      </Container>
    </div>
  );
}

export default App;