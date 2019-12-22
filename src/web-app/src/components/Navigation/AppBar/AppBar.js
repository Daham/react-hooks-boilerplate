/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-09-07 10:01:10
 * @modify date 2019-09-07 10:01:10
 * @desc [description]
 */

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';

//MUI components
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

import { actions as authActions } from '../../../redux/modules/auth';


const drawerWidth = 240;

const styles = theme => ({
    root: {
        display: 'flex',
    },
    appBar: {
        minHeight: '72px',
        marginLeft: drawerWidth,
        [theme.breakpoints.up('sm')]: {
            width: `calc(100% - ${drawerWidth}px)`,
        },
    },
    menuButton: {
        marginRight: 20,
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    profileMenu: {
        marginLeft: "auto",
    },
    toolbar: theme.mixins.toolbar,
    avatar: {
        marginTop: 10,
        marginLeft: 20,
        width: 30,
        height: 30,
        textAlign: 'center'
    },
    bigAvatar: {
        margin: 0,
        width: 30,
        height: 30,
    },
    signedUser: {
        marginTop: 10,
        textAlign: 'center'
    },
    logoutButton: {
        align: 'right',
        marginBottom: 10,
        marginLeft: 20,
    }
});


const CustomAppBar = props => {
    const dispatch = useDispatch();

    const [anchorEl, setAnchorEl] = useState(null);

    const [mobileOpen, setMobileOpen] = useState(false);

    // const handleDrawerToggle = () => {
    //     setAnchorEl(!mobileOpen)
    // };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleMenu = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleLogout = (history) => {
        dispatch(authActions.ssoSingleLogout(history))

        setAnchorEl(null);
    };

    const { classes, handleDrawerToggle } = props;

    return (
        <AppBar position="fixed" className={classes.appBar}>
            <Toolbar>
                <IconButton
                    color="inherit"
                    aria-label="Open drawer"
                    onClick={handleDrawerToggle}
                    className={classes.menuButton}
                >
                    <MenuIcon />
                </IconButton>
            </Toolbar>
        </AppBar>
    );
}


CustomAppBar.propTypes = {
    classes: PropTypes.object.isRequired,
    handleDrawerToggle: PropTypes.func.isRequired
};

export default withStyles(styles)(CustomAppBar);
