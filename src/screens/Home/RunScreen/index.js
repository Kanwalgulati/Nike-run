import {View, Text, Pressable} from 'react-native';
import React from 'react';

const RunScreen = () => {
  return (
    //TODO Google Maps API/Image
    //TODO Metric - Button to change the metric value
    //TODO Start Button
    //TODO Toggle Button to change the metric from distance or time

    <View
      style={{
        height: '100%',
        width: '100%',
        justifyContent: 'space-between',
        alignItems: 'center',
      }}>
      <Pressable>
        <Text style={{fontSize: 42, fontWeight: 'bold'}}>2.01</Text>
        <View></View>
        <Text>Kilometer</Text>
      </Pressable>
    </View>
  );
};

export default RunScreen;
