import {Text, View, StyleSheet} from "react-native";


const task = (props) => {


    return (
        <View style={styles.item}>
            <View style={styles.itemLeft}>
                <View style={styles.square}></View>
                <Text style={styles.itemText}>{props.text}</Text>
            </View>
            <View style={styles.tick}>

            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    item: {
        backgroundColor: '#FFF',
        padding: 15,
        borderRadius: 10,
        marginBottom: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    },
    itemLeft: {
        flexDirection: 'row',
        alignItems: 'center',
        flexWrap: 'wrap',

    },
    square: {
        width: 24,
        height: 24,
        backgroundColor: '#55BCF6',
        opacity: 0.4,
        borderRadius: 5,
        marginRight: 15,

    },
    itemText:{
        maxWidth: '80%',
    },
    tick: {
        width: 12,
        height: 12,
        borderColor: '55BCF6',
        borderWidth: 2,
        borderRadius: 5,
    },
})  

export default task;