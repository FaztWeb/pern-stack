const { Router } = require("express");
const pool = require("../db");

const router = Router();

// create a task
router.post("/tasks", async (req, res, next) => {
  try {
    const { description } = req.body;

    const newTask = await pool.query(
      "INSERT INTO task (description) VALUES($1) RETURNING *",
      [description]
    );
    res.json(newTask.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/tasks", async (req, res) => {
  try {
    const allTasks = await pool.query("SELECT * FROM task");
    res.json(allTasks.rows);
  } catch (error) {
    console.error(error.message);
  }
});

router.get("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const task = await pool.query("SELECT * FROM task WHERE id = $1", [id]);
    res.json(task.rows[0]);
  } catch (error) {
    console.error(error.message);
  }
});

router.put("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const { description } = req.body;
    console.log(id, description);
    const updatedTask = await pool.query(
      "UPDATE task SET description = $1 WHERE id = $2 RETURNING *",
      [description, id]
    );
    res.json(updatedTask.rows[0]);
  } catch (error) {
    console.error(errro.message);
  }
});

router.delete("/tasks/:id", async (req, res) => {
  try {
    const { id } = req.params;
    // using RETURNING *, you could get the deleted object
    await pool.query("DELETE FROM task WHERE id = $1", [id]);
    res.sendStatus(204);
  } catch (error) {
    console.error(error.message);
  }
});

module.exports = router;
