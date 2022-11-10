import { Text,StyleSheet, View, Image, TextInput, TouchableOpacity } from 'react-native';
import theme from '../../theme';

export function Logging() {
	return (
		<View style={styles.container}>
			<Image style={styles.img} source={require('../../assets/logo.png')}/>
			<TextInput style={styles.input} 
			placeholder='Correo electrónico'/>
			<TextInput style={styles.input} 
			placeholder='Contraseña'/>
			<TouchableOpacity
			style={styles.btn}>
				<Text style={styles.textBtn}>
					Iniciar Sesión
				</Text>
			</TouchableOpacity>
			<TouchableOpacity
			style={styles.btnGoogle}>
			<View>
				<Text>
					Iniciar Sesión con Google
					{/* <AntDesign name='FcGoogle' style={{fontSize: 20}}/>  */}
				</Text>
			</View>
			</TouchableOpacity>
			<View>
				<Text>
					No tienes una cuenta?
				</Text>
			<TouchableOpacity>
				<Text style={styles.text}>
					Registrate
				</Text>
			</TouchableOpacity>	
			</View>
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
	input: {
		backgroundColor: 'white',
		borderWidth: 1,
		padding: 10,
		margin: 20, 
		width: 300,
		borderRadius: 10,
		borderColor: '#E9E6E6',
		shadowColor: "#000",
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.41,
		shadowRadius: 9.11,
		elevation: 14,
	},
	img: {
		width: 300,
		height: 300,
	},
	btn: {
		backgroundColor: theme.colors.primaryColor,
		padding: 20,
		borderRadius: 10,
		margin: 40,
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.41,
		shadowRadius: 9.11,
		elevation: 14,
	},
	btnGoogle: {
		backgroundColor: 'white',
		padding: 20,
		borderRadius: 10,
		margin: 40,
		borderColor: 'black',
		borderWidth: 1,
		shadowOffset: {
			width: 0,
			height: 7,
		},
		shadowOpacity: 0.41,
		shadowRadius: 9.11,
		elevation: 14,
	},
	textBtn: {
		color: "white",
		fontFamily: theme.fonts.main,
	  },
	text: {
		color: "red",
		textAlign: "center",
		fontFamily: theme.fonts.main,
	}
})