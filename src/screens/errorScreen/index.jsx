import React from 'react';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
// components
import Container from '../../components/container';
// helper
import {COLORS, FONTS} from '../../helper';

const ErrorScreen = ({errorMessage, onRetry}) => {
  return (
    <Container style={styles.container}>
      <Text style={styles.errorTitle}>Something went wrong</Text>
      <Text style={styles.error}>Issue : {errorMessage}</Text>
      <TouchableOpacity style={styles.retryButton} onPress={onRetry}>
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>
    </Container>
  );
};
export default ErrorScreen;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorTitle: {
    marginHorizontal: '5%',
    fontFamily: FONTS.SemiBold,
    color: 'red',
    fontSize: 16,
  },
  error: {
    marginHorizontal: '5%',
    fontFamily: FONTS.Medium,
    color: COLORS.black,
    fontSize: 14,
    marginTop: '2%',
  },
  retryButton: {
    backgroundColor: COLORS.black,
    paddingHorizontal: '5%',
    paddingVertical: '2%',
    borderRadius: 10,
    marginTop: '4%',
  },
  retryText: {
    fontFamily: FONTS.Medium,
    color: COLORS.white,
    fontSize: 16,
  },
});
