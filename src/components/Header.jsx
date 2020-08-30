import React from "react";
import { Typography, Box } from "@material-ui/core";
import Typed from "react-typed";
import { makeStyles } from "@material-ui/core/styles";
import bg from "../imgs/christopher-gower-m_HRfLhgABo-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  title: {
    color: "#fff",
    marginTop: "3rem",
    fontFamily: "'Poppins', sans-serif",
  },
  subtitle: {
    color: "#fff",
    marginBottom: "0.5rem",
  },
  typedContainer: {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "100vw",
    textAlign: "center",
    zIndex: 1,
    background: "#47325260",
  },
  body: {
    height: "100vh",
    backgroundImage: `url(${bg})`,
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundAttachment: "relative",
  },
}));

export default function Header() {
  const classes = useStyles();
  return (
    <div className={classes.body} id="header">
      <Box className={classes.typedContainer}>
        <Typography variant="h3" className={classes.title}>
          <Typed strings={["Mira Arar"]} typeSpeed={40} showCursor={false} />
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          <Typed
            strings={["Front-end Web Developer \t"]}
            startDelay={1500}
            typeSpeed={100}
            backSpeed={100}
            backDelay={10}
            showCursor={false}
          />
        </Typography>
        <Typography variant="h4" className={classes.subtitle}>
          <Typed
            strings={["Computer Engineer"]}
            startDelay={4200}
            typeSpeed={100}
            backSpeed={100}
            backDelay={10}
            showCursor={false}
          />
        </Typography>
      </Box>
    </div>
  );
}
