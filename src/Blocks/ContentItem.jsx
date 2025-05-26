export default function ContentItem({contentTitle, contentText, contentIMG, contentDate}) {
    if (contentDate){
 return (
        <div className="content_item">
            <div className="content_item__title">{contentTitle}</div>
            <div className="content_item__img"><img src={contentIMG} width={'100%'}></img></div>
            <div className="content_item__text">{contentText}</div>
            <div className="content_item__text___date">{contentDate}</div>
        </div>
    )
    } else{
        return(
             <div className="content_item">
            <div className="content_item__title">{contentTitle}</div>
            <div className="content_item__img"><img src={contentIMG} width={'100%'}></img></div>
            <div className="content_item__text">{contentText}</div>
        </div>
        )
    }
   
}