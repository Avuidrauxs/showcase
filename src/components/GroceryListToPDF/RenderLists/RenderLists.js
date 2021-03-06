import React from 'react';
import PropTypes from 'prop-types';

import { Text, View, StyleSheet } from '@react-pdf/renderer';



import List, { Item } from '../List/List';


import uuidv1 from 'uuid/v1';
// This component is related to creating PDF document









// @TODO move this selector away from this not a container like component.
import { getFullGrocery } from "../../../selectors/selector";



const styles = StyleSheet.create({
  title: {
    fontSize: 16,
    marginBottom: 10,
    color:"blue",
  },
  skills: {
    fontSize: 14,
    marginBottom: 10,
  },
});


const Lists = ({ department, ingredients }) => (
  <View>
    <Text style={styles.title}>
      {department}
    </Text>
    <List>
      {ingredients.map((ingredient) => <Item key={uuidv1()}>{ingredient}</Item>)}
    </List>
  </View>
);



// @TODO this is a bad situation where we have a passing data as it is - we use names, not id at not a main container - component
// and this will be hardly to catch later
const RenderLists = (props) => (
  <View>
    {getFullGrocery(props.groceryName2).map(item => (
      <Lists
        key={uuidv1()}
        department={item.department}
        ingredients={item.ingredients} />
    ))}
  </View>
);


Lists.propTypes = {
  name: PropTypes.string,
  skills: PropTypes.array,
};

export default RenderLists;
