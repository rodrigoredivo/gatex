import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Logo from './assets/logo.jpg'

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  appBar: {
    borderBottom: `1px solid ${theme.palette.divider}`,
  },
  toolbar: {
    flexWrap: 'wrap',
  },
  toolbarTitle: {
    flexGrow: 1,
  },
  button: {
    right: 90,
    bottom: 4,
    color:"#000"
  },
  menu: {
    flexGrow: 1,
    background: 'linear-gradient(45deg, #386eb1de 0%, #b24accde 100%)',
    border: 0,
    borderRadius: 8,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: 'white',
    height: 58,
    width: 970,
    padding: '0 30px',
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
  },
  cardHeader: {
    backgroundColor:
      theme.palette.type === 'light' ? theme.palette.grey[200] : theme.palette.grey[700],
  },
  cardPricing: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'baseline',
    marginBottom: theme.spacing(2),
  },
  footer: {
    borderTop: `1px solid ${theme.palette.divider}`,
    marginTop: theme.spacing(8),
    paddingTop: theme.spacing(3),
    paddingBottom: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      paddingTop: theme.spacing(6),
      paddingBottom: theme.spacing(6),
    },
  },
}));

export default function Pricing() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <img src={Logo} alt="" srcset="" width="150" />
          </Typography>
          <nav>
            <Paper className={classes.menu}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="secondary"
                textColor="#FFF"
                centered
              >
                <Tab label="Home" />
                <Tab label="Categoria" />
                <Tab label="Produtos" />
                <Tab label="Lojas" />
                <Tab label="Quem somos" />
              </Tabs>
            </Paper>
          </nav>
          <Button href="#" color="primary" variant="outlined" className={classes.button}>
            Login
          </Button>
        </Toolbar>
      </AppBar>
      {/* Hero unit */}
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Deseja Aumentar suas vendas?
          Cadastre seu produto conosco!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Nesse tempos de crise, estamos focados em trazer para <br />
          você varejistas as melhores formas de promover seus produtos.<br />
          Com segurança e praticidade, é claro!
        </Typography>
      </Container>
      <Container maxWidth="sm" component="main" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Deseja Aumentar suas vendas?
          Cadastre seu produto conosco!
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          Nesse tempos de crise, estamos focados em trazer para <br />
          você varejistas as melhores formas de promover seus produtos.<br />
          Com segurança e praticidade, é claro!
        </Typography>
      </Container>
      {/* End hero unit */}
    </React.Fragment>
  );
}