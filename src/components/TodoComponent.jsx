import { useState } from "react";
import Container from "react-bootstrap/Container";
import CircumIcon from "@klarr-agency/circum-icons-react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import Form from "react-bootstrap/Form";
import TodoListComponent from "./TodoListComponent";
import useTodo from "../hooks/useTodo";
import idGenerator from "../helper/idGenerator";

const TodoComponent = () => {
  const [show, setShow] = useState(false);
  const [todoText, setTodoText] = useState(null);

  const { addTodo, deleteMultipleTodos, undoDelete } = useTodo();

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleAddTodo = () => {
    if (todoText === null || todoText === "") {
      alert("Please type something to add");
      return;
    }
    addTodo({
      id: idGenerator(),
      text: todoText,
    });
    setTodoText(null);
    handleClose();
  };

  return (
    <>
      <Container className="todo-container">
        <h1 className="todo-title">This is a technical proof</h1>
        <p className="todo-description">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
          corporis modi repudiandae omnis voluptas eos asperiores blanditiis
          quas, consequatur commodi doloremque nobis quod maxime ab inventore
          rem sunt consectetur dicta.
        </p>
        <TodoListComponent />
        <div className="todo-actions">
          <div className="left-actions">
            <Button variant="outline-primary" className="todo-action-button" onClick={undoDelete}>
              <CircumIcon name="undo" />
            </Button>
            <Button variant="outline-primary" className="todo-action-button" onClick={deleteMultipleTodos} >
              DELETE
            </Button>
          </div>
          <Button
            onClick={handleShow}
            variant="primary"
            className="todo-action-button"
          >
            ADD
          </Button>
        </div>
      </Container>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <p>Add item to list</p>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Control
                type="text"
                placeholder="Type the text here..."
                value={todoText}
                onChange={(e) => setTodoText(e.target.value)}
              />
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="primary"
            className="todo-action-button button-size-fixed"
            onClick={handleAddTodo}
          >
            ADD
          </Button>
          <Button
            variant="outline-primary"
            className="todo-action-button button-size-fixed"
            onClick={handleClose}
          >
            CANCEL
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default TodoComponent;
