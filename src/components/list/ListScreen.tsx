import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import ListItem from './ListItem';
import ListItemDone from './ListItemDone';

export type taskStatus = 'done' | 'undone';

export interface Task {
  id: string;
  title: string;
  status: taskStatus;
  description?: string;
  time?: number;
}

interface IProps {}

interface IState {
  listOfTask?: Task[];
}

const createMockData = (num: number): Task[] => {
  let mockTasks: Task[] = [
    {
      id: '0',
      title: 'D',
      status: 'done',
    },
  ];
  for (let index = 1; index < num; index++) {
    const exampleTask: Task = {
      id: index.toString(),
      title: 'Dqweqwe',
      status: 'done',
    };
    mockTasks.push(exampleTask);
  }
  return mockTasks;
};

class ViewList extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    const mockTasks = createMockData(21);
    this.state = {
      listOfTask: mockTasks,
    };
  }

  handelSave = (item: Task): void => {
    let newListOfTask = this.state.listOfTask;
    if (newListOfTask) {
      const index = newListOfTask.findIndex(obj => obj.id === item.id);
      newListOfTask[index] = item;
      console.log('saved id =' + item.id);
      this.setState({ listOfTask: newListOfTask });
    }
  };

  handelDelete = (item: Task): void => {
    let newListOfTask = this.state.listOfTask;
    if (newListOfTask) {
      const index = newListOfTask.findIndex(obj => obj.id === item.id);
      if (index > -1) {
        newListOfTask.splice(index, 1);
      }
      this.setState({ listOfTask: newListOfTask });
    }
  };

  renderItem = ({ item }: any): JSX.Element => {
    if (item.status) {
      return <ListItemDone />;
    } else {
      return (
        <ListItem
          item={item}
          handelDelete={this.handelDelete}
          handelSave={this.handelSave}
        />
      );
    }
  };

  render() {
    const { listOfTask } = this.state;

    return (
      <View style={styles.container}>
        <FlatList
          style={styles.list}
          data={listOfTask}
          renderItem={this.renderItem}
          keyExtractor={item => item.id}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  list: {
    marginTop: 20,
    marginLeft: 15,
  },
});

export default ViewList;
