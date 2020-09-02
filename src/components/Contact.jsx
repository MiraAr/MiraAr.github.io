import React from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import { TextField, Typography, Button, Grid, Box } from "@material-ui/core";
import { Parallax } from "react-parallax";
import SendIcon from "@material-ui/icons/Send";

const useStyles = makeStyles((theme) => ({
  form: {
    margin: "5% 0 2% 0",
    position: "relative",
    background: "#F9FAF5",
    padding: "2%",
    borderRadius: "10px",
    width: "30%",
    minWidth: "350px",
  },
  button: {
    marginTop: "1rem",
    color: "#473252",
    borderColor: "#81827F",
  },
}));

const InputField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#473252",
    },
    "& label": {
      color: "#89799A",
    },
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "#81827F",
      },
      "&:hover fieldset": {
        borderColor: "#8F7EA0",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#8F7EA0",
      },
    },
  },
})(TextField);

export default function Contact() {
  const classes = useStyles();

  return (
    <div id="contacts">
      <Parallax
        blur={2}
        bgImage={require("../imgs/adam-solomon-WHUDOzd5IYU-unsplash.jpg")}
        bgImageSizes="cover"
        strength={300}
        style={{ height: "100vh" }}
      >
        <Box component="div">
          <Grid container justify="center">
            <Box component="form" className={classes.form}>
              <Typography
                variant="h5"
                style={{
                  color: "#473252",
                  textAlign: "center",
                  textTransform: "uppercase",
                }}
              >
                Contact me
              </Typography>
              <InputField
                fullWidth={true}
                label="Name"
                variant="outlined"
                inputProps={{ style: { color: "#473252" } }}
                margin="dense"
                size="medium"
              />
              <br />
              <InputField
                fullWidth={true}
                label="Email"
                variant="outlined"
                inputProps={{ style: { color: "#473252" } }}
                margin="dense"
                size="medium"
              />
              <br />
              <InputField
                fullWidth={true}
                label="Subject"
                variant="outlined"
                inputProps={{ style: { color: "#473252" } }}
                margin="dense"
                size="medium"
                id="subject"
              />
              <br />
              <InputField
                rows={4}
                fullWidth={true}
                label="Message"
                variant="outlined"
                inputProps={{ style: { color: "#473252" } }}
                margin="dense"
                size="medium"
                multiline
                id="message"
              />
              <br />
              <Button
                className={classes.button}
                variant="outlined"
                fullWidth={true}
                endIcon={<SendIcon />}
              >
              </Button>
            </Box>
          </Grid>
        </Box>
      </Parallax>
    </div>
  );
}
