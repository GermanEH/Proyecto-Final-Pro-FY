import { Text,StyleSheet, View, Image, TouchableOpacity } from 'react-native';

export function Intro() {
    return (
        <View style={styles.container}>
        	<Image style={styles.img} source={require('../../assets/logo.png')}/>
					<TouchableOpacity>
						<Text style={styles.btn}>
							Paciente
						</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text style={styles.btn}>
							Profesional
						</Text>
					</TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: '#fff',
		alignItems: 'center',
		justifyContent: 'center',
	},  
	img: {
		width: 300,
		height: 300,
	},
	btn: {
		backgroundColor: "#F0C325",
		textAlign: 'center',
		paddingVertical: 20,
		paddingHorizontal: 60,
		margin: 10,
		borderRadius: 10,
		color: 'white',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 6,
		},
		shadowOpacity: 0.39,
		shadowRadius: 8.30,
		elevation: 13,
	},
		
})