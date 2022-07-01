import React from 'react';
import { View, Text } from 'react-native';
import { Task } from './ListScreen';

interface IProps {
  item: Task;
}

const ListItemDone = ({ item }: IProps): JSX.Element => {
  return (
    <View>
      <Text>{item.description}</Text>
    </View>
  );
};

export default ListItemDone;
