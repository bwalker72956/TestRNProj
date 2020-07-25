/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import {
  Alert,
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {images} from '../images';

declare const global: {HermesInternal: null | {}};

const Home: React.FC = () => {
  const throwAlert = () => {
    return Alert.alert(
      'Alert Title',
      'My Alert Msg',
      [
        {
          text: 'Ask me later',
          onPress: () => console.log('Ask me later pressed'),
        },
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ],
      {cancelable: false},
    );
  };

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView style={styles.root}>
        <ScrollView style={styles.outerContainer}>
          <View style={styles.outerContainer}>
            <View style={styles.header}>
              <Image style={styles.image} source={images.logo} />
              <TouchableOpacity onPress={throwAlert}>
                <Text style={styles.headerText}>Menu</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.content}>
              <Text style={styles.hireTopTalent}>
                Hire the Top 3% of Freelance Talent®
              </Text>
              <Text style={[styles.bodyText, {alignSelf: 'center'}]}>
                Toptal is an exclusive network of the top freelance software
                developers, designers, finance experts, product managers, and
                project managers in the world. Top companies hire Toptal
                freelancers for their most important projects.
              </Text>
              <View style={{alignItems: 'center', padding: 5}}>
                <TouchableOpacity
                  style={styles.hireButton}
                  onPress={throwAlert}>
                  <Text style={styles.hireButtonText}>Hire Top Talent</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  root: {
    flex: 1,
  },
  outerContainer: {
    backgroundColor: '#D2D6E1',
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 15,
  },
  headerText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  image: {
    width: 100,
    height: 25,
  },
  scrollViewContent: {
    backgroundColor: 'red',
  },
  touchableOpacity: {
    height: 45,
    padding: 25,
  },
  buttonContainer: {
    backgroundColor: 'blue',
    borderRadius: 25,
    borderWidth: 2,
    borderColor: 'brown',
  },
  title: {
    fontSize: 25,
    alignSelf: 'center',
    flex: 1,
    padding: 10,
  },
  content: {
    flex: 1,
    paddingHorizontal: 5,
  },
  hireTopTalent: {
    alignSelf: 'center',
    fontSize: 25,
  },
  bodyText: {
    fontSize: 15,
  },
  hireButton: {
    backgroundColor: 'green',
    width: 150,
    alignItems: 'center',
    padding: 15,
    borderRadius: 5,
  },
  hireButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Home;
