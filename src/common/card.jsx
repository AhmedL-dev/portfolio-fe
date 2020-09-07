import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Typography from "@material-ui/core/Typography";

import GithubButton from "./inputs/buttons/githubButton";
import ActionButton from "./inputs/buttons/actionButton";
import DrawerDetail from "./drawerDetail";

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: "3em",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    height: "100%",
  },
});

export default function CardDisplay({
  image,
  title,
  body,
  github,
  detail,
  liveLink,
}) {
  const classes = useStyles();
  const [openDetail, setOpenDetail] = React.useState(false);

  const toggleDrawer = (open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }
    setOpenDetail(open);
  };

  return (
    <Card className={classes.root}>
      <div className={classes.cardContainer}>
        <React.Fragment>
          <CardActionArea onClick={toggleDrawer(true)}>
            <CardMedia
              component="img"
              alt={title}
              height="100%"
              image={image}
              title={title}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                {body}
              </Typography>
            </CardContent>
          </CardActionArea>
          <DrawerDetail
            open={openDetail}
            setState={setOpenDetail}
            toggleDrawer={toggleDrawer}
            anchor="right"
            title={title}
            detail={detail}
          />
        </React.Fragment>

        <CardActions>
          <GithubButton githubLink={github} />
          <ActionButton actionLinks={liveLink} />
        </CardActions>
      </div>
    </Card>
  );
}
