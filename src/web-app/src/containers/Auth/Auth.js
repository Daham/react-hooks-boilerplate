/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-08-18 09:13:26
 * @modify date 2019-08-18 09:13:26
 * @desc Implementation for Auth container.
 */

import React, { useState } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
//MUI components
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import AccountCircle from '@material-ui/icons/AccountCircle';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Link from "@material-ui/core/Link";
import CircularProgress from "@material-ui/core/CircularProgress";
import withStyles from '@material-ui/core/styles/withStyles';

import actions from 'Actions';

//Custom components
import Logo from '../../components/Logo/Logo';


const styles = theme => ({
    main: {
        width: 'auto',
        display: 'block', // Fix IE 11 issue.
        marginLeft: theme.spacing.unit * 3,
        marginRight: theme.spacing.unit * 3,
        [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
            width: 400,
            marginLeft: 'auto',
            marginRight: 'auto',
        },
    },
    paper: {
        marginTop: theme.spacing.unit * 2,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
    },
    avatar: {
        margin: theme.spacing.unit,
        backgroundColor: "#00d8ff",
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        marginTop: theme.spacing.unit,
    },
    submit: {
        marginTop: theme.spacing.unit * 3,
    },
    signUpLink: {
        marginTop: theme.spacing.unit * 3,
    },
    backToSignInLink: {
        marginTop: theme.spacing.unit * 3,
    },
    progress: {
        marginLeft: '176px',
        marginTop: '164px',
        position: 'absolute',
        zIndex: 1000,
    }
});

const Auth = props => {

    const [email, setEmail] = useState('');

    const [password, setPassword] = useState('');

    const [isSignUp, setIsSignUp] = useState(false);

    const loading = useSelector(state => state.app.getIn(['auth', 'loading']));

    const dispatch = useDispatch();

    const { classes, history } = props;

    const signUpHandler = (event) => {
        event.preventDefault();
        dispatch(actions.auth.authUser(email, password, isSignUp, history))
    };

    const signInHandler = (event) => {
        event.preventDefault();
        dispatch(actions.auth.authUser(email, password, isSignUp, history))
    };

    const signInContent = <main className={classes.main}>
        <Logo />
        <CssBaseline />
        {loading ? <CircularProgress className={classes.progress} /> : null}
        <Paper className={classes.paper} style={{ opacity: loading ? 0.5 : 1 }}>
            <Avatar className={classes.avatar}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
                </Typography>
            <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" value={email} autoComplete="email"
                        onChange={(event) => setEmail(event.target.value)} autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" value={password}
                        autoComplete="current-password" onChange={(event) => setPassword(event.target.value)} />
                </FormControl>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={signInHandler}
                    on
                    className={classes.submit}
                >
                    Sign in
                    </Button>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => setIsSignUp(true)}
                    className={classes.signUpLink}
                >
                    Sign Up Now!
                    </Link>
            </form>
        </Paper>
    </main>;

    const signUpContent = <main className={classes.main}>
        <Logo />
        <CssBaseline />
        {loading ? <CircularProgress className={classes.progress} /> : null}
        <Paper className={classes.paper} style={{ opacity: loading ? 0.5 : 1 }}>
            <Avatar className={classes.avatar}>
                <AccountCircle />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign Up
                </Typography>
            <form className={classes.form}>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="email">Email Address</InputLabel>
                    <Input id="email" name="email" value={email} autoComplete="email"
                        onChange={(event) => setEmail(event.target.value)} autoFocus />
                </FormControl>
                <FormControl margin="normal" required fullWidth>
                    <InputLabel htmlFor="password">Password</InputLabel>
                    <Input name="password" type="password" id="password" value={password}
                        autoComplete="current-password" onChange={(event) => setPassword(event.target.value)} />
                </FormControl>
                <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    onClick={signUpHandler}
                    on
                    className={classes.submit}
                >
                    Sign Up
                    </Button>
                <Link
                    component="button"
                    variant="body2"
                    onClick={() => setIsSignUp(false)}
                    className={classes.backToSignInLink}
                >
                    Back to SignIn
                    </Link>
            </form>
        </Paper>
    </main>;

    return (isSignUp ? signUpContent : !loading ? signInContent : null)
}

Auth.propTypes = {
    classes: PropTypes.object.isRequired
};

export default withStyles(styles)(Auth);