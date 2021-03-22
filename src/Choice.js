import * as React from 'react'; 
import Checkbox from './Checkbox';
import {View, StyleSheet,Text} from 'react-native';
const Choice = ({
  callback,
  text,
  btnstyles,
  btnTxtStyles,
  btnstylesSelect,
  btnTxtStylesSelect,
  onValueChange,
  choicesCount
}) => {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);
  const handleCheckboxChange = (id) => {
    setSelectedIndex(id)
    if (onValueChange) {
      onValueChange(text, id);
    }
  };

  return (
    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
      <View style={btnTxtStyles}>
        <Text>{text}</Text>
      </View>
      {Array.from({length: choicesCount}).map((item, index) => (
      <Checkbox
        id={index}
        btnstyles={btnstyles}
        btnstylesSelect={btnstylesSelect}
        selectedIndex={selectedIndex}
        onCheckboxChange={handleCheckboxChange}
      />
      ))}
    </View>
  );
};

export default Choice;