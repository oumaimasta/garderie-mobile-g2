import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Modal, Pressable, FlatList, Alert, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Ionicons } from '@expo/vector-icons';

const BLUE = '#5B9BF0';

const DRAWER_ITEMS = [
  { key: 'accueil', label: 'Accueil', icon: 'home-outline' },
  { key: 'menus', label: 'Menus', icon: 'restaurant-outline' },
  { key: 'apropos', label: 'À propos', icon: 'information-circle-outline' },
];

const MENUS = [
  { id: 1, titre: 'Petit déjeuner', description: 'Lait, céréales et fruits', icone: '🥣' },
  { id: 2, titre: 'Déjeuner', description: 'Poulet, riz et légumes', icone: '🍲' },
  { id: 3, titre: 'Goûter', description: 'Biscuit et compote de pomme', icone: '🍪' },
  { id: 4, titre: 'Jus de fruits', description: "Jus d'orange naturel", icone: '🍊' },
  { id: 5, titre: 'Fruits frais', description: 'Une sélection de fruits de saison', icone: '🍎' },
];

const ICON_BG = { 1: '#E3EEFF', 2: '#E6F6E6', 3: '#FFE6EC', 4: '#FFF3D6', 5: '#FFE3E3' };

export default function HomeScreen() {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [selected, setSelected] = useState('accueil');

  const onSearch = () => Alert.alert('Recherche', 'Rechercher un menu');
  const onNotifications = () => Alert.alert('Notifications', 'Aucune notification');
  const onAdd = () => Alert.alert('Ajout', 'Ajouter un menu');
  const onSelectMenu = (item) => Alert.alert('Menu sélectionné', item.titre);
  const onSelectDrawer = (item) => {
    setSelected(item.key);
    setDrawerOpen(false);
  };

  const renderHeader = () => (
    <View>
      <View style={styles.banner}>
        <View style={{ flex: 1 }}>
          <Text style={styles.bannerTitle}>Bonjour !</Text>
          <Text style={styles.bannerText}>Quel plaisir de vous revoir à la garderie !</Text>
        </View>
        <Text style={styles.bannerEmoji}>👧🧒</Text>
      </View>
      <View style={styles.sectionRow}>
        <Ionicons name="restaurant" size={24} color={BLUE} />
        <Text style={styles.sectionTitle}>Menus du jour</Text>
      </View>
    </View>
  );

  return (
    <SafeAreaView style={styles.container} edges={['top']}>
      {/* AppBar */}
      <View style={styles.appBar}>
        <TouchableOpacity onPress={() => setDrawerOpen(true)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.appBarTitle}>Ma Garderie</Text>
        <TouchableOpacity style={styles.iconBtn} onPress={onSearch}>
          <Ionicons name="search" size={24} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.iconBtn} onPress={onNotifications}>
          <Ionicons name="notifications" size={24} color="#fff" />
        </TouchableOpacity>
      </View>

      {/* Liste */}
      <FlatList
        data={MENUS}
        keyExtractor={(item) => String(item.id)}
        ListHeaderComponent={renderHeader}
        contentContainerStyle={{ padding: 16, paddingBottom: 110 }}
        renderItem={({ item }) => (
          <TouchableOpacity style={styles.card} onPress={() => onSelectMenu(item)}>
            <View style={[styles.iconBox, { backgroundColor: ICON_BG[item.id] }]}>
              <Text style={styles.cardIcon}>{item.icone}</Text>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.cardTitle}>{item.titre}</Text>
              <Text style={styles.cardDesc}>{item.description}</Text>
            </View>
            <Ionicons name="chevron-forward" size={22} color="#999" />
          </TouchableOpacity>
        )}
      />

      {/* FAB */}
      <TouchableOpacity style={styles.fab} onPress={onAdd}>
        <Ionicons name="add" size={34} color="#fff" />
      </TouchableOpacity>

      {/* Drawer */}
      <Modal visible={drawerOpen} transparent animationType="fade" onRequestClose={() => setDrawerOpen(false)}>
        <View style={styles.overlay}>
          <SafeAreaView style={styles.drawer}>
            <Text style={styles.drawerHeader}>Ma Garderie</Text>
            {DRAWER_ITEMS.map((item) => (
              <TouchableOpacity
                key={item.key}
                style={[styles.drawerItem, selected === item.key && styles.drawerItemActive]}
                onPress={() => onSelectDrawer(item)}
              >
                <Ionicons name={item.icon} size={22} color={BLUE} />
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
  container: { flex: 1, backgroundColor: '#FFF5F8' },
  appBar: { flexDirection: 'row', alignItems: 'center', backgroundColor: BLUE, paddingHorizontal: 16, paddingVertical: 14 },
  appBarTitle: { flex: 1, color: '#fff', fontSize: 22, fontWeight: 'bold', textAlign: 'center' },
  iconBtn: { marginLeft: 14 },

  banner: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#FFE0EA', borderRadius: 20, padding: 18, marginBottom: 18 },
  bannerTitle: { fontSize: 24, fontWeight: 'bold', color: '#2C3E75' },
  bannerText: { fontSize: 13, color: '#555', marginTop: 4 },
  bannerEmoji: { fontSize: 48 },

  sectionRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  sectionTitle: { fontSize: 20, fontWeight: 'bold', color: '#2C3E75', marginLeft: 8 },

  card: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#fff', borderRadius: 16, padding: 12, marginBottom: 12, elevation: 2 },
  iconBox: { width: 56, height: 56, borderRadius: 14, alignItems: 'center', justifyContent: 'center', marginRight: 14 },
  cardIcon: { fontSize: 30 },
  cardTitle: { fontSize: 17, fontWeight: 'bold', color: '#2C3E75' },
  cardDesc: { fontSize: 13, color: '#777', marginTop: 3 },

  fab: { position: 'absolute', right: 20, bottom: 30, width: 60, height: 60, borderRadius: 30, backgroundColor: BLUE, alignItems: 'center', justifyContent: 'center', elevation: 6 },

  overlay: { flex: 1, flexDirection: 'row' },
  drawer: { width: 270, backgroundColor: '#fff', paddingTop: 20 },
  backdrop: { flex: 1, backgroundColor: 'rgba(0,0,0,0.4)' },
  drawerHeader: { fontSize: 24, fontWeight: 'bold', color: BLUE, padding: 20 },
  drawerItem: { flexDirection: 'row', alignItems: 'center', paddingVertical: 14, paddingHorizontal: 20 },
  drawerItemActive: { backgroundColor: '#E3EEFF' },
  drawerLabel: { fontSize: 17, marginLeft: 14, color: '#333' },
});