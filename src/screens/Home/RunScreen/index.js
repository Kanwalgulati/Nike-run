import {View, Text, Pressable, Platform} from 'react-native';
import React from 'react';
import {Avatar} from '@rneui/themed';
import {styles} from './styles';

const RunScreen = () => {
  return (
    <View style={styles.mainContainer}>
      {/*//TODO Google Maps API/Image */}
      <Pressable onPress={() => console.warn('Open Model')}>
        <Text style={styles.metricValue}>2.01</Text>
        <Text style={styles.metricUnit}>Kilometer</Text>
      </Pressable>
      <View style={styles.bottomContainer}>
        <Avatar
          size={120}
          rounded
          title="Start"
          activeOpacity={0.7}
          titleStyle={styles.avatarTitle}
          onPress={() => console.warn('works')}
          containerStyle={styles.avatarContainer}
        />
        <Pressable
          onPress={() => console.warn('Toggling')}
          style={styles.distanceHistoryContainer}>
          <Text style={styles.distanceHistoryText}>Distance</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default RunScreen;
