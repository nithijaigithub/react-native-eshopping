import React, { useContext, useState } from 'react';
import { 
    View, 
    Text, 
    TouchableOpacity, 
    TextInput,
    Platform,
    StyleSheet ,
} from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';


import { AuthorizeContext } from '../context/AuthorizeContext';

import Users from '../model/users';

const LoginScreen = ({navigation}) => {

    const [data, setData] = useState({
        username: '',
        password: '',
        secureTextEntry: true
    });
    const [isValidUser, setIsValidUser] = useState(true);
    const [isEmpty, setIsEmpty] = useState(false);

    

    const { logIn } = useContext(AuthorizeContext);

    const textInputChange = (val) => {
        setData({
            ...data,
            username: val
        });
    }

    const handlePasswordChange = (val) => {
        setData({ ...data, password: val });
    }

    const updateSecureTextEntry = () => {
        setData({ ...data, secureTextEntry: !data.secureTextEntry });
    }

    const loginHandle = (userName, password) => {
        setIsEmpty(false);
        setIsValidUser(true);
        const foundUser = Users.filter( item => {
            return userName == item.username && password == item.password;
        } );

        if ( data.username.length == 0 || data.password.length == 0 ) {
            setIsEmpty(true);
            return;
        }

        if ( foundUser.length == 0 ) {
            setIsValidUser(false);
            return;
        }else {
            navigation.navigate('Home_Screen');
        }
        logIn(foundUser);
    }
    
    return (
        
      <View style={styles.container}>
          
        <View style={styles.header}>
            <Text style={styles.text_header}>Welcome to eShopping!</Text>
        </View>
        <View>
            <Text style={[styles.text_footer]}>Username</Text>
            <View style={styles.action}>
                <FontAwesome color={"#7fad39"} name="user-o" size={20} />
                <TextInput 
                    placeholder="Your Username"
                    placeholderTextColor="#666666"
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    onChangeText={(val) => textInputChange(val)}
                />
            </View>

            <Text style={[styles.text_footer, { marginTop: 20 }]}>Password</Text>
            <View style={styles.action}>
                <Feather name="lock" color="#7fad39" size={20} />
                <TextInput 
                    placeholder="Your Password"
                    placeholderTextColor="#666666"
                    secureTextEntry={data.secureTextEntry ? true : false}
                    style={[styles.textInput]}
                    autoCapitalize="none"
                    onChangeText={(val) => handlePasswordChange(val)}
                />
                <TouchableOpacity onPress={updateSecureTextEntry}>
                    {data.secureTextEntry ? 
                        <Feather name="eye-off" color="grey" size={20} />
                    :
                        <Feather name="eye" color="grey" size={20} />
                    }
                </TouchableOpacity>
            </View>

            { isValidUser ? null : 
                <Text style={styles.errorMsg}>Username or password is incorrect...</Text>
            }
            { isEmpty ? <Text style={styles.errorMsg}>Username or password field cannot be empty.</Text>  : 
                null
            }
            
            <View style={styles.button}>
                <TouchableOpacity
                    style={[styles.signIn, {
                        borderColor: '#7fad39',
                        borderWidth: 1,
                        marginTop: 0
                    }]}
                    onPress={() => {loginHandle( data.username, data.password )}}
                >
                    <Text style={[styles.textSign, { color:'#7fad39' }]}>Log In</Text>
                </TouchableOpacity>
            </View>
        </View>
      </View>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#ffffff',
        margin: 12,
        padding: 16,
        fontFamily: 'arial',
        color: '#666',
        borderRadius: 16,
      shadowOpacity: 0.2,
      shadowRadius: 4,
      shadowColor: 'black',
      shadowOffset: {
        height: 0,
        width: 0,
      },
      elevation: 1,
    },
    header: {
        flex: 1,
        justifyContent: 'center',
        borderBottomColor: '#CCCCCC',
        borderBottomWidth: 1,
        paddingBottom: 8,
        marginBottom: 20
    },
    footer: {
        flex: 3,
        backgroundColor: '#fff',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 20,
        paddingVertical: 30
    },
    text_header: {
        color: '#666666',
        fontWeight: 'bold',
        fontSize: 16
    },
    text_footer: {
        color: '#05375a',
        fontSize: 18
    },
    action: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#f2f2f2',
        paddingBottom: 5
    },
    actionError: {
        flexDirection: 'row',
        marginTop: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#FF0000',
        paddingBottom: 5
    },
    textInput: {
        flex: 1,
        marginTop: Platform.OS === 'ios' ? 0 : -12,
        padding: 10,
        color: '#05375a',
        
    },
    errorMsg: {
        color: '#BE1809',
        fontSize: 14,
        fontWeight: 'bold',
        marginTop: 10
    },
    button: {
        alignItems: 'center',
        marginTop: 50
    },
    signIn: {
        width: '100%',
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10
    },
    textSign: {
        fontSize: 18,
        fontWeight: 'bold'
    }
  });