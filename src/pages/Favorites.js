import {useContext} from "react";
import FavoritesContext from "../store/favorites-context";
import MeetupList from "../component/meetups/MeetupList";

function FavoritesPage() {
    const favoritesCtx = useContext(FavoritesContext);

    let context;

    if (favoritesCtx.totalFavorites === 0) {
        context = <p>You got no favorites yet. Start adding some?</p>
    } else {
        context = <MeetupList meetups={favoritesCtx.favorites} />
    }

    return (
        <section>
            <h1>My Favorites</h1>
            {context}
        </section>
    );
}

export default FavoritesPage;
