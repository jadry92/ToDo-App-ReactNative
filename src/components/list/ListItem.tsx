import React, { useState } from 'react';
import {
  View,
  Pressable,
  Image,
  StyleSheet,
  TextInput,
  NativeSyntheticEvent,
  TextInputChangeEventData,
  KeyboardAvoidingView,
  Platform,
} from 'react-native';
import colors from '../../res/colors';
import { Task, taskStatus } from './ListScreen';

interface eventHandler {
  (e: any): void;
}

interface IProps {
  item: Task;
  handelDelete: eventHandler;
  handelSave: eventHandler;
}

const getImageStatusPath = (status: taskStatus): string => {
  if (status === 'done') {
    return require('../../assets/img/outline_check_box_white_48dp.png');
  } else {
    return require('../../assets/img/outline_check_box_outline_blank_white_48dp.png');
  }
};

const ListItem = ({ item, handelDelete, handelSave }: IProps): JSX.Element => {
  const [isEditing, setIsEditing] = useState(false);
  const [task, setTask] = useState(item);
  const [imageStatusPath, setImageStatusPath] = useState(
    getImageStatusPath(task.status),
  );

  const onFocusEditing = () => {
    setIsEditing(true);
  };
  const onEndEditing = () => {
    setIsEditing(true);
    handelSave(task);
  };
  const toggleDone = () => {
    let newTask: Task;
    if (task.status === 'done') {
      newTask = {
        id: task.id,
        title: task.title,
        status: 'undone',
      };
      setImageStatusPath(getImageStatusPath(newTask.status));
    } else {
      newTask = {
        id: task.id,
        title: task.title,
        status: 'done',
      };
      setImageStatusPath(getImageStatusPath(newTask.status));
    }
    setTask(newTask);
    handelSave(newTask);
  };

  const handleChange = (
    event: NativeSyntheticEvent<TextInputChangeEventData>,
  ) => {
    const textValue = event.nativeEvent.text;
    const newTask = {
      id: task.id,
      title: textValue,
      status: task.status,
    };

    setTask(newTask);
  };
  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}>
      <View style={styles.container}>
        <Pressable style={styles.containerImages}>
          <Image
            style={styles.image}
            source={require('../../assets/img/outline_drag_indicator_white_48dp.png')}
          />
        </Pressable>
        <Pressable style={styles.containerImages} onPressIn={toggleDone}>
          <Image style={styles.image} source={imageStatusPath} />
        </Pressable>

        <View style={styles.containerText}>
          <TextInput
            style={styles.textTitle}
            value={task.title}
            onChange={handleChange}
            onFocus={onFocusEditing}
            onEndEditing={onEndEditing}
            multiline={true}
          />
        </View>

        <View style={styles.containerDelete}>
          {isEditing && (
            <Pressable onPressIn={() => handelDelete(task)}>
              <Image
                style={styles.imageDelete}
                source={require('../../assets/img/outline_clear_white_48dp.png')}
              />
            </Pressable>
          )}
        </View>
      </View>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  containerImages: {
    justifyContent: 'center',
  },
  image: {
    width: 35,
    height: 35,
    tintColor: '#000',
  },
  imageDelete: {
    width: 35,
    height: 35,
    tintColor: '#000',
    marginRight: 15,
    marginLeft: 5,
  },
  containerText: {
    marginLeft: 10,
    justifyContent: 'center',
    //flexWrap: 'wrap',
    borderWidth: 1,
    flex: 1,
  },
  textTitle: {
    fontSize: 20,
    color: colors.black,
    borderWidth: 1,
  },
  containerDelete: {
    width: 50,
    justifyContent: 'center',
  },
});
export default ListItem;
