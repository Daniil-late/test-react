export function Title(titleText){
    return(
        <h1 className="content__title">{titleText}</h1>
    )
}

export default function BlockWithContent({imgSRC,textContent}){
    return(<div className="content__blocks">
        <div className="content__img">
            <img src={imgSRC} alt="lion" width={'800px'} height={'800px'}></img>
        </div>
        <div className="content__text">
            <p className="textContent">{textContent}</p>
        </div>
    </div>)
}