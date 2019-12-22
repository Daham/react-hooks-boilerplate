/**
 * @author Daham Pathiraja
 * @email Daham.Pathiraja@syscolabs.com
 * @create date 2019-12-21 14:58:46
 * @modify date 2019-12-21 14:58:46
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


const LayoutTwo = props => {
    const loading = useSelector(state => state.app.getIn(['auth', 'loading']));

    const dispatch = useDispatch();

    const { classes } = props;

    const buttonClickHandler = (value) => {
        dispatch(actions.layoutTwo.layoutTwo());
    };

    return <div className={classes.root}>
        <Grid container spacing={3}>
            <Grid item xs={12}>
                <Paper className={classes.paper}>
                    <MarkerBoard title='Layout Tw0' value={5} buttonClickCallback={buttonClickHandler} />
                </Paper>
            </Grid>
        </Grid>
    </div>
}

LayoutTwo.propTypes = {
    classes: PropTypes.object.isRequired
}

export default withStyles(styles)(LayoutTwo);