const name = 'Miguel Aldo';
const lastname = 'Balderrama Vaca';
const favoritesGames = ['League of Legends', 'Valorant', 'Overwatch'];
const isActive = true;
const address = {
    city: 'Buenos Aires',
    country: 'Argentina',
}
export function MyAwesomeApp() {
    return (
        <>
            <h1>{name}</h1>
            <h3>{lastname}</h3>
            <ul>
                {favoritesGames.map((game) => (
                    <li key={game}>{game}</li>
                ))}
            </ul>
            {isActive && <p>I'm active</p>}
            <h2>Address</h2>
            <p>I live in {address.city}, {address.country}</p>
        </>
    )
}