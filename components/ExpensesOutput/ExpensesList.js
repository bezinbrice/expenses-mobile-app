import { View, Text, StyleSheet, FlatList } from 'react-native';
import ExpenseItem from './ExpenseItem';

function renderExpensesItem(itemData) {
  return (
    <ExpenseItem {...itemData.item} />
  )
}

const ExpensesList = ({ expenses }) => {
  return (
    <View>
      <FlatList 
      data={expenses} 
      renderItem={renderExpensesItem}
      keyExtractor={(item) => item.id} />
    </View>
  );
};

export default ExpensesList;