import { Text,StyleSheet, View, Image} from 'react-native';

export function Loading() {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../assets/logo-white.png')}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: "#F0C325"
    },
    img: {
        width: 300,
        height: 300,
    }
})