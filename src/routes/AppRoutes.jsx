import { Routes, Route } from "react-router-dom";
import Container from "@mui/material/Container";

import PublicRoutes from "./PublicRoutes";
import ProtectedRoutes from "./ProtectedRoutes";
import Home_View from "../views/home_view";
import Error404 from "./error404";
import { useUserDataStore } from "../store/Store";
import Install_PWA from "../helpers/install_pwa";

const AppRoutes = () => {
  const { logged } = useUserDataStore((state) => ({
    logged: state.logged,
  }));

  return (
    <Container>
      <Routes>
        <Route element={<ProtectedRoutes logged={logged} />}>
          <Route
            path={"/admin/*"}
            element={
              <>
                <Error404 />
              </>
            }
          />
        </Route>
        <Route
          path={"/"}
          element={
            <PublicRoutes>
              <Home_View />
            </PublicRoutes>
          }
        />
        <Route path={"/*"} element={<Error404 />} />
      </Routes>
    </Container>
  );
};

export default AppRoutes;
