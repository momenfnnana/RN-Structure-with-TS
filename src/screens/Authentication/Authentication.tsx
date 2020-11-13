import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface AuthenticationProps {}

const Authentication = (props: AuthenticationProps) => {
  return (
    <View style={styles.container}>
      <Text>Authentication</Text>
    </View>
  );
};

export default Authentication;

const styles = StyleSheet.create({
  container: {}
});
