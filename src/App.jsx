import "./App.css";
import Container from "@mui/material/Container";
import { BrowserRouter } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";


function App() {
  return (
    <Container>
      <BrowserRouter>
      <AppRoutes />
      </BrowserRouter>
    </Container>
  );
}

export default App;
