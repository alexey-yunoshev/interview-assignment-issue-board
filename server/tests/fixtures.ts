import { RawDisplayIssue } from "../src/lib/display-bug/rawDisplayIssue";
import { User } from "../src/lib/user/user";

export const users: Array<User> = [
  {
    id: 1,
    username: "Violet Evergarden",
  },
  {
    id: 2,
    username: "Asakura Yoh",
  },
  {
    id: 3,
    username: "Sakata Gintoki",
  },
  {
    id: 4,
    username: "Gilbert Bougainvillea",
  },
  {
    id: 5,
    username: "Cattleya Baudelaire",
  },
  {
    id: 6,
    username: "Benedict Blue",
  },
  {
    id: 7,
    username: "Claudia Hodgins",
  },
  {
    id: 8,
    username: "Amy Bartlett",
  },
  {
    id: 9,
    username: "Dietfried Bougainvillea",
  },
  {
    id: 10,
    username: "Tiffany Evergarden",
  },
  {
    id: 11,
    username: "Kagura chan",
  },
];

export const issues: Array<RawDisplayIssue> = [
  {
    id: "1",
    title: "User 615335 can't make payment",
    assignee_id: 1,
    assignee_name: "Violet Evergarden",
  },
  {
    id: "2",
    title: "The cat is stuck in the door. The hole is too narrow.",
    assignee_id: 2,
    assignee_name: "Asakura Yoh",
  },
  {
    id: "3",
    title: "The penguins can't fly anymore",
    assignee_id: 3,
    assignee_name: "Sakata Gintoki",
  },
  {
    id: "4",
    title: "No pizza in the box",
    assignee_id: 3,
    assignee_name: "Sakata Gintoki",
  },
  {
    id: "5",
    title: "User 894632 got 145 notifications on payment",
    assignee_id: 2,
    assignee_name: "Asakura Yoh",
  },
  {
    id: "6",
    title: "Client got no cat in the bag.",
    assignee_id: 3,
    assignee_name: "Sakata Gintoki",
  },
  {
    id: "7",
    title: "Balance won't update",
    assignee_id: 3,
    assignee_name: "Sakata Gintoki",
  },
];
