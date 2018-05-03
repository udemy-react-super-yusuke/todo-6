import React from "react";

export class List extends React.Component {
  constructor(props) {
    super(props);
  }

  // button を追加し、
  // click 時に 受けとった deleteTodo を実行する
  render() {
    const list = this.props.todos.map(todo => {
      return (
        <li>
          #{todo.id} {todo.title}
          <button
            onClick={() => {
              this.props.deleteTodo(todo.id);
            }}
          >
            delete
          </button>
        </li>
      );
    });

    return (
      <div>
        <h2>List</h2>
        <ul>{list}</ul>
      </div>
    );
  }
}
