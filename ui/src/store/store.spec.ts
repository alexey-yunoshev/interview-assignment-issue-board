import { store } from "./store";
import { setUsers } from "./users/actions";
import { User } from "./users/types";
import { RawDisplayIssue } from "./issues/types";
import { setIssues } from "./issues/actions";
import { setAssignee, setQuery } from "./form/actions";
import { hideAlert, showAlert } from "./system/actions";

describe("store", () => {
  it("updates users state", () => {
    expect(store.getState().users.users).toHaveLength(0);

    const user: User = { id: 1, username: "Violet Evergarden" };
    store.dispatch(setUsers([user]));

    expect(store.getState().users.users).toHaveLength(1);
    expect(store.getState().users.users[0]).toEqual(user);

    const users: Array<User> = [
      { id: 2, username: "Violet Evergarden" },
      { id: 3, username: "Anna Asakura" },
    ];

    store.dispatch(setUsers(users));

    expect(store.getState().users.users).toHaveLength(2);
    expect(store.getState().users.users[0]).toEqual(users[0]);
    expect(store.getState().users.users[1]).toEqual(users[1]);
  });

  it("updates issues state", () => {
    expect(store.getState().issues.issues).toHaveLength(0);

    const issues: Array<RawDisplayIssue> = [
      {
        id: "1",
        assignee_id: 1,
        assignee_name: "MJ",
        title: "Issue 1",
      },
      {
        id: "2",
        assignee_id: 1,
        assignee_name: "MJ",
        title: "Issue 2",
      },
    ];
    store.dispatch(setIssues(issues));

    expect(store.getState().issues.issues).toHaveLength(2);
  });

  it("updates form state", () => {
    expect(store.getState().form.query).toBe("");
    expect(store.getState().form.assignee).toBe(0);

    const assignee = 1;
    store.dispatch(setAssignee(assignee));
    const query = "cat";
    store.dispatch(setQuery(query));

    expect(store.getState().form.assignee).toBe(assignee);
    expect(store.getState().form.query).toBe(query);
  });

  it("updates alert state", () => {
    expect(store.getState().system.alert.isShown).toBe(false);
    expect(store.getState().system.alert.message).toBe("");
    expect(store.getState().system.alert.severity).toBe("info");

    const severity = "error";
    const message = "The cat got stuck again (⁎>ᆺ<)";
    store.dispatch(showAlert(severity, message));

    expect(store.getState().system.alert.isShown).toBe(true);
    expect(store.getState().system.alert.message).toBe(message);
    expect(store.getState().system.alert.severity).toBe(severity);

    store.dispatch(hideAlert());
    expect(store.getState().system.alert.isShown).toBe(false);
  });
});
