import {StyleSheet} from 'react-native';
import colors from '../../../../constants/colors';
export const styles = StyleSheet.create({
  mainContainer: {
    height: '100%',
    width: '100%',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 24,
    paddingVertical: 48,
  },
  metricValue: {
    fontSize: 42,
    fontWeight: 'bold',
    borderBottomWidth: 2,
    marginBottom: 4,
  },
  metricUnit: {alignSelf: 'center', fontSize: 16},
  bottomContainer: {justifyContent: 'space-between', alignItems: 'center'},
  avatarTitle: {
    fontSize: 28,
    textTransform: 'uppercase',
    color: '#000',
    fontWeight: 'bold',
  },
  avatarContainer: {backgroundColor: colors.startButton},
  distanceHistoryContainer: {
    padding: 12,
    borderWidth: 1,
    borderRadius: 28,
    borderColor: colors.distanceHistoryText,
    marginTop: 28,
  },
  distanceHistoryText: {fontSize: 14, fontWeight: 'bold'},
});
