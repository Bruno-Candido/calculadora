import { StyleSheet, Text, Dimensions, TouchableHighlight } from 'react-native'
import { isPropertySignature } from 'typescript'

interface Props {
    title: string
    double?: boolean
    triple?: boolean
}

export function Button({ title, double, triple, ...rest}:Props){
    const stylesButton = [styles.button]
    if(double) stylesButton.push(styles.buttonDouble)
    if(triple) stylesButton.push(styles.buttonDouble)
    return(
        <TouchableHighlight { ...rest }>
            <Text style={stylesButton}>{title}</Text>
        </TouchableHighlight>
    )
}

const styles = StyleSheet.create({
    button:{
        fontSize: 40,
        height: Dimensions.get('window').width / 4,
        width: Dimensions.get('window').width / 4 ,
        padding: 20,
        backgroundColor: '#f0f0f0',
        textAlign: 'center',
        borderWidth: 1,
        borderColor: '#888'
    },
    operationButton:{
        color: '#fff',
        backgroundColor: '#fa8231'
    },
    buttonDouble: {
        width: (Dimensions.get('window').width / 4) * 2,
    },
    buttonTriple:{
        width: (Dimensions.get('window').width / 4) * 3,
    }
})