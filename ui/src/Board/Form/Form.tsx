import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {AssigneeSelect} from "./AssigneeSelect";
import {SearchBar} from "./SearchBar";

const useStyles = makeStyles(({spacing}) => ({
    form: {
        alignItems: "center",
        display: "flex",
        margin: spacing(2, 0, 4, 0),
    },
}));

export function Form() {
    const classes = useStyles();

    return (
        <div className={classes.form}>
            <AssigneeSelect/>
            <SearchBar/>
        </div>
    );
}