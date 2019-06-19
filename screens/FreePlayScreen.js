import React from 'react';
import {
  Image,
  Platform,
  Button,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ToastAndroid,
  FlatList,
} from 'react-native';

//import { MonoText } from '../components/StyledText';

export default class DemoScreen extends React.Component {
  static navigationOptions = {
    title: 'FreePlay',
  };

    constructor(props){
        super(props);
    }

    playSound(no){
        // TODO Doldur
    }

    render() {
    return (
      <View style={styles.container}>
        <ScrollView style={styles.container} contentContainerStyle={styles.contentContainer}>
          <View style={styles.welcomeContainer}>
            <Text>
                {"Free Play Mode!"}
            </Text>
          </View>

          <View style={styles.drumButtons}>
              <TouchableOpacity style={styles.button}
                  onPressIn={() => this.playSound(1)}>
                <Text>Dum Dum</Text>
              </TouchableOpacity>
                <TouchableOpacity style={styles.button}
                    onPressIn={() => this.playSound(2)}>
                    <Text>Tek Tek</Text>
                </TouchableOpacity>

            </View>
          <View style={styles.getStartedContainer}>
              <Button
                  onPress={() => this.props.navigation.goBack()}
                title="Go Back"/>
        </View>


        {/**********  DEBUGGING THINGS **********/}


                {/* <Text>{this.state.debugText}</Text> */}
        </ScrollView>

        <View style={styles.tabBarInfoContainer}>
          <Text style={styles.tabBarInfoText}>This is a tab bar. You can edit it in:</Text>

        </View>
      </View>
    );
    }
}


const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#0088FF',
        padding: 20
    },
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
    drumButtons: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 20,
        margin: 20,
    },
  developmentModeText: {
    marginBottom: 20,
    color: 'rgba(0,0,0,0.4)',
    fontSize: 14,
    lineHeight: 19,
    textAlign: 'center',
  },
  contentContainer: {
    paddingTop: 30,
  },
  welcomeContainer: {
    alignItems: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  welcomeImage: {
    width: 100,
    height: 80,
    resizeMode: 'contain',
    marginTop: 3,
    marginLeft: -10,
  },
  getStartedContainer: {
    alignItems: 'center',
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightText: {
    color: 'rgba(96,100,109, 0.8)',
  },
  codeHighlightContainer: {
    backgroundColor: 'rgba(0,0,0,0.05)',
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    lineHeight: 24,
    textAlign: 'center',
  },
  tabBarInfoContainer: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    ...Platform.select({
      ios: {
        shadowColor: 'black',
        shadowOffset: { height: -3 },
        shadowOpacity: 0.1,
        shadowRadius: 3,
      },
      android: {
        elevation: 20,
      },
    }),
    alignItems: 'center',
    backgroundColor: '#fbfbfb',
    paddingVertical: 20,
  },
  tabBarInfoText: {
    fontSize: 17,
    color: 'rgba(96,100,109, 1)',
    textAlign: 'center',
  },
  navigationFilename: {
    marginTop: 5,
  },
  helpContainer: {
    marginTop: 15,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    fontSize: 14,
    color: '#2e78b7',
  },
});
