import React from "react";
import { ListItem, ListItemText, Button } from "@mui/material";
import { useTheme } from "@mui/material/styles";

interface BookItemProps {
  title: string;
  author: string;
  onAction: () => void;
  actionLabel: string;
  actionColor: string;
}

const BookItem: React.FC<BookItemProps> = ({
  title,
  author,
  onAction,
  actionLabel,
  actionColor,
}) => {
  const theme = useTheme();

  return (
    <ListItem
      secondaryAction={
        <Button
          variant="contained"
          onClick={onAction}
          sx={{ backgroundColor: actionColor }}
        >
          {actionLabel}
        </Button>
      }
    >
      <ListItemText
        primary={title}
        primaryTypographyProps={{
          fontWeight: "bold",
          color: theme.palette.text.primary,
        }}
        secondary={author}
        secondaryTypographyProps={{
          fontStyle: "italic",
          color: theme.palette.text.secondary,
        }}
      />
    </ListItem>
  );
};

export default BookItem;
