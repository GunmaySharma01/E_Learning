import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    height: 400,
    width: 400,
  },
  successive: {
    position: 'absolute',
    height: 200,
    width: 200,
    bottom: 0,
    resizeMode: 'contain',
  },
});

export default styles;
