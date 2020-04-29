import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import {Title} from "./Title";
import {Form} from "./Form";
import {IssueTable} from "./Table";
import {IssueFetcher} from "../components/IssueFetcher";

const useStyles = makeStyles(({spacing}) => ({
    board: {
        display: "flex",
        flexDirection: "column",
        margin: spacing(0, 2),
        maxWidth: "800px",
        paddingTop: spacing(2),
        width: "800px",
    },
    assigneeSelect: {
        backgroundColor: "blue",
    },
    searchField: {
        backgroundColor: "green",
    },
    list: {
        backgroundColor: "black",
    },
}));

export function Board() {
    const classes = useStyles();

    return (
        <div className={classes.board}>
            <IssueFetcher/>
            <Title/>
            <Form/>
            <IssueTable/>
        </div>
    );
}
