import { makeStyles } from "@material-ui/core/styles"

const styles = makeStyles(theme => ({
    login: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#64113F",
        height: "100%",
        width: "100%",
        maxWidth: "90%",
        maxHeight: "70%",
        borderRadius: "5%",
        color: "#ffffff",
        "@media (min-width: 780px)": {
          maxWidth: "500px",
          maxHeight: "400px"
        }
    },
    form:{
        display: "flex",
        height: "80%",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        color: "#FFFFFF"
    },
    textContainer: {
        display: "flex",
        flexDirection: "column"
    },
    textField: {
        marginBottom: "20px !important"
    },
    textRoot: {
        "& > label": {
          color: "white"
        },
        "& .MuiInputBase-root": {
          color: "white"
        },
        "& .MuiInput-underline": {
          "&:not(.Mui-disabled)": {
            "&:before": {
              borderBottom: "1px solid white"
            },
            "&:after": {
              borderBottom: "1px solid white"
            }
          },
          "&:hover": {
            "&:not(.Mui-disabled)": {
              "&:before": {
                borderBottom: "1.5px solid white"
              }
            }
          }
        }
    },
    submitButton: {
        width: "100%",
        maxWidth: "150px"
    }
}))

export default styles