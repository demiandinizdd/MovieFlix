import React, { useEffect, useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { Image, Text, TouchableOpacity, View } from "react-native";
import leftArrow from "../assets/leftArrow.png";
import { useNavigation, useRoute } from "@react-navigation/native";
import { Home } from "../pages";
import { colors, nav, text } from "../styles";

const Stack = createStackNavigator();

const HeaderTextLeft: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();
    
    return (
        <View style={nav.container}>
            { route.name !== "Home" ? (
                <TouchableOpacity
                    activeOpacity = { 0.8 }
                    style = { nav.backArrow }
                    onPress = {() => navigation.goBack()}
                >
                    <Image source = { leftArrow } />
                </TouchableOpacity>) : null
            }
            <Text style = { nav.leftText }>MovieFlix</Text>
        </View>
    )
};

const HeaderTextRight: React.FC = () => {
    const route = useRoute();
    const navigation = useNavigation();
    const [authenticated, setAuthenticated] = useState(false);

    return (
        <View>
            {/* TODO */}
            {/* <TouchableOpacity
                onPress = {() => logout()}
                style = { nav.logoutBtn }
            >
                <Text style = { text.logoutText }>SAIR</Text>
            </TouchableOpacity> */}
        </View>
    )
};

const Routes: React.FC = () => {
    return (
        <Stack.Navigator
            screenOptions = {{
                headerTitle: " ",
                headerStyle: {
                    backgroundColor: colors.primary,
                },
                headerLeft: () => <HeaderTextLeft />,
                headerRight: () => <HeaderTextRight />,
            }}
        >
            <Stack.Screen name = "Home" component = { Home } />
        </Stack.Navigator>
    )
};

export default Routes;