import AsyncStorage from '@react-native-async-storage/async-storage';

class Storage {
  private static instance: Storage;

  public static getInstance(): Storage {
    if (!Storage.instance) {
      Storage.instance = new Storage();
    }
    return Storage.instance;
  }

  public store = async (key: string, value: string) => {
    try {
      await AsyncStorage.setItem(key, value);
      return true;
    } catch (err) {
      console.log('error in store method', err);
      return false;
    }
  };

  public get = async (key: string) => {
    try {
      return await AsyncStorage.getItem(key);
    } catch (err) {
      console.log('error in Get method', err);
      throw new Error(<string>err);
    }
  };

  public getAllKeys = async () => {
    try {
      return await AsyncStorage.getAllKeys();
    } catch (err) {
      console.log('error in Get All Keys method', err);
      throw new Error(<string>err);
    }
  };

  public multiGet = async (keys: string[]) => {
    try {
      return await AsyncStorage.multiGet(keys);
    } catch (err) {
      console.log('error in Multi Get method', err);
      throw new Error(<string>err);
    }
  };

  public remove = async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
      return true;
    } catch (err) {
      console.log('error in remove method', err);
      return false;
    }
  };
}

export default Storage;
