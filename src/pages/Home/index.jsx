import React from "react"
import useStyles from "./styles"

const Home = ({ routes = [], ...props }) => {
  const classes = useStyles()

  return (
    <div className={classes.home}>
      <h1>Welcome, {props.name}! This is a generic web app.</h1>
    </div>
  )
}

export default Home
