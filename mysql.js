const mariadb = require("mariadb");
const pool = mariadb.createPool({
  host: "13.232.215.129",
  port: "3306",
  user: "team_home360",
  password: "home360_usersinfo_Database_pass",
  database: "home360_usersinfo",
  connectionLimit: 5, // Set the maximum number of connections
});

async function fetchData() {
  let conn;
  try {
    conn = await pool.getConnection();
    const rows = await conn.query("SELECT 1 as val");
    console.log(rows); // Example output: [{ val: 1 }, meta: ...]
    const res = await conn.query("INSERT INTO myTable value (?, ?)", [
      1,
      "mariadb",
    ]);
    console.log(res); // Example output: { affectedRows: 1, insertId: 1, warningStatus: 0 }
  } catch (err) {
    throw err;
  } finally {
    if (conn) conn.end();
  }
}

// fetchData();

let createTable = async () => {
  let conn;

  try {
    conn = await pool.getConnection();
    await conn.query(`
        CREATE TABLE IF NOT EXISTS myTable (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            age INT
        )
    `);
    console.log("Table created successfully!");
  } catch (err) {
    console.error("Error creating table:", err);
  } finally {
    if (conn) conn.end();
  }
};

createTable();
