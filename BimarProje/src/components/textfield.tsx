import * as React from "react";
import Stack from "@mui/material/Stack";
import TextField from "@mui/material/TextField";

interface Props {
  name: string;
  email: string;
  feedback: string;
  onChange: (field: string, value: string) => void;
}

export default function TextFieldHiddenLabel({
  name,
  email,
  feedback,
  onChange,
}: Props) {
  return (
    <Stack
      component="form"
      sx={{ width: "100%" }}
      spacing={2}
      noValidate
      autoComplete="off"
    >
      <TextField
        fullWidth
        variant="outlined"
        label="Name Surname"
        placeholder="name here"
        value={name}
        onChange={(e) => onChange("name", e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="E-Mail"
        placeholder="username@gmail.com"
        value={email}
        onChange={(e) => onChange("email", e.target.value)}
        sx={{ mb: 2 }}
      />
      <TextField
        fullWidth
        variant="outlined"
        label="Feedback"
        placeholder="I liked it."
        multiline
        rows={4}
        value={feedback}
        onChange={(e) => onChange("feedback", e.target.value)}
        sx={{ mb: 2 }}
      />
    </Stack>
  );
}
