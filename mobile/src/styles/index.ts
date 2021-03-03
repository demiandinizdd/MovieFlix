import { StyleSheet } from "react-native";

const colors = {
    white: "#FFF",
    black: "#000",
    primary: "#FFC700",
    secondary: "#937d1c",
    title: "#F2F2F2",
    subTitle: "#9E9E9E",
    borderColor: "#E1E1E1",
    darkGray: "#525252",
    gray: "#6C6C6C",
    mediumGray: "#BFBFBF",
    lightGray: "#CDCDCD"
};

const text = StyleSheet.create({
    primaryText: {
        fontSize: 16,
        fontWeight: "700",
        textAlign: "center",
        textTransform: "uppercase",
        color: colors.black,
        marginLeft: 100
    },
    bold: {
        fontSize: 26,
        fontWeight: "700",
        textAlign: "center",
        color: colors.white,
        marginBottom: 50
    },
    regular: {
        fontSize: 16,
        fontWeight: "400",
        textAlign: "center",
        color: colors.title,
        marginBottom: 25
    },
    // LoginPage
    loginTitle: {
        fontSize: 30,
        fontWeight: "400",
        color: colors.white,
        marginBottom: 50,
        textTransform: "uppercase"
    },
    // navbar
    logoutText: {},
    // Movie 
    movieTitle: {
        fontSize: 20,
        fontWeight: "bold",
        color: colors.white
    },
    movieSubTitle: {
        fontSize: 18,
        color: colors.borderColor
    },
    movieYear: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.primary
    },
    movieViewTextDetails: {
        fontSize: 16,
        fontWeight: "bold",
        color: colors.white,
        textTransform: "uppercase"
    },
    // Movie Detail
    movieDetailTitle: {
        fontSize: 24,
        fontWeight: "bold",
        marginLeft: 25,
        marginTop: 17,
        color: colors.white
    },
    movieDetailSubtitle: {
        marginLeft: 25,
        fontSize: 18,
        color: colors.subTitle
    },
    movieDetailYear: {
        marginLeft: 25,
        marginTop: 15,
        fontSize: 24,
        fontWeight: "bold",
        color: colors.primary
    },
    movieDetailSynopsisTitle: {
        marginLeft: 25,
        marginTop: 15,
        fontSize: 22,
        fontWeight: "bold",
        color: colors.white
    },
    movieDetailSynopsisText: {
        fontSize: 16,
        color: colors.subTitle,
        textAlign: "justify"
    },
    movieDetailEvaluationText: {
        color: colors.black,
        fontSize: 16,
        fontWeight: "700",
        textTransform:'uppercase',
        lineHeight: 22,
        textAlign: "justify"
    },
    movieReviewInput: {
        height: 100,
        fontSize: 16,
        fontWeight: "400",
        lineHeight: 22,        
        textAlignVertical: "top",
        color: colors.gray,
        backgroundColor: colors.white,
        borderRadius: 10,
        padding: 10
    }
});

const theme = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 40,
        paddingVertical: 40,
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        backgroundColor: colors.gray
    },
    mainImage: {
        width: 340,
        height: 262
    },
    textContainer: {},
    primaryButton: {
        width: 334,
        height: 50,
        backgroundColor: colors.primary,
        borderRadius: 10,
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center"
    },
    arrowContainer: {
        width: 50,
        height: 50,
        backgroundColor: colors.secondary,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    // LoginPage
    loginContainer: {
        width: "100%",
        height: "100%",
        paddingHorizontal: 40,
        paddingVertical: 40,
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: colors.darkGray
    },
    form: {
        marginVertical: 10
    },
    textInput: {
        fontSize: 16,
        width: 334,
        height: 50,
        borderWidth: 1,
        borderColor: colors.borderColor,
        borderRadius: 10,
        padding: 10,
        backgroundColor: colors.white
    },
    passwordGroup: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 25
    },
    togle: {
        margin: -30
    },
    eyes: {},
    // Movie
    scrollContainer: {
        padding: 20,
        backgroundColor: colors.darkGray
    },
    movieContainer: {
        width: 374,
        backgroundColor: colors.gray,
        borderRadius: 10,
        marginBottom: 18
    },
    movieContent: {
        paddingHorizontal: 18,
        marginVertical: 20
    },
    movieImg: {
        marginTop: 18,
        width: 374,
        height: 227
    },
    movieViewDetails: {
        marginTop: 10,
        width: "100%",
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        padding: 10
    },
    // Search
    searchInputContainer: {
        width: "100%",
        backgroundColor: colors.gray,
        padding: 20,
        borderRadius: 10,
        marginBottom: 18,
        flexDirection: "row",
        alignItems: "center"
    },
    searchInput: {
        width: "100%",
        maxWidth: "100%",
        fontSize: 16,
        fontWeight: "400",
        color: colors.white,
        borderWidth: 1,
        borderColor: colors.white,
        borderRadius: 10,
        padding: 15,
        marginRight: -35
    },
    filterIcon: {
    },
    modalContainer: {
        width: "100%",
        height: "100%",
        backgroundColor: "#00000033",
        alignItems: "center",
        justifyContent: "center"
    },
    modalContent: {
        width: 300,
        alignItems: "center",
        justifyContent: "center",
        marginTop: "30%",
        backgroundColor: colors.white,
        borderRadius: 20,
        padding: 20,
        shadowColor: colors.black,
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5
    },
    modalItem: {
        width: "100%",
        backgroundColor: colors.lightGray,
        padding: 10,
        marginVertical: 5,
        borderRadius: 5
    },
    // Movie Detail
    containerMovieDetail: {
        width: "100%",
        height: "100%",
        padding: 20,
        backgroundColor: colors.darkGray
    },
    contentMovieDetail: {
        backgroundColor: colors.gray,
        borderRadius: 10
    },
    movieDetailSynopsisContent: {
        marginTop: 10,
        marginBottom: 14,
        marginHorizontal: 25,
        paddingHorizontal: 20,
        paddingVertical: 15,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: colors.borderColor
    },
    movieDetailInputContainer: {
        marginVertical: 18,
        backgroundColor: colors.gray,
        borderRadius: 10,
        padding: 20,
        justifyContent: "center"
    },
    movieDetailInput: {
        height: 97, 
        backgroundColor: colors.white,
        paddingHorizontal: 10,
        borderRadius: 10
    },
    btnEvaluation: {
        width: "100%",
        height: 50,
        flexDirection: "row",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary,
        borderRadius: 10,
        marginTop: 15,
        paddingHorizontal: 20
    },
    star: {
        width: 15,
        height: 15
    }
});

const nav = StyleSheet.create ({
    container: {
        flexDirection: "row",
        alignItems: "center"
    },
    leftText: {
        color: colors.black,
        fontSize: 18,
        fontWeight: "bold",
        marginLeft: 20
    },
    backArrow: {
        marginLeft: 20
    },
    // Logout
    logoutBtn: {
        width: 60,
        height: 30,
        borderWidth: 1,
        borderColor: colors.black,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        marginRight: 20
    }    
});

export { colors, nav, text, theme };