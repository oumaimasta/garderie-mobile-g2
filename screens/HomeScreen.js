import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const DRAWER_ITEMS = [
  { key: 'accueil', label: 'Accueil', icon: 'home-outline' },
  { key: 'menus', label: 'Menus', icon: 'restaurant-outline' },
  { key: 'apropos', label: 'À propos', icon: 'information-circle-outline' },
];

export default function HomeScreen() {
  const [drawerOpen, setDrawerOpen] = useState(false);

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Ionicons name="menu" size={26} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Ma Garderie</Text>
        <View style={styles.actions}>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="search" size={24} color="#fff" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconBtn}>
            <Ionicons name="notifications" size={24} color="#fff" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Contenu */}
      <Text style={styles.sectionTitle}>Menus du jour</Text>

      {/* FAB */}
      <TouchableOpacity style={styles.fab}>
        <Ionicons name="add" size={32} color="#fff" />
      </TouchableOpacity>

      {/* Drawer */}
      <Modal visible={drawerOpen} transparent animationType="fade" onRequestClose={() => setDrawerOpen(false)}>
        <View style={styles.overlay}>
          <SafeAreaView style={styles.drawer}>
            <Text style={styles.drawerHeader}>Ma Garderie</Text>
            {DRAWER_ITEMS.map((item) => (
              <TouchableOpacity key={item.key} style={styles.drawerItem}>
                <Ionicons name={item.icon} size={22} color="#E67E22" />
                <Text style={styles.drawerLabel}>{item.label}</Text>
              </TouchableOpacity>
            ))}
          </SafeAreaView>
          <Pressable style={styles.backdrop} onPress={() => setDrawerOpen(false)} />
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#FFFBF5' },
  appBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#E67E22', paddingHorizontal: 16, paddingVertical: 14 },
  appBarTitle: { flex: 1, color: '#fff', fontSize: 20, fontWeight: 'bold', marginLeft: 16 },
  actions: { flexDirection: 'row' },
  iconBtn: { marginLeft: 16 },
  sectionTitle: { fontSize: 22, fontWeight: 'bold', margin: 16, color: '#333' },
  fab: { position: 'absolute', right: 20, bottom: 30, width: 58, height: 58, borderRadius: 29, backgroundColor: '#E67E22', alignItems: 'center', justifyContent: 'center', elevation: 6 },
  overlay: { flex: 1, flexDirection: 'row' },
  drawer: { width: 260, backgroundColor: '#fff', paddingTop: 20 },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
  drawerHeader: { fontSize: 22, fontWeight: 'bold', color: '#E67E22', padding: 20 },
  drawerItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 20 },
  drawerLabel: { fontSize: 17, marginLeft: 14, color: '#333' },
});