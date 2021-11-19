// import axios from "../axios";
// import { Link } from "react-router-dom";
// import React, { useState, useEffect } from "react";

// const SingleMoviePage = ({ match }) => {
//   const API_KEY = "a8edea19a857945d92b43f492654cd0b";
//   const fetchMovieUrl = `/movie/${match.params.id}?api_key=${API_KEY}&language=en-US`;

//   const [movie, setMovie] = useState();

//   useEffect(() => {
//     async function fetchData() {
//       const request = await axios.get(fetchMovieUrl);
//       setMovie(request.data);
//       console.log(request.data);
//       return request;
//     }
//     fetchData();
//   }, [match]);

//   const baseURL = "https://image.tmdb.org/t/p/original/";
//   function truncate(str, n) {
//     return str?.length > n ? str.substr(0, n - 1) + "..." : str;
//   }

//   return (
//     <>
//       <div
//         className="jumbotron"
//         style={{
//           backgroundImage: `url(${baseURL}${movie?.backdrop_path})`,
//           backgroundPosition: "center center",
//           backgroundSize: "cover"
//         }}
//       >
//         <div className="contents">
//           <h1 className="title">
//             {movie?.title || movie?.name || movie?.original_name}
//           </h1>
//           <div>
//             <button>Play</button>
//             <button>My list</button>
//           </div>
//           <h1 className="des">{truncate(movie?.overview, 150)}</h1>
//         </div>
//         <div className="fade" />
//       </div>
//       {/* <div className="" style={{ paddingTop: "50px", color: "white" }}>
//         <h1 className="">
//           {movie?.title || movie?.name || movie?.original_name}
//         </h1>
//       </div> */}
//     </>
//   );
// };

// export default SingleMoviePage;
