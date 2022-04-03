import './star.css'

export default function Star(){
    let array = []
    for(let i = 0; i< 500;i++){
        array.push(i)
    }
    return (
        array.map((i) => (
            <div className={i % 2 === 0 ? 'startleft' : 'starright'}style={{
                position: 'absolute',
                transform: 'translate(-10px, 20px)',
                left: Math.floor(Math.random() * (1300 - 20 + 1)) + 20 + 'px',
                top: Math.floor(Math.random() * (700 - 20 + 1)) + 20 + 'px'
            }}
            ></div>
        ) )
    )
}