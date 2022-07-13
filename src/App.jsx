import { Box } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";
import { Characters, Home, NotFound } from "./pages";

export default function App() {
  return (
    <Box textAlign="center">
      <Routes>
        <Route index element={<Home />} />
        <Route path="/" element={<Home />} />
        <Route path="/characters/:pageId" element={<Characters />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}
