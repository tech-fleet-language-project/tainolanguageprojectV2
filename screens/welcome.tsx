import {View, Text, Image, StyleSheet} from 'react-native';
import ProgressStep from '../components/ProgressStep';
import StyledButton from '../components/TLPButton';




export default function Welcome(): JSX.Element {

  return (
    <View style={styles.welcomeContainer}>
      <ProgressStep  id={1} />
      <View style={styles.textWrapper}>
        <Text style={styles.text}>
          The Taíno People
        </Text>
        <Image style={styles.image} source={require('../assets/snack-icon.png')}/>
        <Text style={styles.mainText}>
          The Taíno are an Indigenous people of the Americas and the original inhabitants of the Caribbean islands and parts of the southern U.S. Due to European colonization, which started with the first encounter in 1492, many Taíno people hid or were killed.
        </Text>
      </View>

      <View style={styles.buttonWrapper}>
        <StyledButton   
            title={'Continue'}
            titleColor={'#101828'}
            titleSize={30}
            backgroundColor={'#475467'}
            width= {310}
            height={48}
            accessibilityLabel={'Button'}
            onPress= {() => {}}
            icon={false}
         />  
      </View>
    </View>
  )
}



const styles = StyleSheet.create({
  welcomeContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  textWrapper: {
    display: 'flex',
    width: 390,
    paddingTop: 32,
    paddingRight: 32,
    paddingBottom: 16,
    paddingLeft: 32,
    flexDirection: 'column',
    alignItems: 'center',
    gap: 64,
  },
  text: {
    color: '#333',
    fontFamily: 'Inter',
    fontSize: 32,
    fontStyle: 'normal',
    fontWeight: '600',
    lineHeight: 32, /* 75% */
  },
  image: {
    display: 'flex',
    width: 313,
    height: 129,
    paddingTop: 44,
    paddingRight: 0,
    paddingBottom: 45,
    paddingLeft: 0,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mainText: {
    color: '#000',
    fontFamily: 'Inter',
    fontSize: 16,
    fontstyle: 'normal',
    fontWeight: '400',
    lineHeight: 28, /* 175% */
  },
  buttonWrapper: {
    display: 'flex',
    width: 'auto',
    paddingVertical: 48,
    paddingHorizontal: 32,
    flexDirection: 'column',
    alignItems: 'flex-start',
    gap: 16,
  },
})