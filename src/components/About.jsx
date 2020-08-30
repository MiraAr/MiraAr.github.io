import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  body: {
    height: "100vh",
    background:
      "radial-gradient(circle, rgba(255,255,255,0.2361987031140581) 46%, rgba(150,153,156,0.6507645294445903) 62%)",
    position: "relative",
  },
  container: {
    border: "1px solid #fff",
    borderRadius: "20px",
    padding: "5%",
    backgroundColor: "#fff",
    boxShadow: " 12px 12px 12px -2px rgba(43,43,43,0.49)",
    position: "absolute",
    top: "25%",
    bottom: "25%",
    margin: "0 10%",
  },
  title: {
    fontFamily: "'Poppins', sans-serif",
    fontSize: "170%",
  },
  text: {
    fontFamily: "'Poppins', sans-serif",
    fontWeight: "550",
    fontSize: "110%",
  },
}));

export default function About() {
  const classes = useStyles();
  return (
    <div id="about" className={classes.body}>
      <div className={classes.container}>
        <h2 className={classes.title}>About me</h2>
        <p className={classes.text}>
          Hi...My name is Mira, I am a Front-end web developer and a computer
          engineer, based in Istanbul, Turkey. My journey as a programmer
          started as I studied computer engineering at Istanbul Bilgi university
          then I joined Re:coded Front-end web development bootcamp, I learned a
          lot during this journey and I want to keep learning and coding until I
          am 80{" "}
          <span role="img" aria-label="oldlady">
            👵🏻
          </span>
        </p>
      </div>
    </div>
  );
}
