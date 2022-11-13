import useStyles from "./useStyles";

const Header = () => {

  const classes = useStyles();

  return (
    <h1 className={classes.root}> Hola </h1>
  );
}

export default Header;
