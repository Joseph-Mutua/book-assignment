// import React from "react";
// import {
//   Card,
//   CardContent,
//   Button,
//   Typography,
//   CardMedia,
// } from "@mui/material";

// interface BookCardProps {
//   book: { title: string; author: string; coverPhotoURL: string };
//   onAdd?: () => void;
//   onRemove?: () => void;
// }

// const BookCard: React.FC<BookCardProps> = ({ book, onAdd, onRemove }) => {
//   const coverPhoto = new URL(`../${book.coverPhotoURL}`, import.meta.url).href;

//   return (
//     <Card
//       sx={{
//         display: "flex",
//         flexDirection: "column",
//         margin: 2,
//         width: 250,
//         height: 400,
//       }}
//       aria-label={`Card for book titled ${book.title}`}
//     >
//       <CardMedia
//         component="img"
//         sx={{ height: 200, objectFit: "cover" }}
//         image={coverPhoto}
//         alt={`${book.title} cover`}
//       />
//       <CardContent sx={{ flex: "1 0 auto", padding: 2 }}>
//         <Typography variant="h6" color="text.primary">
//           {book.title}
//         </Typography>
//         <Typography variant="body2" color="text.secondary" fontStyle="italic">
//           {book.author}
//         </Typography>
//       </CardContent>
//       <Button
//         variant="contained"
//         sx={{
//           backgroundColor: onRemove ? "#f76434" : "#5acccc",
//           color: "white",
//           borderRadius: "8px",
//           margin: 1,
//         }}
//         onClick={onRemove || onAdd}
//         aria-label={
//           onRemove
//             ? `Remove ${book.title} from reading list`
//             : `Add ${book.title} to reading list`
//         }
//       >
//         {onRemove ? "Remove" : "Add to Reading List"}
//       </Button>
//     </Card>
//   );
// };

// export default BookCard;


import React from "react";
import {
  Card,
  CardContent,
  Button,
  Typography,
  CardMedia,
} from "@mui/material";
import { Book } from "../types";

interface BookCardProps {
  book: Book;
  onAdd?: () => void;
  onRemove?: () => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAdd, onRemove }) => {
 const coverPhoto = new URL(`../../${book.coverPhotoURL}`, import.meta.url).href;

  return (
    <Card
      sx={{
        display: "flex",
        flexDirection: "column",
        margin: 2,
        width: 250,
        height: 400,
      }}
      aria-label={`Card for book titled ${book.title}`}
    >
      <CardMedia
        component="img"
        sx={{ height: 200, objectFit: "cover" }}
        image={coverPhoto}
        alt={`${book.title} cover`}
      />
      <CardContent sx={{ flex: "1 0 auto", padding: 2 }}>
        <Typography variant="h6" color="text.primary">
          {book.title}
        </Typography>
        <Typography variant="body2" color="text.secondary" fontStyle="italic">
          {book.author}
        </Typography>
      </CardContent>
      <Button
        variant="contained"
        sx={{
          backgroundColor: onRemove ? "#f76434" : "#5acccc",
          color: "white",
          borderRadius: "8px",
          margin: 1,
        }}
        onClick={onRemove || onAdd}
        aria-label={
          onRemove
            ? `Remove ${book.title} from reading list`
            : `Add ${book.title} to reading list`
        }
      >
        {onRemove ? "Remove" : "Add to Reading List"}
      </Button>
    </Card>
  );
};

export default BookCard;
