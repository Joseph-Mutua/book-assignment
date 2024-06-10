import React from "react";
import { TextField, TextFieldProps } from "@mui/material";
import { Theme, styled } from "@mui/system";
import { useTheme } from "@mui/material/styles";

const useStyledTextFieldStyles = (theme: Theme) => ({
  backgroundColor: theme.palette.custom?.turquoiseLight,
  borderRadius: 28, // Fully rounded corners
  border: `1px solid ${theme.palette.text.primary}`,
  "& .MuiOutlinedInput-root": {
    borderRadius: 28,
    "& fieldset": {
      borderRadius: 28,
      borderColor: "transparent",
    },
    "&:hover fieldset": {
      borderColor: theme.palette.text.primary,
    },
    "&.Mui-focused fieldset": {
      borderColor: theme.palette.text.primary,
      borderWidth: 2,
    },
  },
});

const ThemedTextField = styled((props: TextFieldProps) => (
  <TextField {...props} />
))(({ theme }) => useStyledTextFieldStyles(theme));

const StyledTextField: React.FC<TextFieldProps> = (props) => {
  const theme = useTheme();
  return <ThemedTextField theme={theme} {...props} />;
};

export default StyledTextField;