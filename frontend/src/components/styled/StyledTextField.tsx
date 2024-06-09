import { TextField } from "@mui/material";
import { styled } from "@mui/system";

const StyledTextField = styled(TextField)({
  backgroundColor: "#cffafa",
  borderRadius: 28, // Fully rounded corners
  border: "1px solid #335c6e",
  "& .MuiOutlinedInput-root": {
    borderRadius: 28, // Fully rounded corners
    "& fieldset": {
      borderRadius: 28, // Fully rounded corners
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: "#335c6e", // Steel Blue
    },
    "&.Mui-focused fieldset": {
      borderColor: "#335c6e", // Steel Blue
      borderWidth: 2,
    },
  },
});

export default StyledTextField;
