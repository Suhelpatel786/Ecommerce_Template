import { Box, IconButton, Slide } from "@mui/material";
import { useUiContext } from "../../context/ui";
import { SearchBoxContainer, SearchFiled } from "../../styles/search";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { lighten } from "polished";
import { Colors } from "../../styles/theme";

export default function SearchBox() {
  const { showSearchBox, setShowSearchBox } = useUiContext();
  const handleSearchBox = () => {
    setShowSearchBox(false);
  };
  return (
    <>
      <Slide direction="down" in={showSearchBox} timeout={500}>
        <SearchBoxContainer>
          <SearchFiled
            color={"secondary"}
            variant="standard"
            fullWidth
            placeholder="Search..."
          />
          <IconButton>
            <SearchIcon
              sx={{
                fontSize: { xs: "2rem", md: "3rem" },
              }}
              color="secondary"
            />
          </IconButton>
          <IconButton
            onClick={handleSearchBox}
            sx={{ position: "absolute", top: 5, right: 5 }}
          >
            <CloseIcon
              sx={{
                fontSize: { xs: "3rem", md: "4rem" },
                color: lighten(0.9, Colors.secondary),
              }}
            />
          </IconButton>
        </SearchBoxContainer>
      </Slide>
    </>
  );
}
