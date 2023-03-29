import db from "../knexfile";
import { logger } from "../../logger";

db.schema.hasTable("users").then((exists) => {
  if (!exists) {
    logger.warn("Users table not found. creating...");
    db.schema
      .createTable("users", (table) => {
        table.increments();
        table.string("username").notNullable().unique();
        table.string("password").notNullable();
        table.boolean("access_level").defaultTo("basic"); /* basic | full */
      })
      .then(() => {
        logger.info("Users table created successfully.");
        db("users")
          .insert([
            {
              username: "master",
              password: "master",
              access_level: "full",
            },
            {
              username: "employee1",
              password: "employee1",
              access_level: "basic",
            },
          ])
          .then(() => logger.info("Default user created successfully"))
          .catch((err) =>
            logger.error(
              "Failed creating default user. reason : " + err.message
            )
          );
      })
      .catch((err) =>
        logger.error("Failed creating users table. reason : " + err.message)
      );
  } else {
    logger.info("Users table already exists. Aborting users table creation.");
  }
});
