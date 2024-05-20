import { Container, Typography } from "@mui/material";
import React from "react";
import { Box } from "@mui/system";
import headingImage from "../assets/The Dragon News.png";
import Image from "next/image";
import { showCurrentDate } from "@/utiles/getCurrentDate";
const Header = () => {
  const currentDate= showCurrentDate();
  return (
    <Box>
      <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
       // Optional: to center vertically within the viewport
          }}
      >
        <Image
          src={headingImage}
          width={500}
          height={500}
          alt=""
       
        />
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-2"
        >
          Journalism Without Fear or Favour
        </Typography>
        <Typography
          variant="body2"
          color="gray"
          textAlign="center"
          className="my-2"
        >
         {currentDate}
        </Typography>
      </Container>
    </Box>
  );
};

export default Header;
