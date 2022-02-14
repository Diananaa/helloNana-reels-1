import React, { useState } from 'react'
import { BackHandler, Image, Modal, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { IconCall, IconCamera, IconClose, IconMute, IconSpeaker } from '../../images'

const Navigation = () => {
    const [modalVisible, setModalVisible] = useState(false)
    return (
        <View style={styles.centeredView}>
            <Modal
                animationType="slide"
                transparent={true}
                visible={modalVisible}

            >
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Text style={styles.modalText}>Silahkan dicari terlebih dulu
                            <Text style={styles.bold}> Ayang</Text>, makanya jangan banyak menghalu Awokwok </Text>
                        <TouchableOpacity
                            style={styles.btnClose}
                            onPress={() => setModalVisible(!modalVisible)}
                        >
                            <Image source={IconClose} style={styles.imgBtn} />
                        </TouchableOpacity>

                        <View style={styles.row}>
                            <TouchableOpacity
                                style={[styles.button, styles.btnSearch]}
                                onPress={() => setModalVisible(!modalVisible)}
                            >
                                <Text style={styles.textStyle}>Mencari baru</Text>
                            </TouchableOpacity>

                            <TouchableOpacity
                                style={[styles.button, styles.btnNext]}
                                onPress={()=> BackHandler.exitApp()}>
                                <Text style={styles.textStyle}>Lanjut coding</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </Modal>
            <View style={styles.container}>
                <Image source={IconSpeaker} style={styles.icon} />
                <Image source={IconCamera} style={styles.icon} />
                <Image source={IconMute} style={styles.icon} />
                <TouchableOpacity style={[styles.button, styles.buttonOpen]}
                    onPress={() => setModalVisible(true)} TouchableOpacity={0.8}>
                    <Image source={IconCall} style={styles.imgBtn} />
                </TouchableOpacity>
            </View>
        </View>
    )
}
export default Navigation;

const styles = StyleSheet.create({
    btnNext: {
        backgroundColor: "#FFBDCA",
    },
    btnSearch: {
        backgroundColor: "#BFFDF2",
    },
    row: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    btnClose: {
        width: 30,
        height: 30,
        position: 'absolute',
        top: 10,
        right: 10
    },
    bold: {
        fontWeight: 'bold',
    },
    container: {
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: 70,
        backgroundColor: '#1C6052',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    icon: {
        width: 25,
        height: 25,
    },
    btnCancel: {
        backgroundColor: '#E91C43',
        width: 50,
        height: 50,
        borderRadius: 50,
        padding: 10,
        alignItems: 'center',
        justifyContent: "center"
    },
    imgBtn: {
        width: 25,
        height: 25
    },


    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 20,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2
    },
    buttonOpen: {
        backgroundColor: '#E91C43',
    },
    buttonClose: {
        backgroundColor: "#2196F3",
    },
    textStyle: {
        color: "#0E352E",
        fontWeight: "bold",
        textAlign: "center",
        fontSize : 20
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: 'black',
        fontSize: 27
    }


})
