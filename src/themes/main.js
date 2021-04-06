import { createMuiTheme } from "@material-ui/core/styles"

const primary = {
  main: "#02394A",
  light: "#64113F"
}
const secondary = {
  main: "#8F8389"
}
const text = {
  primary: "#000000"
}

export default createMuiTheme({
  palette: {
    primary,
    secondary,
    text,
    background: {
      default: "#FFFFFF"
    }
  },
  typography: {
    h1: {
    },
    h2: {
    },
    h3: {
    },
    h4: {
    },
    h5: {
    },
    h6: {
    },
    body1: {
    },
    body2: {
    },
    button: {
    },
    caption: {
    },
    subtitle1: {
    },
    overline: {
    }
  },
  overrides: {
    MuiButton: {
      root: {
        color: "white",
      },
      contained: {
        backgroundColor: "white"
      },
      containedPrimary: {
        color: "white",
        boxShadow: "none",
        border: `6px solid ${primary.main}`,
        "&:before": {
          content: "''",
          width: "100%",
          height: "100%",
          position: "absolute",
          border: "2px solid white"
        },
        "&:hover": {
          backgroundColor: primary.main
        },
        "&$disabled": {
          backgroundColor: primary.main,
          color: "white",
          opacity: 0.5
        }
      },
      containedSecondary: {
        color: "white",
        boxShadow: "none",
        border: `6px solid ${secondary.main}`,
        "&:before": {
          content: "''",
          width: "100%",
          height: "100%",
          position: "absolute",
          border: "2px solid white"
        },
        "&:hover": {
          backgroundColor: secondary.main
        },
        "&$disabled": {
          backgroundColor: secondary.main,
          color: "white",
          opacity: 0.5
        }
      },
      outlined: {
        borderWidth: [2, "!important"],
        borderColor: text.primary
      },
      outlinedPrimary: {
        borderColor: primary.main,
        "&$disabled": {
          color: primary.main,
          borderColor: primary.main,
          opacity: 0.5
        }
      },
      outlinedSecondary: {
        borderColor: secondary.main,
        borderRadius: "10px",
        padding: "5px 25px",
        "&$disabled": {
          color: secondary.main,
          borderColor: secondary.main,
          opacity: 0.5
        }
      },
      text: {
        color: text.primary,
        "&$disabled": {
          color: text.primary,
          opacity: 0.5
        }
      },
      textPrimary: {
        color: primary.main,
        "&$disabled": {
          color: primary.main,
          opacity: 0.5
        }
      },
      textSecondary: {
        color: secondary.main,
        "&$disabled": {
          color: secondary.main,
          opacity: 0.5
        }
      }
    },
    MuiFab: {
      root: {
        height: 68,
        width: 68,
        fontSize: "1.4666rem",
        "@media (max-width:735px)": {
          height: 47,
          width: 47,
          fontSize: "1.2rem"
        },
        boxShadow: "none",
        color: text.primary,
        backgroundColor: "transparent",
        border: `1px solid ${text.primary}`,
        "&$disabled": {
          color: text.primary,
          backgroundColor: "transparent",
          opacity: 0.5
        }
      },
      primary: {
        color: primary.main,
        backgroundColor: "transparent",
        border: `1px solid ${primary.main}`,
        "&:hover": {
          backgroundColor: "inherit !important"
        }
      },
      secondary: {
        color: secondary.main,
        backgroundColor: "transparent",
        border: `1px solid ${secondary.main}`
      }
    },
    MuiDialog: {
      root: {
        zIndex: 1301
      },
      paper: {
        width: "100%",
        maxWidth: [800, "!important"],
        boxShadow: "0px 3px 6px #00000029"
      },
      paperFullScreen: {
        maxWidth: ["100%", "!important"]
      }
    },
    MuiDialogTitle: {
      root: {
      }
    },
    MuiDialogContent: {
      root: {
      }
    },
    MuiDialogActions: {
      root: {
        paddingTop: 0
      }
    },
    MuiCard: {
      root: {
        boxShadow: "-14px 0px 26px #00000012"
      }
    },
    MuiAppBar: {
      colorPrimary: {
        color: "white"
      }
    },
    MuiFormLabel: {
      root: {
        "&$focused": {
          color: "white"
        }
      }
    },
    MuiInputLabel: {
      
      outlined: {
        transform: "translate(14px, 14px) scale(1)"
      },
      filled: {
        color: "white",
        "&$focused": {
          color: "white"
        }
      }
    },
    MuiOutlinedInput: {
      root: {
        borderRadius: 0,
        "&:hover": {
          "& $notchedOutline": {
            borderColor: primary.main,
            color: "white"
          }
        }
      },
      notchedOutline: {
        borderColor: primary.main,
        borderWidth: [1, "!important"],
        "& > legend": {
          maxWidth: ["0.01px", "!important"]
        }
      }
    },
    MuiSelect: {
      select: {
        "&:focus": {
          backgroundColor: "transparent"
        }
      },
      outlined: {
        padding: "12px 14px"
      },
      iconOutlined: {
        color: "inherit",
        top: "calc(50% - 9px)"
      }
    },
    MuiFilledInput: {
      root: {
        borderRadius: [33, "!important"],
        backgroundColor: primary.main,
        color: "white",
        "&:hover": {
          backgroundColor: primary.main,
          "&:after": {
            borderBottom: "none"
          },
          "&:before": {
            borderBottom: ["none", "!important"]
          }
        },
        "&$focused": {
          backgroundColor: [primary.main, "!important"]
        },
        "&:not(.MuiInputBase-formControl)": {
          "& .MuiFilledInput-input": {
            padding: "12px 10px",
            fontSize: "4.7333rem",
            fontWeight: 400,
            color: "white"
          }
        }
      },
      underline: {
        "&:after": {
          borderBottom: "none"
        },
        "&:before": {
          borderBottom: "none"
        }
      }
    },
    
  }
})
