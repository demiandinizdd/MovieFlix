import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator, Modal, View, Text, Image, TouchableOpacity } from "react-native";
import { MovieCard } from "../components";
import filterArrow from "../assets/filter-arrow.png";
import { getGenres, getMovies } from "../services";
import { text, theme } from "../styles";

const Movies: React.FC = () => {
    const [search, setSearch] = useState("");
    const [showGenres, setShowGenres] = useState(false);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    const [filteredMovies, setFilteredMovies] = useState([]);
    
    async function loadGenres() {
        setLoading(true);
        const res = await getGenres();
        setGenres(res.data);
        setLoading(false);
    };

    async function loadMovies() {
        setLoading(true);
        const res = getMovies();
        setFilteredMovies((await res).data.content);
        setLoading(false);
    }

    async function filterMovies(searchValue: string) {
        setLoading(true);
        if (searchValue !== "") {
            setFilteredMovies(filteredMovies.filter(movie => String(movie.genre.name).includes(searchValue)));
        }
        setLoading(false);
    };
    
    useEffect(() => {
        loadGenres();
        loadMovies();
    }, []);

    return (
        <>
            {loading ? (<ActivityIndicator size="large" />) :
            <ScrollView contentContainerStyle = { theme.scrollContainer }>
                <Modal
                    visible={showGenres}
                    animationType="fade"
                    transparent={true}
                    presentationStyle="overFullScreen"
                >
                    <View style={theme.modalContainer}>
                        <ScrollView contentContainerStyle={theme.modalContent}>
                            <TouchableOpacity
                                style={theme.modalItemShowAll}
                                key={"Mostrar todos os filmes"}
                                onPress={() => {
                                    setSearch("");
                                    loadMovies();
                                    setShowGenres(!showGenres);
                                }}
                            >
                                <Text style={text.modalTextShowAll}>
                                    Mostrar todos os filmes
                                </Text>
                            </TouchableOpacity>
                            {genres.map((gen) => {
                                const { id, name } = gen
                                return (
                                    <TouchableOpacity
                                        style={theme.modalItem}
                                        key={id}
                                        onPress={() => {
                                            setSearch(name);
                                            filterMovies(name);
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
                    onPress = {() => {
                        if (!showGenres) {loadMovies()};
                        setShowGenres(!showGenres);
                    }}
                >
                    <Text style = { theme.searchInput }>
                        {search ? search : "Gênero"}
                    </Text>
                    <Image 
                        style = { theme.filterIcon }
                        source = {filterArrow} 
                    />
                </TouchableOpacity>
                {(filteredMovies.map((movie) => (
                    <MovieCard {...movie} key={movie.id} />
                )))}
            </ScrollView>}
        </>
    )
};

export default Movies;