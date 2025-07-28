import * as React from "react";
import Rating from "@mui/material/Rating";
import Box from "@mui/material/Box";
import StarIcon from "@mui/icons-material/Star";

const labels: { [index: number]: string } = {
  0.5: "Useless",
  1: "Useless+",
  1.5: "Poor",
  2: "Poor+",
  2.5: "Ok",
  3: "Ok+",
  3.5: "Good",
  4: "Good+",
  4.5: "Excellent",
  5: "Excellent+",
};

interface HoverRatingProps {
  value: number | null;
  onChange: (value: number | null) => void;
}

export default function HoverRating({ value, onChange }: HoverRatingProps) {
  const [hover, setHover] = React.useState(-1);

  return (
    <Box
      sx={{
        width: 200,
        display: "flex",
        alignItems: "center",
        marginTop: "10px",
        margin: "auto",
        flexDirection: "column",
      }}
    >
      <Rating
        name="hover-feedback"
        value={value}
        precision={0.5}
        getLabelText={(val) =>
          `${val} Star${val !== 1 ? "s" : ""}, ${labels[val]}`
        }
        onChange={(_, newValue) => onChange(newValue)}
        onChangeActive={(_, newHover) => setHover(newHover)}
        emptyIcon={<StarIcon style={{ opacity: 0.55 }} fontSize="inherit" />}
      />
      {value !== null && (
        <Box sx={{ ml: 2, color: "black" }}>
          {labels[hover !== -1 ? hover : value]}
        </Box>
      )}
    </Box>
  );
}
