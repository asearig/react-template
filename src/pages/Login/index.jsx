import React from "react"
import useStyles from "./styles"
import { useDispatch, useSelector } from "react-redux"
import { setCurrentUser, setError } from "../../actions/user"
import { useFormik } from "formik"
import { TextField, Button } from '@material-ui/core'
import { Alert } from '@material-ui/lab';

const Login = ({ routes = [], ...props }) => {
  const classes = useStyles()
  const dispatch = useDispatch()

  const initialValues = useSelector(state => state.user)

  const formik = useFormik({
    initialValues: {
      name: initialValues.name,
      secret: ''
    },
    onSubmit: values => {
      dispatch(setCurrentUser(values.name, values.secret))
    }
  })

  const handleClose = () => {
    dispatch(setError(false))
  }

  return (
    <div className={classes.login}>
      <form className={classes.form} onSubmit={formik.handleSubmit}>
        <div className={classes.textContainer}>
          <TextField 
            label="Name" 
            name="name"
            type="text"
            onChange={formik.handleChange}
            value={formik.values.name}
            className={classes.textField}
            classes={{
              root: classes.textRoot
            }}/>
          <TextField 
            label="Secret" 
            name="secret"
            type="password"
            onChange={formik.handleChange}
            value={formik.values.secret}
            className={classes.textField}
            classes={{
              root: classes.textRoot
            }}/>
        </div>
        {
        initialValues.error && 
        <Alert severity="error" onClose={handleClose}>
          Entered Secret is Incorrect
        </Alert> 
        }
        <Button variant="contained" type="submit" className={classes.submitButton}>Enter</Button>
      </form>
    </div>
  )
}

export default Login
