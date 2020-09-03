import React from "react";
import { Typography, Button } from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import LinkIcon from "@material-ui/icons/Link";
import movieProjectimg from "../imgs/projects/movieProject.png";
import boardProjectimg from "../imgs/projects/boardProject.png";
import ECommerceProjectImg from "../imgs/projects/e-commerce.png";
import { makeStyles } from "@material-ui/core/styles";
import Carousel from "react-material-ui-carousel";
import { Parallax } from "react-parallax";

const useStyles = makeStyles({
  body: {
    height: "100vh",
  },
  projectContainer: {
    backgroundColor: "#8779B4",
    display: "flex",
    flexDirection: "row",
    borderRadius: "10px",
    boxShadow: " -5px 17px 31px 1px rgba(48,12,48,0.85)",
  },
  projectImg: {
    maxWidth: "100%",
    height: "auto",
    width: "50%",
    borderRadius: "10px 0 0 10px",
  },
  projectDescription: {
    width: "50%",
    margin: "auto 5%",
    color: "white",
  },
  icons: {
    color: "#473252",
    fontSize: "40px",
    margin: "5%",
  },
  projectTitle: {
    margin: "3%",
  },
  carouselContainer:{
    margin: "auto",
    width: "75%",
  }
});

const projectsdetails = [
  {
    name: "CookBook",
    description:
      "Create your own cookbook, add edit and delete recipies, project made with reactJs, firebase, styled with Material-UI",
    imageUrl: boardProjectimg,
    projectLink: "https://createyourcookbook.netlify.app/",
    projectGithub: " https://github.com/MiraAr/The-board-project",
  },
  {
    name: "Movie Lab",
    description:
      "Movie database project help to search and find more about movies, their casts, ratings, trailers, related movies, genres, and so on.using data from TMDB implemented with vanilla js and styled with Bootstrap",
    imageUrl: movieProjectimg,
    projectLink: "https://movielab.netlify.app/",
    projectGithub: "https://github.com/MiraAr/the-movie-project",
  },
  {
    name: "katara E-commerce",
    description:
      "E-commerce project with blog page, implemented with ReactJS, redux, firebase for backend, Sass and react-bootstrap for styling, Wordpress for the blog and i18next for translation.",
    imageUrl: ECommerceProjectImg,
    projectLink: "https://istanbul-capstone-ecommerce.netlify.app/",
    projectGithub: "https://github.com/ReCoded-Org/istanbul-capstone-ecommerce",
  },
];

const ProjectItem = (props) => {
  const classes = useStyles();
  function openInNewTab(url) {
    let win = window.open(url, "_blank");
    win.focus();
  }

  return (
      <div className={classes.projectContainer}>
        <img
          src={`${props.project.imageUrl}`}
          alt="project img"
          className={classes.projectImg}
          onClick={() => openInNewTab(props.project.projectLink)}
        />
        <div className={classes.projectDescription}>
          <Typography
            gutterBottom
            variant="h5"
            component="h2"
            className={classes.projectTitle}
          >
            {props.project.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.project.description}
          </Typography>
          <Button
            size="small"
            color="primary"
            onClick={() => openInNewTab(props.project.projectGithub)}
            className={classes.icons}
          >
            <GitHubIcon />
          </Button>
          <Button
            size="small"
            color="primary"
            onClick={() => openInNewTab(props.project.projectLink)}
            className={classes.icons}
          >
            <LinkIcon />
          </Button>
        </div>
      </div>
  );
};

export default function Projects() {
  const classes = useStyles();

  return (
    <div className={classes.body} id="projects">
      <Parallax
        blur={2}
        bgImage={require("../imgs/jeremy-thomas-4dpAqfTbvKA-unsplash.jpg")}
        bgImageSizes="cover"
        strength={300}
        style={{ height: "100vh" }}
      >
        <h1
          style={{
            color: "white",
            margin: "5%",
            fontFamily: "'Poppins', sans-serif",
          }}
        >
          Check Out My Latest Projects...{" "}
        </h1>
        <div className={classes.carouselContainer}>
        <Carousel navButtonsAlwaysVisible="true">
          {projectsdetails.map((project,index) => (
            
              <ProjectItem project={project} key={index} />
           
          ))}
        </Carousel>
        </div>
      </Parallax>
    </div>
  );
}
