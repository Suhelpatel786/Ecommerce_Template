import {
  Box,
  Button,
  Container,
  ThemeProvider,
  Typography,
} from "@mui/material";
import { useEffect } from "react";
import theme from "./styles/theme";
import Appbar from "./components/appbar";
import Banner from "./components/banner";
import Promotions from "./components/pramotions";
import Products from "./components/products";
import Footer from "./components/footer/Index";
import AppDrawer from "./components/drawer";
import { UiProvider } from "./context/ui";
import SearchBox from "./components/search";

function App() {
  //i can change the title of any web page
  useEffect(() => {
    document.title = "Ecommerce - Home Page";
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ backgroundColor: "#fff" }}>
        <UiProvider>
          <Appbar />
          <Banner />
          <Promotions />
          <Box display={"flex"} justifyContent={"center"} sx={{ p: 4 }}>
            <Typography variant="h4">Our Products</Typography>
          </Box>
          <Products />
          <Footer />
          <AppDrawer />
          <SearchBox />
        </UiProvider>
      </Container>
    </ThemeProvider>
  );
}

export default App;
