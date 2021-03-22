import * as React from 'react'; 
import Checkbox from './Checkbox';
import {View, StyleSheet,Text} from 'react-native';

const ChoicesHeaders = ({
  headersName,
  choicesHeaderStyles,
  choicesHeaderItemStyles,
}) => {
  return (
    <View style={choicesHeaderStyles}>
      {headersName.map((header) => (
        <View style={choicesHeaderItemStyles}>
          <Text>{header}</Text>
        </View>
      ))}
    </View>
  );
};

export default ChoicesHeaders;