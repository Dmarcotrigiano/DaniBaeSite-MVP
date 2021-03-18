import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  toolbar: theme.mixins.toolbar,
  content: {
    // flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing(3),
    alignItems: "stretch",
    alignContent: "stretch",
    alignSelf :"stretch"
    
  },
  root: {
    // flexGrow: 1,
  },
  productCard: {
    height: "stretch",
    backgroundColor: "red"
  },
  grid: {
    alignSelf: "stretch"
  }
}));