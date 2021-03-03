import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { text, theme } from "../styles";
import { getMovieById } from "../services";

const MovieDetail = ({
    route: {
        params: { id },
    }}) => {
    const [movie, setMovie] = useState({
        id: null,
        title: null,
        subTitle: null,
        year: null,
        imgUrl: ' ',
        synopsis: null,
        genre: [],
        reviews: []
    });
    const [loading, setLoading] = useState(false);

    async function loadMovieData() {
        setLoading(true);
        const res = await getMovieById(id);
        setMovie(res.data);
        setLoading(false);
    };

    useEffect(() => {
        loadMovieData();
    }, []);
    
    return (
        <ScrollView style={theme.containerMovieDetail}>
            {loading ? (
                <ActivityIndicator size="large" />)
            : (
                <View>
                    <View style = { theme.contentMovieDetail }>
                        <Text style = { text.movieDetailTitle }>{movie.title}</Text>
                        <Image source = {{ uri: movie.imgUrl }} style={ theme.movieImg } />
                        <Text style = { text.movieDetailYear }>{movie.year}</Text>
                        <Text style = { text.movieDetailSubtitle }>{movie.subTitle}</Text>
                        <Text style = { text.movieDetailSynopsisTitle }>Sinopse</Text>
                        <ScrollView style = { theme.movieDetailSynopsisContent }>
                            <Text style = { text.movieDetailSynopsisText }>{movie.synopsis}</Text>
                        </ScrollView>
                    </View>
                    {/* TODO VERIFY IF USER HAS ADMIN HOLE BEFORE RANDERING */}
                    <View style = { theme.movieDetailInputContainer }>
                        <TextInput style = { text.movieReviewInput }
                            placeholder = "Deixe aqui sua avaliação"
                            multiline = {true}
                            numberOfLines = {3}
                        />
                        <TouchableOpacity style = { theme.btnEvaluation }>
                            <Text style = { text.movieDetailEvaluationText }>salvar avaliação</Text>
                        </TouchableOpacity>
                    </View>
                </View>)
            }
        </ScrollView>
    )
};

export default MovieDetail;