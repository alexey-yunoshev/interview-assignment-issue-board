import React from 'react';
import {Board} from "./components/Board/Board";
import {Box} from "@material-ui/core";

export function App() {
    return (
        <Box
            bgcolor="#f5faff"
            display="flex"
            justifyContent="center"
            className="root"
            minHeight="100vh"
        >
            <Board/>
        </Box>
    );
}
