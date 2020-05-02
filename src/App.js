import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import StarIcon from '@material-ui/icons/StarBorder';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import {Tab,Grid, Card,CardContent,CardHeader, CardActions,Link,Box} from '@material-ui/core';
import Logo from './assets/logo.jpg'

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        RodrigoRedivo
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  '@global': {
    ul: {
      margin: 0,
      padding: 0,
      listStyle: 'none',
    },
  },
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
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
    color:"#FFF"
  },
  buttonText: {
    marginLeft: 250,
    marginTop: 10,
    color:"#000"

  },
  mainGrid: {
    marginTop: theme.spacing(3),
  },
  menu: {
    flexGrow: 1,
    background: 'linear-gradient(to top, #ff0844 0%, #9a9191 100%)',
    border: 0,
    borderRadius: 8,
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
    color: '#f1f1f1',
    height: 58,
    width: 970,
    padding: '0 30px',
    margin: theme.spacing(1, 1.5),
  },
  heroContent: {
    padding: theme.spacing(8, 0, 6),
    background: '#f9f9f9',
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

const tiers = [
  {
    title: 'Free',
    price: '0',
    description: [
      'Controla seu Estoque',
      '2 gb de produtos monitorados',
      'Prazo de 15 dias',
      'Sem Suporte',
    ],
    buttonText: 'Cadastre',
    buttonVariant: 'outlined',
  },
  {
    title: 'Gold',
    price: '100',
    description: [
      'Controla seu Estoque',
      '100 gb de produtos monitorados',
      'Prazo de 1 ano',
      'Suporte',
    ],
    buttonText: 'Cadastre',
    buttonVariant: 'contained',
  },
  {
    title: 'Enterprise',
    price: '30',
    description: [
      'Controla seu estoque',
      '10 gb de produtos monitorados',
      'Prazo de 6 meses',
      'Suporte',
    ],
    buttonText: 'Cadastre',
    buttonVariant: 'outlined',
  },
];

const footers = [
  {
    title: 'Menu',
    description: ['Home', 'Categoria', 'Produtos', 'Lojas', 'Quem Somos'],
  },
  {
    title: 'Categorias',
    description: ['Alimenticios', 'Construção', 'Eletrônicos', 'Moda', 'Automotivos'],
  },
  {
    title: 'Empresas parceiras',
    description: ['Vtex', 'Rocketseat', 'Nike', 'Adidas'],
  },
  {
    title: 'Termo',
    description: ['Privacy policy', 'Terms of use'],
  },
];

export default function Pricing() {
  const classes = useStyles();

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <React.Fragment >
      <CssBaseline />
      <AppBar position="static" color="default" elevation={0} className={classes.appBar} >
        <Toolbar className={classes.toolbar}>
          <Typography variant="h6" color="inherit" noWrap className={classes.toolbarTitle}>
            <img src={Logo} alt="" srcset="" width="150" />
          </Typography>
          <nav>
            <Paper className={classes.menu}>
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="#000"
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
        </Typography><br />
        <Button href="#" color="primary" variant="outlined" className={classes.buttonText}>
          Saiba mais
        </Button>
        <br /> <br /><br />
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Que tal ver uma promoções?
        </Typography>
        <Typography variant="h5" align="center" color="textSecondary" component="p">
          É cliente e deseja comprar produtos de qualidade<br />
          com praticidade e segurança?<br />
          Dê uma olhada nas nossas promoções!
        </Typography><br />
        <Button href="#" color="primary" variant="outlined" className={classes.buttonText}>
          Promoções
        </Button>
      </Container>
      <Container maxWidth="sm" component="div" className={classes.heroContent}>
        <Typography component="h1" variant="h2" align="center" color="textPrimary" gutterBottom>
          Planos
        </Typography>
      </Container>
      {/* End hero unit */}
      <Container maxWidth="md" component="main">
        <Grid container spacing={5} alignItems="flex-start">
          {tiers.map((tier) => (
            // Enterprise card is full width at sm breakpoint
            <Grid item key={tier.title} xs={12} sm={tier.title === 'Enterprise' ? 12 : 6} md={4}>
              <Card>
                <CardHeader
                  title={tier.title}
                  subheader={tier.subheader}
                  titleTypographyProps={{ align: 'center' }}
                  subheaderTypographyProps={{ align: 'center' }}
                  action={tier.title === 'Pro' ? <StarIcon /> : null}
                  className={classes.cardHeader}
                />
                <CardContent>
                  <div className={classes.cardPricing}>
                    <Typography component="h2" variant="h3" color="textPrimary">
                      ${tier.price}
                    </Typography>
                    <Typography variant="h6" color="textSecondary">
                      /mo
                    </Typography>
                  </div>
                  <ul>
                    {tier.description.map((line) => (
                      <Typography component="li" variant="subtitle1" align="center" key={line}>
                        {line}
                      </Typography>
                    ))}
                  </ul>
                </CardContent>
                <CardActions>
                  <Button fullWidth variant={tier.buttonVariant} color="secondary">
                    {tier.buttonText}
                  </Button>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
      {/* Footer */}
      <Container maxWidth="md" component="footer" className={classes.footer}>
        <Grid container spacing={4} justify="space-evenly">
          {footers.map((footer) => (
            <Grid item xs={6} sm={2} key={footer.title}>
              <Typography variant="h6" color="textPrimary" gutterBottom>
                {footer.title}
              </Typography>
              <ul>
                {footer.description.map((item) => (
                  <li key={item}>
                    <Link href="#" variant="subtitle1" color="textSecondary">
                      {item}
                    </Link>
                  </li>
                ))}
              </ul>
            </Grid>
          ))}
        </Grid>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
      {/* End footer */}
    </React.Fragment>
  );
}
