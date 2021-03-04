import React, { useEffect, useState } from "react";
import { View, Image, Modal, Text, ActivityIndicator, TouchableOpacity } from "react-native";
import { ScrollView } from "react-native-gesture-handler";
import filterArrow from "../assets/filter-arrow.png";
import { getGenres } from "../services";
import { text, theme } from "../styles";

interface SearchProps {
    placeholder: string;
    search: string;
    setSearch: Function;
}

const SearchInput: React.FC<SearchProps> = ({ placeholder, search, setSearch }) => {
    const [loading, setLoading] = useState(false);
    const [showGenres, setShowGenres] = useState(false);
    const [genres, setGenres] = useState([]);

    async function loadGenres() {
        setLoading(true);
        const res = await getGenres();
        setGenres(res.data);
        setLoading(false);
    };

    useEffect(() => {
        loadGenres();
    }, []);

    return (
        <>
            {loading ? (<ActivityIndicator size="large" />) : (
            <ScrollView>
                <Modal
                    visible={showGenres}
                    animationType="fade"
                    transparent={true}
                    presentationStyle="overFullScreen"
                >
                    <View style={theme.modalContainer}>
                        <ScrollView contentContainerStyle={theme.modalContent}>{
                            genres.map((gen) => {
                                const { id, name } = gen
                                return (
                                    <TouchableOpacity
                                        style={theme.modalItem}
                                        key={id}
                                        onPress={() => {
                                            setSearch(name);
                                            setShowGenres(!showGenres);
                                        }}
                                    >
                                        <Text style={text.modalText}>
                                            {name}
                                        </Text>
                                    </TouchableOpacity>
                                )
                            })}
                        </ScrollView>
                    </View>
                </Modal>
                <TouchableOpacity
                    style = { theme.searchInputContainer }
                    onPress = {() => setShowGenres(!showGenres)}
                >
                    <Text style = { theme.searchInput }>
                        {search ? search : placeholder}
                    </Text>
                    <Image 
                        style = { theme.filterIcon }
                        source = {filterArrow} 
                    />
                </TouchableOpacity>
            </ScrollView>)}
        </>
    )
};

export default SearchInput;