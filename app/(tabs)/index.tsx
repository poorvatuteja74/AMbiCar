import React from 'react';
import { Image, StyleSheet, View, TouchableOpacity, Text } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient'; // Import LinearGradient

import { HelloWave } from '@/components/HelloWave';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import fpImage from '../../assets/images/fp.png';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={fpImage}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText style={styles.heading}>Transform Your Ride with Ambient Glow!</ThemedText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <ThemedText style={styles.bodyText}>
          Experience a new level of driving comfort with customizable ambient lighting that matches your mood.
        </ThemedText>
      </ThemedView>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button} onPress={() => alert('Button Pressed')}>
          <LinearGradient
            colors={['#37B6E9', '#4B4CED']} // Gradient colors
            style={styles.gradient}
          >
            <Text style={styles.buttonText}>Explore</Text>
          </LinearGradient>
        </TouchableOpacity>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flex: 1,
    justifyContent: 'center', // Center vertically
    alignItems: 'center', // Center horizontally
    padding: 30,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 400,
    width: '100%',
    position: 'absolute',
    bottom: 0,
    left: 0,
    top: 0,
  },
  heading: {
    fontSize: 24, // Adjust as needed
    fontWeight: 'bold',
    color: '#ffffff', // Dark blue color
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 18, // Adjust as needed
    color: '#ffffff', // Default text color
    textAlign: 'center',
  },
  buttonContainer: {
    alignItems: 'center',
    padding: 40,
  },
  button: {
    borderRadius: 5,
    overflow: 'hidden', // Ensures gradient does not spill out of button
  },
  gradient: {
    padding: 15,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff', // Button text color
    fontSize: 16,
    fontWeight: 'bold',
  },
});
