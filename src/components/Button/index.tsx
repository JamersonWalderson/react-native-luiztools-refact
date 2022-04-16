import React, { Fragment } from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

interface Props {
  label: string;
  iconName?: string;
  onPress: any;
}

const Button = ({
  label,
  iconName,
  onPress = () => {},
  ...props
}: Props) =>{

  return (
    <Fragment>
      <TouchableOpacity style={styles.button} onPress={onPress}>
        <Text style={styles.buttonText}>
          { label }
        </Text>
      </TouchableOpacity>
    </Fragment>
  );
}

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    height: 60,
    backgroundColor: 'blue',
    borderRadius: 10,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 20,
    
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
    
  },
});

export default Button;