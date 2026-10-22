import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

export default function SplashScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.sun}>☀️</Text>
      <Text style={styles.rainbow}>🌈</Text>

      <Text style={styles.title}>
        <Text style={{ color: '#5B9BF0' }}>Ma{'\n'}</Text>
        <Text style={{ color: '#F26B8A' }}>G</Text>
        <Text style={{ color: '#F5A623' }}>a</Text>
        <Text style={{ color: '#4CC38A' }}>r</Text>
        <Text style={{ color: '#5B9BF0' }}>d</Text>
        <Text style={{ color: '#F26B8A' }}>e</Text>
        <Text style={{ color: '#F5A623' }}>r</Text>
        <Text style={{ color: '#4CC38A' }}>i</Text>
        <Text style={{ color: '#5B9BF0' }}>e</Text>
      </Text>

      <View style={styles.pill}>
        <Text style={styles.pillText}>Bienvenue dans notre garderie</Text>
      </View>

      <Image source={require('../assets/garderie.png')} style={styles.image} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFF3E6', alignItems: 'center', justifyContent: 'center', padding: 24 },
  sun: { fontSize: 80, position: 'absolute', top: 60, left: 30 },
  rainbow: { fontSize: 70, position: 'absolute', top: 90, right: 30 },
  title: { fontSize: 54, fontWeight: '900', textAlign: 'center', lineHeight: 62, marginTop: 60 },
  pill: { backgroundColor: '#FFD9E2', paddingHorizontal: 22, paddingVertical: 10, borderRadius: 30, marginTop: 16 },
  pillText: { color: '#E0506F', fontSize: 16, fontWeight: '600' },
  image: { width: 240, height: 240, resizeMode: 'contain', marginTop: 24 },
});