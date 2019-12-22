/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-21 14:58:57
 * @modify date 2019-12-21 14:58:57
 * @desc [description]
 */

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

//MUI components
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import withStyles from '@material-ui/core/styles/withStyles';

import MarkerBoard from '../../components/MarkerBoard/MarkerBoard';

import actions from 'Actions';

const styles = theme => ({
    root: {
        flexGrow: 1,
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: theme.palette.text.secondary,
        marginTop: '15px',
        marginLeft: '10px',
        marginRight: '10px',

    }
});

const LayoutOne = props => {
    const loading = useSelector(state => state.app.getIn(['auth', 'loading']));

    const dispatch = useDispatch();

    const { classes } = props;

    const buttonClickHandler = (value) => {
        dispatch(actions.layoutOne.layoutOne())
    };

    return <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <MarkerBoard title='Layout One' value={5} buttonClickCallback={buttonClickHandler} />
                </Paper>
            </Grid>
        </Grid>
    </div>
}


LayoutOne.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LayoutOne);