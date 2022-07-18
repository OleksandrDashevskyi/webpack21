import Post from "./Post";
import json from "./assets/json.json";
import WebpackLogo from "./assets/kisspng-webpack-computer-icons-scalable-vector-graphics-re-webpack-svg-icon-transparent-amp-png-clipart-fre-5cb7987106ca27.6083469215555359850278.png"
import './styles/styles.css';

const post = new Post("Webpack Post Title",  WebpackLogo);

console.log("Post to String", post);

console.log("JSON:", json)