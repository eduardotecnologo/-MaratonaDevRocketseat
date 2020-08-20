import React, { ReactNode } from 'react';
import { View, Image, Text} from 'react-native';
import { BorderlessButton } from 'react-native-gesture-handler';

import backIcon from '../../assets/images/icons/back.png';
import logoImage from '../../assets/images/MestreLogo.png';
import styles from './styles';
import { useNavigation } from '@react-navigation/native';

interface PageHeaderProps{
  title: string;
  headerRight?: ReactNode;
}

const PageHeader: React.FC<PageHeaderProps> = ({ title, headerRight, children }) => {
  const {navigate} = useNavigation();
  function handleGoBack(){
    navigate('Landing');
  }

  return (
    <View style={styles.container} >
      <View style={styles.topBar}>
        <BorderlessButton onPress={handleGoBack}>
          <Image source={backIcon} resizeMode="contain"/>
        </BorderlessButton>
        <Image source={logoImage} style={styles.logo} resizeMode="contain" />
      </View>

      <View style={styles.header}>
      <Text style={styles.title}>{title}</Text>
        {headerRight}
      </View>

      {children}
    </View>
    )
}
export default PageHeader;