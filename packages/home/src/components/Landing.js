import React from "react";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";

export default function Landing({ isSignedIn, user }) {
  console.log(isSignedIn, user);
  return (
    <Container maxWidth="sm">
      <Typography
        component="h1"
        variant="h2"
        align="center"
        color="textPrimary"
        gutterBottom
      >
        Home
      </Typography>
      {isSignedIn && <span>Se ha logeado un usuario!</span>}
    </Container>
  );
}
