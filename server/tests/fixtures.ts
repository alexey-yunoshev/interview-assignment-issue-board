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

export const bugs: Array<RawDisplayIssue> = [
  {
    id: "1",
    title: "User 615335 can't make payment",
    assigneeId: 1,
    assigneeName: "Violet Evergarden",
  },
  {
    id: "2",
    title: "The cat is stuck in the door. The hole is too narrow.",
    assigneeId: 2,
    assigneeName: "Asakura Yoh",
  },
  {
    id: "3",
    title: "The penguins can't fly anymore",
    assigneeId: 3,
    assigneeName: "Sakata Gintoki",
  },
  {
    id: "4",
    title: "No pizza in the box",
    assigneeId: 3,
    assigneeName: "Sakata Gintoki",
  },
  {
    id: "5",
    title: "User 894632 got 145 notifications on payment",
    assigneeId: 2,
    assigneeName: "Asakura Yoh",
  },
  {
    id: "6",
    title: "Client got no cat in the bag.",
    assigneeId: 3,
    assigneeName: "Sakata Gintoki",
  },
  {
    id: "7",
    title: "Balance won't update",
    assigneeId: 3,
    assigneeName: "Sakata Gintoki",
  },
];
