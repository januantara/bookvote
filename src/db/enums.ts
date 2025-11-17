import { pgEnum } from "drizzle-orm/pg-core";

export const bookGenreEnum = pgEnum("book_genre", [
    "Novel",
    "Technology",
    "Management",
    "Accounting",
    "Communication",
    "Design",
    "Psychology",
]);