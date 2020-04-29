import React from "react";
import Table from '@material-ui/core/Table';
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import {connect} from "react-redux";
import {RootState} from "../../store/rootState";
import {RawDisplayIssue} from "../../store/issues/types";

export interface IssueTable {
    issues: Array<RawDisplayIssue>
}

export function IssueTableComponent({issues}: IssueTable) {
    return (
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell style={{width: "10%"}} align="center">ID</TableCell>
                        <TableCell style={{width: "60%"}} align="left">Title</TableCell>
                        <TableCell style={{width: "30%"}} align="left">Assignee</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {issues.map((issue) => (
                        <TableRow key={issue.id}>
                            <TableCell align="center" component="th" scope="row">
                                {issue.id}
                            </TableCell>
                            <TableCell align="left">{issue.title}</TableCell>
                            <TableCell align="left">{issue.assignee_name}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

export const IssueTable =
    connect(
        ({issues: {issues}}: RootState) => ({issues}),
    )
    (IssueTableComponent);
