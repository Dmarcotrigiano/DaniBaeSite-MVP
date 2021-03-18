import { makeStyles } from "@material-ui/core/styles";
import { Translate } from "@material-ui/icons";

export default makeStyles((theme) => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
    height: "fit-content",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  mediaExpand: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  cardActions: {
    display: "flex",
    justifyContent: "flex-end",
  },
  cardContent: {
    display: "grid",
    justifyContent: "space-between",
  },
  cardContentExpand: {
    display: "grid",
    justifyContent: "space-between",
    height: "stretch",
    width: "100%",
  },

  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  active: {
    transition: "1s ease in",
    scale: 3,
  },
}));
