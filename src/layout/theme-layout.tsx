import React, { ReactNode } from "react";
import { createTheme, CssBaseline, ThemeProvider } from "@mui/material";
import { Link } from "react-router-dom";
import logoIMG from "../assets/poko.png";
import { styled } from "@mui/system";

interface Props {
  children?: ReactNode;
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

const Img = styled("img")({
  marginLeft: "auto",
  marginRight: "auto",
  display: "block",
  width: 300,
  maxWidth: "100%",
});
const LayoutWrapper = styled("div")(({ theme }) => ({
  margin: 24,
  width: "auto",
  [theme.breakpoints.up("lg")]: {
    marginLeft: "auto",
    marginRight: "auto",
    width: theme.breakpoints.values.lg,
  },
}));

const Layout = ({ children }: Props) => {
  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <LayoutWrapper>
        <Link to="/">
          <Img src={logoIMG} />
        </Link>
      </LayoutWrapper>

      {children}
    </ThemeProvider>
  );
};
export default Layout;
