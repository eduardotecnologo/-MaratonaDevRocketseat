import React from 'react';
import { View } from 'react-native';
import styles from './styles';
import PageHeader from '../PageHeader';


function Favorites() {
  return (
          <View style={styles.container}>
            <PageHeader title="Meus Mestres Favoritos" />
          </View>)
}
export default Favorites;