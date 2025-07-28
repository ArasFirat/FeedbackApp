import { useState } from "react";
import "./../App.css";
import HoverRating from "../components/mui components/rating";
import { Box, Button } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import TextFieldHiddenLabel from "../components/textfield";
import axios from "axios";

export default function HomePage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    feedback: "",
  });

  const [rating, setRating] = useState<number | null>(null);

  const logicAppUrl =
    "https://stajproje-logicapps.azurewebsites.net:443/api/wf-postmantest/triggers/When_a_HTTP_request_is_received/invoke?api-version=2022-05-01&sp=%2Ftriggers%2FWhen_a_HTTP_request_is_received%2Frun&sv=1.0&sig=DH89xjQUldv8g9lBqGkqIDmze8c2hjZ2NDv7g96JP_U";

  const handleFormChange = (field: string, value: string) => {
    setForm((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const handleSubmit = async () => {
    const payload = {
      ...form,
      rating,
    };

    try {
      const response = await axios.post(logicAppUrl, payload, {
        headers: {
          "Content-Type": "application/json",
        },
      });

      console.log("Başarılı:", response.data);
      alert("Veri başarıyla gönderildi!");
    } catch (error: any) {
      console.error("Hata:", error.response?.data || error.message);
      alert("Gönderim başarısız. Konsolu kontrol et.");
    }
  };

  return (
    <Box
      sx={{
        borderStyle: "groove",
        borderColor: "black",
        boxShadow: "20",
        padding: "25px",
        borderRadius: "30px",
        maxWidth: 500,
        margin: "auto",
        marginTop: "50px",
        backgroundColor: "white",
      }}
    >
      <TextFieldHiddenLabel
        name={form.name}
        email={form.email}
        feedback={form.feedback}
        onChange={handleFormChange}
      />
      <HoverRating value={rating} onChange={setRating} />
      <Button
        onClick={handleSubmit}
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "auto",
          marginTop: 2,
          backgroundColor: "coral",
        }}
        variant="contained"
        endIcon={<SendIcon />}
      >
        Send
      </Button>
    </Box>
  );
}
