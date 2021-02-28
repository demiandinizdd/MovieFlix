import React from "react";
import { Text, View, TouchableOpacity, Image } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { theme, text } from "../styles";
import arrow from "../assets/arrow.png";
import mainImage from "../assets/main-image.png";

const Home: React.FC = () => {
    const navigation = useNavigation();
    return (
        <View style = { theme.container }>
            <Image source = { mainImage } style = { theme.mainImage } />
            <View style = { theme.textContainer }>
                <Text style = { text.bold }>Avalie filmes</Text>
                <Text style = { text.regular }>Diga o que você achou do seu filme favorito</Text>
            </View>
            <TouchableOpacity
                style = { theme.primaryButton }
                activeOpacity = {0.8}
                onPress = {() => navigation.navigate("Login")}
            >
                <Text style = { text.primaryText }>
                    fazer login
                </Text>
                <View style = { theme.arrowContainer }>
                    <Image source = { arrow } />
                </View>
            </TouchableOpacity>
        </View>
    )
};

export default Home;