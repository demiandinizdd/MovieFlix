import React, { useEffect, useState } from "react";
import { ScrollView, Text } from "react-native";
import { text, theme } from "../styles";

const Movies: React.FC = () => {
    return (
        <ScrollView contentContainerStyle = { theme.scrollContainer }>
            <Text style = {text.movieTitle}>MOVIE</Text>
        </ScrollView>
    )
};

export default Movies;