
// import { useState, useEffect } from 'react';

// const useFavorites = () => {
//   const [favorites, setFavorites] = useState([]);

//   useEffect(() => {
//     const storedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
//     setFavorites(storedFavorites);
//   }, []);

//   const addFavorite = (pokemon) => {
//     const newFavorites = [...favorites, pokemon];
//     setFavorites(newFavorites);
//     localStorage.setItem('favorites', JSON.stringify(newFavorites));
//   };

//   return { favorites, addFavorite };
// };

// export default useFavorites;
