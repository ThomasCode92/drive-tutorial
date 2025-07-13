import {
  int,
  index,
  text,
  singlestoreTableCreator,
  bigint,
  timestamp,
} from "drizzle-orm/singlestore-core";

const createTable = singlestoreTableCreator((name) => `drive_tutorial_${name}`);

export const files_table = createTable(
  "files",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text("owner_id").notNull(),
    name: text("name").notNull(),
    url: text("url").notNull(),
    size: int("size").notNull(),
    parent: bigint("parent", { mode: "number", unsigned: true }).notNull(),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => [
    index("owner_id_index").on(table.ownerId),
    index("parent_index").on(table.parent),
  ],
);

export const folders_table = createTable(
  "folders",
  {
    id: bigint("id", { mode: "number", unsigned: true })
      .primaryKey()
      .autoincrement(),
    ownerId: text("owner_id").notNull(),
    name: text("name").notNull(),
    parent: bigint("parent", { mode: "number", unsigned: true }),
    createdAt: timestamp("created_at").notNull().defaultNow(),
  },
  (table) => [
    index("owner_id_index").on(table.ownerId),
    index("parent_index").on(table.parent),
  ],
);

export type File = typeof files_table.$inferSelect;
export type Folder = typeof folders_table.$inferSelect;
