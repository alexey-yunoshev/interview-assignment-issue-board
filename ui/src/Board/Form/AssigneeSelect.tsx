import React from 'react';
import {makeStyles} from "@material-ui/core/styles";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import {MenuItem} from "@material-ui/core";
import {connect} from "react-redux";
import {RootState} from "../../store/rootState";
import {User, UserId} from "../../store/users/types";
import {AppDispatch} from "../../store/rootAction";
import {setAssignee} from "../../store/form/actions";
import {fetchIssues} from "../../store/issues/actions";
import {FetchIssuesParams} from "../../api/issueService";

const useStyles = makeStyles(({spacing}) => ({
    formControl: {
        minWidth: 200,
        marginRight: spacing(2),
    },
}));

export interface AssigneeSelectProps {
    assignee: UserId,
    setAssignee: (assigneeId: UserId) => void,
    users: Array<User>,
}

export function AssigneeSelectComponent({assignee, setAssignee, users}: AssigneeSelectProps) {
    const classes = useStyles();

    return (
        <FormControl className={classes.formControl}>
            <InputLabel id="assigneeSelectLabel">Assignee</InputLabel>
            <Select
                labelId="assigneeSelectLabel"
                id="assigneeSelect"
                value={assignee}
                onChange={(event) => setAssignee(event.target.value as number)}
            >
                <MenuItem key={0} value={0}>Anyone</MenuItem>
                {users.map((user) => (
                    <MenuItem key={user.id} value={user.id}>{user.username}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
}

const mapStateToProps = (state: RootState) => ({
    assignee: state.form.assignee,
    users: state.users.users,
})

const mapDispatchToProps = (dispatch: AppDispatch) => ({
    setAssignee: (assigneeId: UserId) => dispatch(setAssignee(assigneeId)),
    fetchIssues: (params: Partial<FetchIssuesParams>) => dispatch(fetchIssues(params))
})

export const AssigneeSelect = connect(mapStateToProps, mapDispatchToProps)(AssigneeSelectComponent);