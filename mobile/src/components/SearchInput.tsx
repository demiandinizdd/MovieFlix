import React from "react";
import { View, TextInput, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import filterArrow from "../assets/filter-arrow.png";
import { colors, theme } from "../styles";

interface SearchProps {
    placeholder: string;
    search: string;
    setSearch: Function;
}

const SearchInput: React.FC<SearchProps> = ({ search, setSearch, placeholder }) => {
    return (
        <TouchableOpacity style = { theme.searchInputContainer }>
            <TextInput
                style = { theme.searchInput }
                placeholderTextColor = { colors.white }
                placeholder = {placeholder}
                value = {search} 
                onChangeText = {text => setSearch(text)}
            />
            <View style = { theme.filterIcon }>
                <Image source = { filterArrow }/>
            </View>
        </TouchableOpacity>
    )
};

export default SearchInput;