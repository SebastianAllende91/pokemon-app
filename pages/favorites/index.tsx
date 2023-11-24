import { useEffect, useState } from "react";
import { Layout } from "../../components/layouts";
import NoFavorites from "../../components/ui/NoFavorites";
import { localFavorites } from "../../utils";
import FavoritePokemons from "../../components/pokemon/FavoritePokemons";

const FavoritesPage = () => {
  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons(localFavorites.pokemons);
  }, []);

  return (
    <Layout title="Pokémons - Favoritos">
      {favoritesPokemons.length == 0 ? (
        <NoFavorites />
      ) : (
        <FavoritePokemons favoritesPokemons={favoritesPokemons} />
      )}
    </Layout>
  );
};

export default FavoritesPage;
