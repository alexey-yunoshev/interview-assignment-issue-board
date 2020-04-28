import {db} from "../db";
import {DisplayBug} from "./displayBug";

export function findAllBugs() {
    return db.query<DisplayBug>(`
        SELECT
            b.id,
            b.title,
            b.assignee_id,
            u.username as assignee_name
        FROM bugs as b
        LEFT JOIN users as u ON b.assignee_id = u.id
    `)
}

export function findBugsByQuery(query: string) {
    return db.query<DisplayBug>(`
        SELECT
            b.id,
            b.title,
            b.assignee_id,
            u.username as assignee_name
        FROM bugs as b
        LEFT JOIN users as u ON b.assignee_id = u.id
        WHERE
        b.id = $1
        OR b.title ILIKE $1
        OR u.username ILIKE $1;
        `,
        [
            `%${query}%`,
        ]);
}

export function findBugsByAssigneeId(assigneeId: number) {
    return db.query<DisplayBug>(`
        SELECT
            b.id,
            b.title,
            b.assignee_id,
            u.username as assignee_name
        FROM bugs as b
        LEFT JOIN users as u ON b.assignee_id = u.id
        WHERE u.id = $1;
        `,
        [assigneeId]);
}

export function findBugsByQueryAndAssigneeId(assigneeId: number, query: string) {
    return db.query<DisplayBug>(`
        SELECT
            b.id,
            b.title,
            b.assignee_id,
            u.username as assignee_name
        FROM bugs as b
        LEFT JOIN users as u ON b.assignee_id = u.id
        WHERE
            (
            b.id = $1
            OR b.title ILIKE $1
            OR u.username ILIKE $1
            )
            AND u.id = $2;
        `,
        [
            `%${query}%`,
            assigneeId,
        ]);
}
