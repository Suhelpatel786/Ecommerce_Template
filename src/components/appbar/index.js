import { useMediaQuery, useTheme } from "@mui/material";
import AppbarMobile from "./appbarMobile";
import AppbarDesktop from "./appbarDesktop";

const Appbar = () => {
  const theme = useTheme();
  const mathces = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <>
      {mathces ? (
        <AppbarMobile matches={mathces} />
      ) : (
        <AppbarDesktop matches={mathces} />
      )}
    </>
  );
};
export default Appbar;
