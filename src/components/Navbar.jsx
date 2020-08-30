import React from "react";
import { AppBar, Toolbar, IconButton, Box } from "@material-ui/core";
import StarBorderIcon from "@material-ui/icons/StarBorder";
import { makeStyles } from "@material-ui/core/styles";
import { Link } from "react-scroll";

const useStyles = makeStyles({
  listItems: {
    color: "#473252",
  },
  navLablesMargin: {
    marginLeft: "auto",
    display: "flex",
  },
  navLables: {
    margin: "5px",
    "&:hover": {
      color: "#847191",
    },
  },
});

export default function Navbar() {
  const classes = useStyles();
  return (
    <>
      <Box component="nav">
        <AppBar position="fixed" style={{ background: "#473252" }}>
          <Toolbar>
            <Link
              activeClass="active"
              to="header"
              spy={true}
              smooth={true}
              offset={-63}
              duration={500}
            >
              <IconButton>
                <StarBorderIcon style={{ color: "white" }} />
              </IconButton>
            </Link>
            <Box component="div" className={classes.navLablesMargin}>
              <Link
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
                className={classes.navLables}
              >
                About Me
              </Link>
              <Link
                activeClass="active"
                to="projects"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
                className={classes.navLables}
              >
                My Projects
              </Link>
              <Link
                activeClass="active"
                to="resume"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
                className={classes.navLables}
              >
                My Resume
              </Link>
              <Link
                activeClass="active"
                to="contacts"
                spy={true}
                smooth={true}
                offset={-63}
                duration={500}
                className={classes.navLables}
              >
                Contact Me
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
      </Box>
    </>
  );
}
