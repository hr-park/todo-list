import React, {Component} from 'react';
import TodoListTemplate from './components/TodoListTemplate';
import Form from './components/Form';
import TodoItemList from './components/TodoItemList';

class App extends Component {
  id = 3 // 이미 0,1,2가 존재

  state = {
    input: '',
    todos: [
      {id:0, text: 'Node.js, NPM', checked: false},
      {id:1, text: 'package.json', checked: true},
      {id:2, text: 'React Setup', checked: false}
    ]
  }

  handleChange = (e) => {
    this.setState({
        input: e.target.value // input의 다음 바뀔 값
    });
  }

  handleCreate = () => {
    const {input, todos} = this.state;
    this.setState({
      input:'', // 인풋 비우고
      // concat을 사용하여 배열에 추가
      todos: todos.concat({
        id:this.id++,
        text:input,
        checked:false
      })
    });
  }

  handleKeyPress = (e) => {
    // 눌려진 키가 Enter면 handleCreate 호출
    if(e.key === 'Enter') {
      this.handleCreate();
    }
  }

  handleToggle = (id) => {
    const {todos} = this.state;

    // 파라미터로 받은 id를 가지고 몇번째 아이템인지 찾는다.
    const index = todos.findIndex(todo => todo.id === id);
    const selected = todos[index]; // 선택한 객체

    const nextTodos = [...todos]; // 배열복사

    // 기존 값들을 복사하고 checked 값을 덮어쓰기
    nextTodos[index] = {
      ...selected,
      checked: !selected.checked
    };

    this.setState({
      todos: nextTodos
    });
  }

  handleRemove = (id) => {
    const {todos} = this.state;
    this.setState({
      todos: todos.filter(todo => todo.id !== id)
    });
  }

  render() {
      const {input, todos} = this.state;
      const {
        handleChange,
        handleCreate,
        handleKeyPress,
        handleToggle,
        handleRemove
      } = this;

      return (
        <TodoListTemplate form={(
          <Form 
            value={input}
            onKeyPress={handleKeyPress}
            onChange={handleChange}
            onCreate={handleCreate}
          />
        )}>
          <TodoItemList todos={todos} onToggle={handleToggle} onRemove={handleRemove} />
        </TodoListTemplate>
      );
  }
}

export default App;
