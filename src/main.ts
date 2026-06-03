import { Person } from "./person";

const alice = new Person("Alice", 20, "secret123", 2006);
console.log("class:", alice.introduce());

alice.changePassword("newSecret456");
