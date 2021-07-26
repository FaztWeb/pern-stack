import React, { useState, useEffect } from "react";
import { Card, Button } from "semantic-ui-react";
import DeleteModal from "./DeleteModal";
import { useHistory } from "react-router-dom";

const TasksList = () => {
  const [tasks, setTasks] = useState([]);
  const history = useHistory();

  const loadTasks = async () => {
    const response = await fetch("http://localhost:4000/tasks");
    const data = await response.json();
    setTasks(data);
  };

  const handleDelete = async (id) => {
    try {
      await fetch(`http://localhost:4000/tasks/${id}`, {
        method: "DELETE",
      });

      setTasks(tasks.filter((task) => task.id !== id));
    } catch (error) {}
  };

  useEffect(() => {
    loadTasks();
  }, []);

  return (
    <>
      <h1>Tasks</h1>
      <Card.Group itemsPerRow={3} stackable>
        {tasks.map((task) => (
          <Card key={task.id}>
            <Card.Content>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  width: "100%",
                }}
              >
                <p>{task.description}</p>
                <div>
                  <Button
                    icon="edit"
                    onClick={() => history.push(`/edit-task/${task.id}`)}
                  />
                  <DeleteModal task={task} handleDelete={handleDelete} />
                </div>
              </div>
            </Card.Content>
          </Card>
        ))}
      </Card.Group>
    </>
  );
};

export default TasksList;
