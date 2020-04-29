import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import {makeStyles} from "@material-ui/core/styles";
import {Board} from "./Board/Board";
import {fetchUsers} from "./store/users/actions";
import {AppDispatch} from "./store/rootAction";

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: "#f5faff",
        display: "flex",
        justifyContent: "center",
        minHeight: "100vh",
        maxHeight: "100vh",
        minWidth: "100vw",
        maxWidth: "100vw"
    },
}));

interface AppProps {
    fetchUsers: () => void,
}

export function AppComponent({fetchUsers}: AppProps) {
    const classes = useStyles();

    useEffect(() => {
        fetchUsers()
    }, [fetchUsers]);

    return (
        <div className={classes.root}>
            <Board/>
        </div>
    );
}

function mapDispatchToProps(dispatch: AppDispatch) {
    return {
        fetchUsers: () => dispatch(fetchUsers())
    }
}

export const App = connect(null, mapDispatchToProps)(AppComponent);
