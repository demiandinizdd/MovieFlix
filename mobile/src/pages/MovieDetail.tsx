import React, { useState, useEffect } from "react";
import { Text, View, ActivityIndicator, ScrollView, Image, TextInput, TouchableOpacity } from "react-native";
import { createReview, getMovieById, userId } from "../services";
import { isReviewAllowedByRole } from "../services/auth";
import star from "../assets/star.png";
import Toast from "react-native-tiny-toast";
import { text, theme } from "../styles";

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
    const [newUserReview, setNewUserReview] = useState({
        id: 0,
        text: "",
        userId: 0,
        movieId: 0
    });
    const [_userId, setUserId] = useState(0);

    const [loading, setLoading] = useState(false);
    var [isReviewAllowed, setIsReviewAllowed] = useState(false);

    async function loadMovieData() {
        setLoading(true);
        const res = await getMovieById(id);
        setMovie(res.data);
        setUserId(await userId());
        setLoading(false);
    };
    
    async function saveReview() {
        try {
            setLoading(true),
            await createReview(newUserReview),
            Toast.showSuccess('Obrigado pelo seu Comentário!');
        } catch (res) {
            Toast.show('Erro ao enviar seu comentário! Por favor, tente novamente.');
        }
        setLoading(false);
    };

    async function reviewAllowed() {
        try {
            setIsReviewAllowed(await isReviewAllowedByRole());
        } catch(error) {
            console.warn("Error: " + error);
            setIsReviewAllowed(false);
        }
    };

    useEffect(() => {
        reviewAllowed();
        loadMovieData();
    }, []);
    
    return (
        <ScrollView style={theme.containerMovieDetail}>
            {loading ? (<ActivityIndicator size="large" />) : (
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
                    {isReviewAllowed &&
                    <View style = { theme.movieDetailInputContainer }>
                        <TextInput style = { text.movieReviewInput }
                            placeholder = "Deixe aqui sua avaliação"
                            multiline = {true}
                            numberOfLines = {3}
                            onChangeText={(e) => {
                                const newUserReview = { ...newUserReview };
                                newUserReview.text = e;
                                newUserReview.movieId = movie.id;
                                newUserReview.userId = _userId;
                                setNewUserReview(newUserReview);
                            }}
                        />
                        <TouchableOpacity
                            style = { theme.btnEvaluation }
                            onPress = {() => {
                                saveReview();
                                loadMovieData();
                            }}
                        >
                            <Text style = { text.movieDetailSaveText }>salvar avaliação</Text>
                        </TouchableOpacity>
                    </View>}
                    {movie.reviews.length > 0 &&
                    <ScrollView style={theme.movieContainer}>
                        <Text style={text.movieReviewTitle}>Avaliações</Text>
                        {movie.reviews.map(review => (
                            <View key = {`reviews${review.id}`}>
                                <View style = { theme.reviewContent } key = {`content${review.id}`}>
                                    <Image style = { theme.star } source = {star}/>
                                    <Text style = { text.reviewUserName }>{review.userName}</Text>
                                </View>
                                <ScrollView style = { theme.reviewComment } key = {`comment${review.id}`}>
                                    <Text style = { text.reviewComment }>{review.text}</Text>
                                </ScrollView>
                            </View>
                        ))}
                    </ScrollView>}
                </View>)
            }
        </ScrollView>
    )
};

export default MovieDetail;