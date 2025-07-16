import { Text, SafeAreaView, StyleSheet, View, Button, TextInput } from 'react-native';
import { Card } from 'react-native-paper';
import { useState } from 'react';

const defaultTodos = [
  { label: "Study react 😎", state: false },
  { label: "Build portfolio 💼", state: false }
];

export default function TodoList() {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(defaultTodos);

  function addTodo() {
    setTodoList([...todoList, { label: todo, state: false }]);
    setTodo("");
  }

  function markAsDone(index: number) {
    const updatedList = [...todoList];
    updatedList[index] = { ...updatedList[index], state: true };
    setTodoList(updatedList);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.paragraph}>Summer Todo List</Text>

      <TextInput
        value={todo}
        onChangeText={setTodo}
        style={styles.textInput}
        placeholder="What is there to do?"
        autoFocus
      />

      <View style={styles.buttons}>
        <Button title="Add Todo" onPress={addTodo} />
      </View>

      <Card style={styles.card}>
        {todoList.map((todo, index) => 
          <View key={index} style={styles.todoItem}>
            <Button title={todo.state ? "✅" : "⭕"} onPress={() => markAsDone(index)} />
            <Text style={styles.todoLabel}>{todo.label}</Text>
          </View>
        )}
      </Card>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 16,
  },
  paragraph: {
    margin: 16,
    fontSize: 18,
    fontWeight: 'bold',
  },
  textInput: {
    margin: 16,
    fontSize: 20,
  },
  buttons: {
    flexDirection: 'row',
    margin: 16,
  },
  card: {
    margin: 16,
    borderRadius: 4,
    padding: 16,
    gap: 4,
  },
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
    gap: 8
  },
  todoLabel: {
    fontSize: 20,
    width: '80%'
  },
});