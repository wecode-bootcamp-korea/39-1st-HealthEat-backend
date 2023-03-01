const { sqlDataSource } = require("./data-source");

const createUser = async (name, phone, email, password) => {
  try {
    return await sqlDataSource.query(
      `INSERT INTO users(
        name,
        phone,
        email,
        password) 
      VALUES (?, ?, ?, ?)
          `,
      [name, phone, email, password]
    );
  } catch (err) {
    throw new Error("INVALID DATA INPUT");
  }
};

const getUserByEmail = async (email) => {
  const [user] = await sqlDataSource.query(
    `
        SELECT 
          id,
          name,
          phone,
          email,
          password
        FROM
          users
        WHERE
          users.email = ?
        `,
    [email]
  );
  return user;
};

const getUserById = async (id) => {
  const [user] = await sqlDataSource.query(
    `
        SELECT
          id,
          name,
          phone,
          email,
          password
        FROM 
          users
        WHERE 
          users.id = ?
        `,
    [id]
  );

  return user;
};

module.exports = { getUserByEmail, createUser, getUserById };
