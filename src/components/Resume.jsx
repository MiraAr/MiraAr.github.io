import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Button } from "@material-ui/core";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";

const useStyles = makeStyles({
  resumeContainer: {
    height: "30vh",
    display: "flex",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "#473252",
    color: "white",
    marginTop: "10%",
    width: "20%",
    height: "20%",
  },
  iconContainer: {
    color: "#473252",
    display: "flex",
    justifyContent: "center",
  },
  icon: {
    margin: "2%",
    fontSize: "50px",
    "&:hover": {
      color: "#00000090",
    },
    marginBottom: "10%",
  },
});

const resume =
  "https://docs.google.com/document/d/1xfyyQpKpNzVGICHqcgqpXCT4hLdpsBdoBTodrMK8Xgw/edit?usp=sharing";
export default function Resume() {
  const classes = useStyles();
  const githubURL = "https://github.com/MiraAr";
  const linkedinURL = "https://www.linkedin.com/in/mira-arar/";
  function openInNewTab(url) {
    let win = window.open(url, "_blank");
    win.focus();
  }
  function sendMail() {
    var link = "mailto:|mira.ar230@gmail.com";

    window.location.href = link;
  }

  return (
    <>
      <Box id="resume" className={classes.body}>
        <div className={classes.resumeContainer}>
          <Button
            variant="contained"
            className={classes.button}
            onClick={() => window.open(resume)}
          >
            my resume
          </Button>
        </div>
      </Box>
      <Box component="div" className={classes.iconContainer}>
        <GitHubIcon
          className={classes.icon}
          onClick={() => openInNewTab(githubURL)}
        />
        <LinkedInIcon
          className={classes.icon}
          onClick={() => openInNewTab(linkedinURL)}
        />
        <EmailIcon className={classes.icon} onClick={sendMail} />
      </Box>
    </>
  );
}
