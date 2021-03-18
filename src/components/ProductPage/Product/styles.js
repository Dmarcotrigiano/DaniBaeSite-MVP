import { makeStyles } from "@material-ui/core/styles";
import { Translate } from "@material-ui/icons";

export default makeStyles((theme) => ({
  root: {
    // maxWidth: 345, original width style
    maxWidth: "100%",
    minHeight: "100%",
    justifyContent: "flex-end",
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
  },
  rootExpand:{
    boxShadow: "2px 2px 10px rgba(0, 0, 0, 0.3)",
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
