/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, {useCallback, PropsWithChildren} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Linking,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

type GithubButtonProps = {
  url: string;
  children: string;
};

type OtherLinksProps = {
  url: string;
  children: string;
};

const GenericLink = ({url, children}: OtherLinksProps) => {
  return <Text
  onPress={() => Linking.openURL(url)} style={{color:'#00deff'}}>
    {children}
  </Text>
}

const GithubButton = ({url, children}: GithubButtonProps) => {
  return <Button title={children} onPress={() => Linking.openURL(url)} />;
};

function App(): React.JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const githubURL = 'https://github.com/LmOpe/HNG_MOBILE';
  const delveURL = 'https://delve.fun'
  const hngURL = 'http://hng.tech/hire/react-native-developers'
  const telexURL = 'https://Telex.im'


  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentInsetAdjustmentBehavior="automatic"
        style={backgroundStyle, {paddingVertical: 50}}>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }}>
            <Text style={styles.intro}
            >Hello there, Muhammed here!!</Text>          
        </View>
        <View
          style={{
            backgroundColor: isDarkMode ? Colors.black : Colors.white,
          }, styles.box, styles.section}>
            <View style={styles.box}>
              <Text style={styles.text}>This is the very beginning of my HNG internship,
              checkout the code for this app on 👇</Text>
              <GithubButton url={githubURL}>
                Github
              </GithubButton>
            </View> 
            <Text style={{color:'#fff'}}>
              If you are looking to hire react native developers, you can take a look at <Text url={hngURL} 
              onPress={() => Linking.openURL(hngURL)} style={{color:'#00deff'}}>
                HNG React native developers platform
                </Text>
            </Text>
            <Text style={{color:'#fff'}}>
              Useful links; <GenericLink url={telexURL}>Telex</GenericLink>,
              <GenericLink url={delveURL}> Delve</GenericLink>
            </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  intro: {
    width: "100vw",
    color:'rgb(5, 1, 54)',
    padding: 10,
    textAlign: 'center'
  },
  section: {
    marginVertical: 100,
    padding: 20,
    backgroundColor: 'rgb(0, 0, 59)',
    gap: 30
  },
  text: {
    color: 'rgb(255,255,255)',
    fontWeight: 700,
    fontSize: 14,
  },
  box: {
    display: 'flex',
    marginVertical: 10,
    flexDirection: "column",
    gap: 10
  }
});

export default App;
