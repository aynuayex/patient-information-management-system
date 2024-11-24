const sql = require("mssql");

const getPatient = async (req, res) => {
  try {
    const { id } = req.params;
    const request = new sql.Request();
    request.input("id", sql.NVarChar, id);
    const result = await request.query(`SELECT * FROM Patient WHERE id = @id`);
    console.log(result);
    res.status(200).json(result.recordset[0]);
  } catch (error) {
    console.error("Error executing query:", error);
    res.status(400).json({ msg: "error" });
  }
};

const getPatients = async (req, res) => {
  try {
    const request = new sql.Request();
    const result = await request.query(`SELECT * FROM Patient`);
    // console.log(result);
    res.status(200).json(result.recordset);
  } catch (error) {
    res.status(400).json({ msg: "error" });
  }
};

const createPatient = async (req, res) => {
  try {
    const { fullName, sex, age, phone, email, doctor, injury } = req.body;

    // Format the date appropriately for MSSQL (assuming dateofvisit is a string)
    const formattedDate = new Date();

    // Create a new instance of a request from your configured connection pool
    const request = new sql.Request();

    // Define the SQL query with parameters
    const query = `
      INSERT INTO Patient (fullName, sex, age, phone, email, doctor, injury, dateofvisit)
      VALUES (@fullName, @sex, @age, @phone, @email, @doctor, @injury, @dateofvisit);
    `;

    // Add parameters to the request
    request.input("fullName", sql.NVarChar, fullName);
    request.input("sex", sql.NVarChar, sex);
    request.input("age", sql.Int, age);
    request.input("phone", sql.NVarChar, phone);
    request.input("email", sql.NVarChar, email);
    request.input("doctor", sql.NVarChar, doctor);
    request.input("injury", sql.NVarChar, injury);
    request.input('dateOfVisit', sql.DateTime, formattedDate);

    // Execute the query
    const result = await request.query(query);

    // console.log(formattedDate);
    res.status(200).json(formattedDate);
  } catch (error) {
    console.error("Error creating patient:", error);
    res.status(400).json({ msg: "error" });
  }
};

const updatePatient = async (req, res) => {
  try {
    const { id } = req.params;
    const { fullName, sex, age, phone, email, doctor, injury } = req.body;

    // Create a new instance of a request from your configured connection pool
    const request = new sql.Request();

    // Define the SQL query with parameters
    const query = `
      UPDATE Patient
      SET fullName = @fullName,
          sex = @sex,
          age = @age,
          phone = @phone,
          email = @email,
          doctor = @doctor,
          injury = @injury
      WHERE id = @id;
    `;

    // Add parameters to the request
    request.input("fullName", sql.NVarChar, fullName);
    request.input("sex", sql.NVarChar, sex);
    request.input("age", sql.Int, age);
    request.input("phone", sql.NVarChar, phone);
    request.input("email", sql.NVarChar, email);
    request.input("doctor", sql.NVarChar, doctor);
    request.input("injury", sql.NVarChar, injury);
    request.input("id", sql.Int, id);

    // Execute the query
    const result = await request.query(query);

    res.status(200).json(result.rowsAffected[0]); // Return the number of rows affected
  } catch (error) {
    console.error("Error updating patient:", error);
    res.status(400).json({ msg: "error" });
  }
};


const deletePatient = async (req, res) => {
  try {
    const { id } = req.params;

    // Create a new instance of a request from your configured connection pool
    const request = new sql.Request();

    // Define the SQL query with parameters
    const query = `
      DELETE FROM Patient
      WHERE id = @id;
    `;

    // Add parameter to the request
    request.input("id", sql.Int, id);

    // Execute the query
    const result = await request.query(query);

    res.status(200).json({ msg: `Patient with ID ${id} deleted successfully` });
  } catch (error) {
    console.error("Error deleting patient:", error);
    res.status(400).json({ msg: "error" });
  }
};


module.exports = {
  getPatient,
  getPatients,
  createPatient,
  updatePatient,
  deletePatient,
};
