import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  View,
  FlatList,
  Text,
  SafeAreaView,
} from 'react-native';

export default function StatsTab(props) {

  return (
    <View style={styles.container}>
      <Text>statistics on worries.</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});