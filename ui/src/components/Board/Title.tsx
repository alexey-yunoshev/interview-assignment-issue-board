import React from 'react';
import Typography from "@material-ui/core/Typography";
import {makeStyles} from "@material-ui/core/styles";

const useStyles = makeStyles(() => ({
    title: {
        alignItems: "center",
        justifyContent: "center",
        display: "flex",
    },
}));

export function Title() {
    const classes = useStyles();

    return (
        <Typography
            variant="h5"
            component="h1"
            className={classes.title}
            align="center"
            gutterBottom
        >
            Issue Board
        </Typography>
    );
}
