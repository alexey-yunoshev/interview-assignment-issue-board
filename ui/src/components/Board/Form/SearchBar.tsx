import React, { useEffect, useRef } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { TextField } from "@material-ui/core";
import { fromEvent } from "rxjs";
import { debounceTime, map } from "rxjs/operators";
import { connect } from "react-redux";

import { AppDispatch } from "../../../store/rootAction";
import { Query } from "../../../store/form/types";
import { setQuery } from "../../../store/form/actions";

const useStyles = makeStyles(() => ({
  searchBar: {
    width: "100%",
  },
}));

export interface SearchBarProps {
  setQuery: (query: Query) => void;
}

export function SearchBarComponent({ setQuery }: SearchBarProps) {
  const classes = useStyles();

  const textInput = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const wrapper = textInput.current;

    if (wrapper === null) {
      return;
    }

    const input = wrapper.getElementsByTagName("input")[0];
    const keyup$ = fromEvent(input, "keyup").pipe(
      map((event) => (event.currentTarget as HTMLInputElement).value),
      debounceTime(500),
    );
    const subscription = keyup$.subscribe((query) => {
      setQuery(query);
    });

    return () => subscription.unsubscribe();
  }, [textInput, setQuery]);

  return (
    <TextField
      ref={textInput}
      className={classes.searchBar}
      id="searchBar"
      label="Search..."
      type="search"
      inputProps={{ maxLength: 50 }}
    />
  );
}

export const SearchBar = connect(null, (dispatch: AppDispatch) => ({
  setQuery: (query: Query) => dispatch(setQuery(query)),
}))(SearchBarComponent);
