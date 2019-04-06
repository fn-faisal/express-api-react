import { Theme } from '@material-ui/core/styles';

//const theme = new Theme();

export default {
    root: {
      width: '100%',
    },
    grow: {
      flexGrow: 1,
    },
    menuButton: {
      marginLeft: -12,
      marginRight: 20,
    },
    title: {
      display: 'none',
      [Theme.breakpoints.up('sm')]: {
        display: 'block',
      },
    },
    search: {
      position: 'relative',
      borderRadius: Theme.shape.borderRadius,
      backgroundColor: fade(Theme.palette.common.white, 0.15),
      '&:hover': {
        backgroundColor: fade(Theme.palette.common.white, 0.25),
      },
      marginLeft: 0,
      width: '100%',
      [Theme.breakpoints.up('sm')]: {
        marginLeft: Theme.spacing.unit,
        width: 'auto',
      },
    },
    searchIcon: {
      width: Theme.spacing.unit * 9,
      height: '100%',
      position: 'absolute',
      pointerEvents: 'none',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inputRoot: {
      color: 'inherit',
      width: '100%',
    },
    inputInput: {
      paddingTop: Theme.spacing.unit,
      paddingRight: Theme.spacing.unit,
      paddingBottom: Theme.spacing.unit,
      paddingLeft: Theme.spacing.unit * 10,
      transition: Theme.transitions.create('width'),
      width: '100%',
      [Theme.breakpoints.up('sm')]: {
        width: 120,
        '&:focus': {
          width: 200,
        },
      },
    },
  };