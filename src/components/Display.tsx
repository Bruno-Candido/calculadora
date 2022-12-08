import { StyleSheet, Text, View } from 'react-native'

interface Props {
    label: string
}

export function Display({ label }:Props) {
    return(
        <View style={Styles.display}>
            <Text style={Styles.displayValue} numberOfLines={1}>{label}</Text>
        </View>
    )
}

const Styles = StyleSheet.create({
    display:{
        flex: 1,
        padding: 20,
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
        alignItems: 'flex-end',
    },
    displayValue: {
        fontSize: 60,
        color: '#fff'
    }
})