import * as React from 'react'; 
import {View, StyleSheet,Text,TouchableOpacity} from 'react-native';

const Checkbox = ({
    id,
    btnstyles,
    btnstylesSelect,
    checked,
    selectedIndex,
    onCheckboxChange,
  }) => {
    return selectedIndex !== id ? (
      <TouchableOpacity
        style={btnstyles}
        onPress={() => {
          onCheckboxChange(id);
        }}></TouchableOpacity>
    ) : (
      <TouchableOpacity
        style={btnstylesSelect}
        onPress={() => {
          onCheckboxChange(id);
        }}></TouchableOpacity>
    )
      
  };
  
  export default Checkbox;