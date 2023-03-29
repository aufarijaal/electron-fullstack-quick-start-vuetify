import db from "../db/knexfile";

class UserRepository {
  async get(): Promise<User[]> {
    try {
      const users = await db<User>("users").select();
      return users;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async insert(user: User): Promise<number> {
    try {
      const { username, password, access_level } = user;

      // Access Level must be basic / full / (null / undefined for basic), other than that throw an Error
      if (access_level !== "basic" && access_level !== "full" && access_level) {
        throw new Error(
          "Access Level must be either basic or full. Provided: " + access_level
        );
      }

      const [{ id }] = await db("users").insert(
        { username, password, access_level: access_level ?? "basic" },
        "id"
      );
      return id;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async update(user: User): Promise<number> {
    try {
      let { username, password, access_level, id: idParam } = user;

      // Access Level must be basic / full / (null / undefined for basic), other than that throw an Error
      if (access_level !== "basic" && access_level !== "full" && access_level) {
        throw new Error(
          "Access Level must be either basic or full. Provided: " + access_level
        );
      }

      const [{ id }] = await db("users")
        .where({ id: idParam })
        .update(
          {
            username,
            password,
            access_level: access_level ?? "basic",
          },
          "id"
        );
      return id;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async deleteById(id: number): Promise<number> {
    try {
      const affectedRow = await db("users").where("id", id).delete();
      return affectedRow;
    } catch (error) {
      throw new Error(error.message);
    }
  }

  async truncate(): Promise<void> {
    try {
      await db("users").truncate();
      await db.raw("DELETE FROM `sqlite_sequence` WHERE `name` = 'users'");
    } catch (error) {
      throw new Error(error.message);
    }
  }
}

export default UserRepository;
