export function Title({data_text}){
    return(
        <h1 className="content__title">{data_text}</h1>
    )
}

export default function BlockWithContent({imgSRC,textContent}){
    return(<div className="content__blocks">
        <div className="content__img">
            <img src={imgSRC} alt="lion" width={'500px'} height={'300px'}></img>
        </div>
        <div className="content__text">
            <p className="textContent">{textContent}</p>
        </div>
    </div>)
}