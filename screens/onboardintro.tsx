/**
 * first Initial onboarding screen after splashscreen
 * @returns {JSX.Element}
 * @function
 */
import {Text, 
        SafeAreaView, 
        StyleSheet, 
        View, 
        Image,
        FlexStyle} from 'react-native';
import {useState} from 'react';
import StyledButton from '../components/TLPButton';

type displayflex = FlexStyle['display']




export default function onboardIntro(): JSX.Element {
  const [displayFlex, setDisplayFlex] = useState('flex');
  const [displayNone, setDisplayNone] = useState('none');

  

  const onPress = false;
  const icon = false;

  setTimeout(() => setDisplayFlex('none'), 5000);
  setTimeout(() => setDisplayNone('flex'), 5000);

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.image} source={require('./assets/humming_bird.png')} />
      </View>
      <View style={[styles.textWrapper1, {display:displayFlex as displayflex}]}>
        <Text style={styles.introText1}>
          Mabríka! 
        </Text>
        <Text style={styles.introText1}>
          Welcome to Learn Taíno! 
        </Text>
      </View>
      <View style={[styles.textWrapper2, {display:displayNone as displayflex}]} >
        <Text style={styles.introText2}>
          Whether you are looking to reconnect with your Taíno ancestry or are curious about Taíno culture, I welcome you to join me here at Learn Taíno!
        </Text>
      </View>
      <View style={styles.buttonWrapper}>
        <StyledButton buttonProps= {{title:'Continue', titleColor:'#101828', titleSize:30, backgroundColor:'#475467', width:390, accessibilityLabel:'Button'}} onPress={onPress} icon={icon} />
      </View>
    </SafeAreaView>
  );
}

    // title={'Continue'}
    // titleColor={'#101828'}
    // titleSize={30}
    // backgroundColor={'#475467'}
    // width= {390}
    // accessibilityLabel={'Button'}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  imageContainer: {
    display: 'flex',
    paddingTop: 192,
    // paddingLeft: 80,
    paddingBottom: 144,
    // paddingRight: 80,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 16,
  },
  image: {
      width: 133.598,
      height: 128,
  },
  textWrapper1: {
    flexDirection: 'column',
    width: 380,
    paddingHorizontal: 16,
    paddingVertical: 0,
    alignItems: 'center',

    gap: 0,
    flex: 1,
    alignSelf: 'stretch',
  },
  introText1: {
    color:  '#101828',
    textAlign: 'center',
    fontFamily: 'Inter',
    fontSize: 36,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 44, /* 122.222% */
    letterSpacing: -0.72,
  },
  textWrapper2: {
    display: 'flex',
    width: 326,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
  introText2: {
    color: '#475467',
    /* Text lg/Regular */
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 28, /* 155.556% */
      },
  buttonWrapper: {
    display: 'flex',
    width: 'auto',
    paddingVertical: 32,
    paddingHorzitonal: 48,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
});
