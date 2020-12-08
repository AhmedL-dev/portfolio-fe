import React, { Fragment } from "react";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Grid from "@material-ui/core/Grid";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import GitHubIcon from "@material-ui/icons/GitHub";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
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

const HtmlTooltip = withStyles(theme => ({
  tooltip: {
    backgroundColor: "#f5f5f9",
    color: "rgba(0, 0, 0, 0.87)",
    maxWidth: 220,
    fontSize: theme.typography.pxToRem(12),
    border: "1px solid #dadde9",
  },
}))(Tooltip);

export default function CardDisplay({ image, title, body, github, detail, liveLink }) {
  const classes = useStyles();
  const [openDetail, setOpenDetail] = React.useState(false);

  const toggleDrawer = open => event => {
    if (event && event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return;
    }
    setOpenDetail(open);
  };

  return (
    <Card className={classes.root}>
      <Grid>
        <React.Fragment>
          <CardActionArea onClick={toggleDrawer(true)}>
            <CardMedia component="img" alt={title} height="100%" image={image} title={title} />
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
          <HtmlTooltip
            interactive
            title={
              <Fragment>
                <Typography color="inherit">Github repositories</Typography>
                {github.map(g => (
                  <div key={g}>
                    <a href={g} target="_blank" rel="noopener noreferrer">
                      {g}
                    </a>
                  </div>
                ))}
              </Fragment>
            }
          >
            <IconButton
              onClick={() => {
                github.map(g => window.open(g, "_blank"));
              }}
            >
              <GitHubIcon />
            </IconButton>
          </HtmlTooltip>
          {liveLink && (
            <Button
              onClick={() => {
                github.map(g => window.open(liveLink, "_blank"));
              }}
              title={liveLink}
              size="small"
              color="primary"
            >
              live version
            </Button>
          )}
        </CardActions>
      </Grid>
    </Card>
  );
}
