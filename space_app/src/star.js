import './star.css'

export default function Star(){
    let arr = 400 
    const keyframes = `
    @keyframes example{
        from{
            background-color: rgb(195, 104, 255);
            transform:  translate(90vw, 50vh);
        }
        to{
            background-color: rgb(145, 49, 224);
            transform:  translate(-40vw, 0px);
        }    
    }
    `
    return (
        [...Array(arr)].map(() => (
            <div id='star' style={{
                position: 'absolute',
            left: Math.floor(Math.random() * (1400 - 20 + 1)) + 20 + 'px',
            top: Math.floor(Math.random() * (760 - 20 + 1)) + 20 + 'px',keyframes
          }}></div>
        ) )
    )
}