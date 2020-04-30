import React, { useEffect } from "react";
import Table from "@material-ui/core/Table";
import TableContainer from "@material-ui/core/TableContainer";
import Paper from "@material-ui/core/Paper";
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";
import TableBody from "@material-ui/core/TableBody";
import TablePagination from "@material-ui/core/TablePagination";
import { connect } from "react-redux";

import { RootState } from "../../store/rootState";
import { RawDisplayIssue } from "../../store/issues/types";

export interface IssueTable {
  issues: Array<RawDisplayIssue>;
}

type ChangePageEvent = React.MouseEvent<HTMLButtonElement, MouseEvent> | null;
type ChangeRowsEvent = React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>;

function getIssueIndex(page: number, rowsPerPage: number) {
  return page * rowsPerPage;
}

function getNumberOfEmptyRows(page: number, rowsPerPage: number, numberOfIssues: number) {
  return Math.max(rowsPerPage - (numberOfIssues - getIssueIndex(page, rowsPerPage)), 0);
}

export function IssueTableComponent({ issues }: IssueTable) {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [emptyRows, setEmptyRows] = React.useState(getNumberOfEmptyRows(page, rowsPerPage, issues.length));

  useEffect(() => {
    setEmptyRows(getNumberOfEmptyRows(page, rowsPerPage, issues.length));
  }, [page, rowsPerPage, issues]);

  const handleChangePage = (event: ChangePageEvent, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event: ChangeRowsEvent) => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const ROW_HEIGHT = 53;
  const NUMBER_OF_COLUMNS = 3;

  return (
    <Paper>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell style={{ width: "10%" }} align="center">
                ID
              </TableCell>
              <TableCell style={{ width: "60%" }} align="left">
                Title
              </TableCell>
              <TableCell style={{ width: "30%" }} align="left">
                Assignee
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {issues
              .slice(getIssueIndex(page, rowsPerPage), getIssueIndex(page, rowsPerPage) + rowsPerPage)
              .map((issue) => (
                <TableRow key={issue.id}>
                  <TableCell align="center" component="th" scope="row">
                    {issue.id}
                  </TableCell>
                  <TableCell align="left">{issue.title}</TableCell>
                  <TableCell align="left">{issue.assignee_name}</TableCell>
                </TableRow>
              ))}
            {emptyRows > 0 && (
              <TableRow style={{ height: ROW_HEIGHT * emptyRows }}>
                <TableCell colSpan={NUMBER_OF_COLUMNS} />
              </TableRow>
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10]}
        component="div"
        count={issues.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
    </Paper>
  );
}

export const IssueTable = connect(({ issues: { issues } }: RootState) => ({
  issues,
}))(IssueTableComponent);
