import React, { useEffect, useState } from "react";
import { ScrollView, ActivityIndicator, Modal, View, Text, Image, TouchableOpacity } from "react-native";
import { MovieCard } from "../components";
import filterArrow from "../assets/filter-arrow.png";
import { getGenres, getMovies } from "../services";
import { colors, text, theme } from "../styles";
import { Colors } from "react-native/Libraries/NewAppScreen";

const Movies: React.FC = () => {
    const [lastSearch, setLastSearch] = useState("");
    const [search, setSearch] = useState("");
    const [showGenres, setShowGenres] = useState(false);
    const [genres, setGenres] = useState([]);
    const [loading, setLoading] = useState(false);
    var [filteredMovies, setFilteredMovies] = useState([]);
    
    async function loadGenres() {
        setLoading(true);
        const res = await getGenres();
        setGenres(res.data);
        setLoading(false);
    };

    async function loadMovies() {
        setLoading(true);
        setFilteredMovies([]);
        const res = getMovies();
        // TODO have to reload movies. When calling from 2nd time
        // setFilteredMovies does not reload movies
        // So, I have to find a way to solve this bug
        // for filtering work properly
        setFilteredMovies((await res).data.content);
        console.log('filteredMovies.length after fetching');
        console.log(filteredMovies.length);
        if (search !== "" && (search !== lastSearch)) {
            console.log("Search");
            console.log(search);
            console.log("length Before filtering");
            console.log(filteredMovies.length);
            setFilteredMovies(filteredMovies.filter(movie => String(movie.genre.name).includes(search)));
            console.log("length After filtering");
            console.log(filteredMovies.length);
        }
        setLoading(false);
    };
    
    useEffect(() => {
        loadGenres();
    }, []);
    
    useEffect(() => {
        console.log("Loading movies");
        loadMovies();
        console.log("lastSearch: " + lastSearch);
        setLastSearch(search);
        console.log("search: " + search);
    }, [search]);
    
    return (
        <>
            {/* <SearchInput
                placeholder = "Gênero"
                search = {search}
                setSearch = {setSearch}
            /> */}
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
                                style={theme.modalItem}
                                key={"Cancelar filtro"}
                                onPress={() => {
                                    setSearch(lastSearch);
                                    setShowGenres(!showGenres);
                                }}
                            >
                                <Text style={text.modalText}>
                                    Cancelar filtro
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