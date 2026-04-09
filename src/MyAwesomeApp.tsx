import type {CSSProperties} from "react";

const name = 'Miguel Aldo';
const lastname = 'Balderrama Vaca';
const favoritesGames = ['League of Legends', 'Valorant', 'Overwatch'];
const isActive = false;
const address = {
    city: 'Buenos Aires',
    country: 'Argentina',
}
const myStyle: CSSProperties = {
    backgroundColor: isActive ? 'red' : 'orange',
    borderRadius: '10px',
    padding: '10px',
    margin: '10px',
}

export function MyAwesomeApp() {
    return (
        <>
            <h1 className="text-xl font-bold">{name}</h1>
            <h3>{lastname}</h3>
            <ul
                style={{
                    backgroundColor: 'green',
                    borderRadius: '10px',
                }}
            >
                {favoritesGames.map((game) => (
                    <li key={game}>{game}</li>
                ))}
            </ul>
            {isActive && <p>I'm active</p>}
            <h2>Address</h2>
            <p
                style={myStyle}
            >I live in {address.city}, {address.country}</p>
        </>
    )
}