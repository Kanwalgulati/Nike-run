import {View, Text, Pressable, Platform, TextInput} from 'react-native';
import React, {useState} from 'react';
import {Avatar} from '@rneui/themed';
import {styles} from './styles';
import {validateInput} from '../../../../constants/validations';

const RunScreen = () => {
  const [metricValue, setMetricValue] = useState('0.1');

  const changeMetricValueHandler = text => {
    //TODO For Distance
    //TODO to round off the number to 1 decimal eg : 2.5
    if (validateInput(text)) {
      setMetricValue(text);
    }
  };
  return (
    <View style={styles.mainContainer}>
      {/*//TODO Google Maps API/Image */}
      <Pressable onPress={() => console.warn('Open Model')}>
        <TextInput
          style={{
            ...styles.metricValue,
          }}
          keyboardType="decimal-pad"
          value={metricValue}
          onChangeText={changeMetricValueHandler}
        />
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
