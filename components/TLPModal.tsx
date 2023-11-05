import React, {useState} from 'react';
import { 
    Alert, 
    Modal, 
    StyleSheet, 
    Text, 
    Pressable, 
    View, 
    Image, 
    ImageProps } from 'react-native';

type modalprops = {
    animationType: string,
    visible: boolean,
    onRequestClose: Function,
    transparent: boolean,
    modalImage: string,
    modalText: string,
}

export default function TLPModal (modalProps) {
  const {
    animationType = modalProps.animationType,
    visible = modalProps.animationType,
    onRequestClose = modalProps.onRequestClose,
    transparent = modalProps.transparent,
    modalImage = modalProps.modalImage,
    modalText = modalProps.modalText,

  } = modalProps;

  const [mobalVisible, setModalVisible] = useState(false);

  return (
    <Modal
    style={styles.modalContainer}
    animationType = {animationType}
    visible = {visible}
    onRequestClose = {() = setModalVisible(!mobalVisible)}
    transparent = {transparent}
    {children}

    >{children}
    </Modal>
    
  )
};

const ModalHeader = ({title}:{title:string}) => {
  <View style={styles.modalHeader}>
    <Text style={styles.modalText}>{title}</Text>
  </View>  
}

const ModalImage = ({image}:{image?:ImageProps}) => {
    <Image source={require('../assets/images/favicon.png')} />
}

const ModalText = ({text}:{text:string}) => {
    <View style={styles.modalTextContainer}><Text style={styles.modalText}>{text}</Text></View>

}

const ModalBody = ({children}:{children?:React.ReactNode}) => {
    <View style={styles.modalBody}>{children}</View>

}
const ModalFooter = ({children}:{children?:React.ReactNode}) => {
    <View style={styles.modalFooter}>{children}</View>

}

const styles = {
    modalContainer: {},
    modalHeader: {},
    modalImage: {},
    modalTextContainer: {},
    modalText: {},
    modalBody: {},
    modalFooter: {},
}