import * as React from 'react';
import Choice from './src/Choice';
import ChoicesHeader from './src/ChoicesHeaders';
// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';

import {View, StyleSheet} from 'react-native';


const data = [
  { title: 'Instagram', /* extra properties(e.g. keys to save in db) */},
  { title: 'Facebook',  },
  { title: 'Twitter',   },
  { title: 'Linkdin',   },
];

const choicesHeaders=['1 hr', '2 hr', '3 hr', '4 hr'];

export default function App() {
  const handleValueChange = (socialMediaName, checkboxId) => {
    // do what ever you want with this two
  };

  return (

    <View style={styles.container}>
      <ChoicesHeader
        headersName={choicesHeaders}
        choicesHeaderStyles={styles.choicesHeader}
        choicesHeaderItemStyles={styles.choicesHeaderItem}
      />
      {data.map((x) => (
        <Choice
          text={x.title}
          btnTxtStyles={styles.btnTxtStyles}
          btnstyles={styles.btnstyles}
          btnstylesSelect={styles.btnstylesSelect}
          onValueChange={handleValueChange}
          choicesCount={choicesHeaders.length}
        />
      ))}
    </View>
  );
}

const checkBoxBaseStyles = {
    height: 30,
    width: 30,
    margin: 10,
};

const labelDimentions = {
  width: 100
};

const styles = StyleSheet.create({
  container:{
    marginLeft:20
  },
  btnstyles: {
    ...checkBoxBaseStyles,
    borderWidth: 1,
    borderColor: 'orange',
  },
  btnstylesSelect: {
    ...checkBoxBaseStyles,
    backgroundColor: 'orange',
  },
  btnTxtStyles: {
    ...labelDimentions,
  },
  choicesHeader: {
    marginTop:'20%',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: labelDimentions.width
  },
  choicesHeaderItem: {
    ...checkBoxBaseStyles,
    textAlign: 'center'
  },
});