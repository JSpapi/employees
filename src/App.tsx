import { createTheme, ThemeProvider } from "@mui/material";
import { Container } from "@mui/system";
import { Route, Routes } from "react-router-dom";
import { Header } from "./components/header";
import { AuthLoading } from "./features/auth/AuthLoading";
import { Home } from "./pages/home";
import { routes } from "./routes";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

function App() {
  const setRoutes = () =>
    routes.map(({ id, path, element }) => (
      <Route key={id} path={path} element={element} />
    ));

  return (
    <ThemeProvider theme={darkTheme}>
      <AuthLoading>
        <div>
          <Container maxWidth="lg">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
              {setRoutes()}
            </Routes>
          </Container>
        </div>
      </AuthLoading>
    </ThemeProvider>
  );
}

export default App;
