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

const nav = ({
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
    }
});

export { colors, nav };