import { Image, StyleSheet, Platform, View } from 'react-native';

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
    top:0,
  },
  heading: {
    fontSize: 24, // Adjust as needed
    fontWeight: 'bold',
    color: '#003366', // Dark blue color
    textAlign: 'center',
  },
  bodyText: {
    fontSize: 16, // Adjust as needed
    color: '#000', // Default text color
    textAlign: 'center',
  },
  highlighted: {
    fontWeight: '600',
  },
});
