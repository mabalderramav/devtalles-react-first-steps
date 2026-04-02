export const ItemCounter = () => {
    return (
        <section style={{
            display: 'flex',
            alignItems: 'center',
            gap: '10px',
            marginBottom: '20px',
        }}>
            <span style={{
                width: '160px',
            }}> Nintendo switch 2</span>
            <button>+1</button>
            <span>10</span>
            <button>-1</button>
        </section>
    )
}