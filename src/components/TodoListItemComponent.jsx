import PropTypes from 'prop-types'

const TodoListItemComponent = ({text}) => {
  return (
    <p className="todo-item">{text}</p>
  )
}

TodoListItemComponent.propTypes = {
  text: PropTypes.string,
};

export default TodoListItemComponent