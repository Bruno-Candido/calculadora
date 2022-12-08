import { View, Text, StyleSheet } from 'react-native'

import { Display } from '../components/Display'
import { Button } from '../components/Button'


export function Calculator() {
    return(
        <View style={styles.container}>
            <Display label='0'/>
            <View style={styles.buttons}>
                <Button title='AC' triple/>
                <Button title='/'/>
                <Button title='7'/>
                <Button title='8'/>
                <Button title='9'/>
                <Button title='*'/>
                <Button title='4'/>
                <Button title='5'/>
                <Button title='6'/>
                <Button title='-'/>
                <Button title='1'/>
                <Button title='2'/>
                <Button title='3'/>
                <Button title='+'/>
                <Button title='0'/>
                <Button title='.'/>
                <Button title='='/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttons: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }
})