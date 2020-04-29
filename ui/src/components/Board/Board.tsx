import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import {Title} from "./Title";
import {Form} from "./Form/Form";
import {IssueTable} from "./Table";
import {Fetcher} from "../Fetcher";

const useStyles = makeStyles(({spacing}) => ({
    board: {
        display: "flex",
        flexDirection: "column",
        margin: spacing(0, 2),
        maxWidth: "800px",
        paddingTop: spacing(2),
        width: "800px",
    },
}));

export function Board() {
    const classes = useStyles();

    return (
        <div className={classes.board}>
            <Fetcher/>
            <Title/>
            <Form/>
            <IssueTable/>
        </div>
    );
}
