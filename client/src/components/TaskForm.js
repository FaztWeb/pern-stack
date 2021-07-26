import React, { useEffect, useState } from "react";
import { Header, Form, Grid, Card, Button } from "semantic-ui-react";
import { useHistory, useParams } from "react-router-dom";

const TaskForm = () => {
  const [description, setDescription] = useState("");
  const [loading, setLoading] = useState(false);
  const [editing, setEditing] = useState(false);

  const history = useHistory();
  const params = useParams();

  useEffect(() => {
    if (params.id) {
      loadTask(params.id);
    }
  }, [params.id]);

  const loadTask = async (id) => {
    const res = await fetch("http://localhost:4000/tasks/" + id);
    const data = await res.json();
    setDescription(data.description);
    setEditing(true);
  };

  const handleSubmit = async (event) => {
    try {
      const body = { description };
      setLoading(true);

      if (editing) {
        const response = await fetch(
          "http://localhost:4000/tasks/" + params.id,
          {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(body),
          }
        );
        await response.json();
      } else {
        const response = await fetch("http://localhost:4000/tasks", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body),
        });
        await response.json();
      }

      setLoading(false);
      history.push("/");

    } catch (error) {}
  };

  return (
    <Grid
      style={{ height: "100%" }}
      centered
      columns={2}
      stackable
      verticalAlign="middle"
    >
      <Grid.Column>
        <Card fluid>
          <Card.Content>
            <Header as="h1">
              {editing ? "Update Task" : "Create a New Task"}
            </Header>
            <Form onSubmit={handleSubmit}>
              <Form.Input
                label="Description"
                placeholder="Description"
                autoFocus
                onChange={(e) => setDescription(e.target.value)}
                value={description}
              />
              <Button primary disabled={!description} loading={loading}>
                {editing ? "Edit" : "Create"}
              </Button>
            </Form>
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
};

export default TaskForm;
