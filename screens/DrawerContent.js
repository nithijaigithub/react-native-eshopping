import React, {useState, useEffect, useContext} from 'react';
import { View, StyleSheet, Button } from 'react-native';
import {
    useTheme,
    Avatar,
    Title,
    Caption,
    Drawer,
    Text,
} from 'react-native-paper';
import {
    DrawerContentScrollView,
    DrawerItem
} from '@react-navigation/drawer';

import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { getCategories } from '../services/categoryService';
import { AuthorizeContext } from '../context/AuthorizeContext';

export function DrawerContent(props) {
    
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        setCategories(getCategories());
    }, [categories]);
    const { signOut } = useContext(AuthorizeContext);
    return(
        <View style={{flex:1}}>
            { props.loginState.userToken !== null ? (
                <View style={styles.userInfoSection}>
                    <View style={{flexDirection:'row',marginTop: 15}}>
                    
                        <Avatar.Image 
                        source={require('../assets/users/'+ props.loginState.userName + '.jpg')}
                        size={50}
                        />
                        <View style={{marginLeft:15, flexDirection:'column'}}>
                            <Title style={styles.title}>{props.loginState.fullName}</Title>
                            <Caption style={styles.caption}>@{props.loginState.userName}</Caption>
                        </View>
                    </View>
                </View>
            )
            :
            <View style={styles.breadcrumbCntr}>
                <View style={{ flexDirection: "row", justifyContent: "flex-end" }}>
                    <Text style={styles.breadcrumbTitle}>{'E-SHOPPING'}</Text>
                <Button
                    title="Login"
                    color="#7fad39"
                    onPress={() => {props.navigation.navigate('Login')}}
                />
                </View>
            </View>
            }

            <View style={styles.drawerSectionContr}><Text style={styles.drawerSectionTitle}>Shop by Category</Text></View>

            <DrawerContentScrollView {...props}>
                <View>
                    <Drawer.Section style={styles.drawerSection}>
                    {
                        categories.map((item) => {
                            return (
                                <DrawerItem key={item.id} style={styles.drawerItem}
                                    icon={({focused}) => (
                                        <Icon 
                                        name={item.icon}
                                        size={focused ? 25 : 25}
                                        color={focused ? '#7fad39' : '#999999'}
                                        />
                                    )}
                                    label={item.name}
                                    onPress={() => {
                                        props.navigation.navigate('ProductList', {
                                            categoryId: item.id,
                                            categoryName: item.name
                                        });
                                    }}
                                />
                            );
                        })
                    }
                    
                    </Drawer.Section>
                </View>
            </DrawerContentScrollView>

            <View style={styles.drawerSectionContr}><Text style={styles.drawerSectionTitle}>Preferences</Text></View>
            
            <Drawer.Section style={styles.bottomDrawerSection}>
                <DrawerItem
                    icon={({focused}) => (
                        <FontAwesome5 
                        name="home"
                        size={focused ? 25 : 22}
                        color={focused ? '#7fad39' : '#999999'}
                        />
                    )}
                    label="Home"
                    onPress={() => {props.navigation.navigate('Home_Screen')}}
                />
                <DrawerItem
                    icon={({focused}) => (
                        <FontAwesome5 
                        name="globe"
                        size={focused ? 25 : 22}
                        color={focused ? '#7fad39' : '#999999'}
                        />
                    )}
                    label="About Us"
                    onPress={() => {props.navigation.navigate('AboutUs_Screen')}}
                />
                <DrawerItem
                    icon={({focused}) => (
                        <FontAwesome5 
                        name="comment"
                        size={focused ? 25 : 22}
                        color={focused ? '#7fad39' : '#999999'}
                        />
                    )}
                    label="Help & Support"
                    onPress={() => {props.navigation.navigate('ContactUs_Screen')}}
                />
                { props.loginState.userToken !== null ? (
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="login-variant" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Logout"
                        onPress={() => {
                            signOut();
                            props.navigation.navigate('Home_Screen')
                        }}
                    />
                )
                :
                    <DrawerItem 
                        icon={({color, size}) => (
                            <Icon 
                            name="login-variant" 
                            color={color}
                            size={size}
                            />
                        )}
                        label="Login"
                        onPress={() => {
                            props.navigation.navigate('Login');
                        }}
                    />
                }
            </Drawer.Section>
        </View>
    );
}

const styles = StyleSheet.create({
    drawerContent: {
      
    },
    drawerItem: {
        padding: 0,
        margin: 0
    },
    userInfoSection: {
      paddingLeft: 20,
    },
    title: {
      fontSize: 16,
      marginTop: 3,
      fontWeight: 'bold',
    },
    drawerSectionTitle: {
      fontSize: 12,
      color: '#ffffff',
      fontWeight: 'bold',
      textTransform: 'uppercase'
    },
    drawerSectionContr: {
        marginTop: 20,
        marginLeft: 10,
        marginRight: 10,
        marginBottom: 0,
        borderRadius: 5,
        padding: 10,
        backgroundColor: '#7fad39'        
    },
    caption: {
      fontSize: 14,
      lineHeight: 14,
    },
    row: {
      marginTop: 20,
      flexDirection: 'row',
      alignItems: 'center',
    },
    section: {
      flexDirection: 'row',
      alignItems: 'center',
      marginRight: 15,
    },
    paragraph: {
      fontWeight: 'bold',
      marginRight: 3,
    },
    drawerSection: {
    },
    bottomDrawerSection: {
        marginBottom: 15,
    },
    preference: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      paddingVertical: 12,
      paddingHorizontal: 16,
    },
    breadcrumbCntr: {
        backgroundColor: '#ffffff',
      margin: 12,
      marginBottom: 0,
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
      breadcrumbTitle: {
        fontSize: 16,
        color: '#7fad39',
        fontWeight: 'bold',
        fontFamily: 'arial',
        paddingTop: 10,
        paddingRight: 30
      },
  });