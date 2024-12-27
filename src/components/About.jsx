import React, { useContext } from "react";
import { ApiContext } from '../ApiProvider';
const About = () => {
    const { data, loading } = useContext(ApiContext);
    console.log(data)
  return (
    <div>About</div>
  )
}

export default About