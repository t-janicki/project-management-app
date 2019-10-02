// import React, {useEffect, useState} from 'react';
// import {Button, Tab, Tabs, TextField, InputAdornment, Icon, Typography} from '@material-ui/core';
// import {orange} from '@material-ui/core/colors';
// import {makeStyles} from '@material-ui/styles';
// import {FuseAnimate, FusePageCarded, FuseChipSelect, FuseUtils, DemoContent} from '../../../../../../@fuse';
// import {useForm} from '@fuse/hooks';
// import {Link} from 'react-router-dom';
// import clsx from 'clsx';
// import _ from '@lodash';
// import {useDispatch, useSelector} from 'react-redux';
// import withReducer from '../../../../../../app/store/withReducer';
// import * as Actions from '../../store/actions';
// import reducer from '../../store/reducers';
// import Paper from '@material-ui/core/Paper';
// import InputBase from '@material-ui/core/InputBase';
// import Divider from '@material-ui/core/Divider';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import SearchIcon from '@material-ui/icons/Search';
// import DirectionsIcon from '@material-ui/icons/Directions';
// import Search from './Search'
// import Movie from './Movie'
//
// const useStyles = makeStyles({
//     layoutRoot: {}
// });
//
// const MOVIE_API_URL = "https://www.omdbapi.com/?s=man&apikey=4a3b711b"; // you should replace this with yours
// const API_CALL = 'https://shielded-brook-69228.herokuapp.com/api/customers/phone?phone=6413412123';
//
//
// function NewOrder(props) {
//
//     const [loading, setLoading] = useState(true);
//     const [movies, setMovies] = useState([]);
//     const [errorMessage, setErrorMessage] = useState(null);
//
//     useEffect(() => {
//         fetch(MOVIE_API_URL)
//             .then(response => response.json())
//             .then(jsonResponse => {
//                 setMovies(jsonResponse.Search);
//                 console.log(jsonResponse.Search);
//                 setLoading(false);
//             });
//     }, []);
//
//     const search = searchValue => {
//         setLoading(true);
//         setErrorMessage(null);
//
//         fetch(`https://www.omdbapi.com/?s=${searchValue}&apikey=4a3b711b`)
//             .then(response => response.json())
//             .then(jsonResponse => {
//                 if (jsonResponse.Response === "True") {
//                     setMovies(jsonResponse.Search);
//                     setLoading(false);
//                 } else {
//                     setErrorMessage(jsonResponse.Error);
//                     setLoading(false);
//                 }
//             });
//     };
//
//
//
//     const classes = useStyles();
//
//     return (
//         <FusePageCarded
//             classes={{
//                 root: classes.layoutRoot
//             }}
//             header={
//                 <div className="py-24"><h4>Header</h4></div>
//             }
//             contentToolbar={
//                 <div className="px-24">
//                     <h4>Content Toolbar</h4>
//                 </div>
//             }
//             content={
//                 <div className="App">
//                     <Search search={search} />
//                     <p className="App-intro">Sharing a few of our favourite movies</p>
//                     <div className="movies">
//                         {loading && !errorMessage ? (
//                             <span>loading...</span>
//                         ) : errorMessage ? (
//                             <div className="errorMessage">{errorMessage}</div>
//                         ) : (
//                             movies.map((movie, index) => (
//                                 <Movie key={`${index}-${movie.Title}`} movie={movie} />
//                             ))
//                         )}
//                     </div>
//                 </div>
//             }
//             innerScroll
//         />
//     )
// }
//
// export default withReducer('eCommerceApp', reducer)(NewOrder);
