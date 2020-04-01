import React from "react";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { View, Image, Text, Button, TouchableOpacity } from "react-native";

import logoImg from "../../assets/logo.png";
import styles from "./styles";

export default function Detail() {
  const navigation = useNavigation();

  function navigationBack() {
    navigation.navigate("Incidents");
  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image source={logoImg} />
        <TouchableOpacity onPress={navigationBack}>
          <Feather name="arrow-left" size={16} color="#E02041" />
        </TouchableOpacity>
      </View>

      <View style={styles.incident}>
        <Text style={[styles.incidentProperty, { marginTop: 0}]}>CASO:</Text>
        <Text style={styles.incidentValue}>
          Consulta para elemento a quem damos apoio.
        </Text>

        <Text style={styles.incidentProperty}>ONG:</Text>
        <Text style={styles.incidentValue}>A Casa</Text>

        <Text style={styles.incidentProperty}>CASO:</Text>
        <Text style={styles.incidentValue}>
          Consulta para elemento a quem damos apoio. Ele precisa de ser avaliado
          por um profissional, padece de doença crónica.
        </Text>

        <Text style={styles.incidentProperty}>VALOR:</Text>
        <Text style={styles.incidentValue}>20€</Text>
      </View>

      <View style={styles.contactBox}>
        <Text style={styles.heroTitle}>Salve o dia!</Text>
        <Text style={styles.heroTitle}>Seja o herói desse caso.</Text>
        <Text style={styles.heroDescription}>Entre em contacto:</Text>
        <View style={styles.actions}>
            <TouchableOpacity 
                style={styles.action}
                onPress={() => {}}
            >
                <Text style={styles.actionText}>WhatsApp</Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={styles.action}
                onPress={() => {}}
            >
                <Text style={styles.actionText}>E-mail</Text>
            </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}