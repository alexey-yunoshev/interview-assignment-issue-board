import React from 'react';
import {makeStyles} from "@material-ui/core/styles";

import {Title} from "./Title";
import {Form} from "./Form/Form";
import {IssueTable} from "./Table";
import {Fetcher} from "../Fetcher";
import {Box} from "@material-ui/core";

const useStyles = makeStyles(({spacing}) => ({
    board: {
        display: "flex",
        flexDirection: "column",
        margin: spacing(0, 2),
        paddingTop: spacing(2),
        maxWidth: 800,
        width: 800,
    },
}));

export function Board() {
    const {board} = useStyles();

    return (
        <Box className={board}>
            <Fetcher/>
            <Title/>
            <Form/>
            <IssueTable/>
        </Box>
    );
}
