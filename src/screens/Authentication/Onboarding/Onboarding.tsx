import React from 'react';
import { Text, View, StyleSheet } from 'react-native';

interface OnboardingProps {}

const Onboarding = (props: OnboardingProps) => {
  return (
    <View style={styles.container}>
      <Text>Onboarding Screen</Text>
    </View>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  container: {}
});