import ContentItem from "../Blocks/ContentItem.jsx";
import { useEffect } from "react";


export default function News() {
    useEffect(() => {
        if (window.sendURL) {
            window.sendURL()
        }
    }, []);
    return (
        <>
            <h1>Новости</h1>
            <div className="content_all">
                <ContentItem contentTitle={'Невероятно!'} contentText={'Люди были в шоке, когда узнали, что следующим президентом будет...'} contentIMG={'https://sherg.az/storage/posts/June2022/a0khmxfb48N4w9cJTBrQ.jpg'} contentDate={'2030-05-21'}></ContentItem>
                <ContentItem contentTitle={'Вот это да!'} contentText={'Ученые выяснили, что кошки могут мутировать в самолет, просто не хотят этого делать'} contentIMG={'https://i.pinimg.com/originals/03/33/93/03339378992293f41ede19598fa0a547.jpg'} contentDate={'2025-01-21'}></ContentItem>
                <ContentItem contentTitle={'А вы задумывались...'} contentText={'Что на самомо деле камни мягкие, но твердеют от наших касаний'} contentIMG={'https://thumbs.dreamstime.com/b/round-stone-hand-6962431.jpg'} contentDate={'2021-05-21'}></ContentItem>
                <ContentItem contentTitle={'Невероятно, но факт'} contentText={'Люди с высоким ростом быстрее узнают о дожде'} contentIMG={'https://img-s3.onedio.com/id-5a511a75fa98af8010a35186/rev-0/raw/s-797b7f7ace9f3dff1e3a7ac8bc8bbfafda3c9586.jpg'} contentDate={'2021-12-21'}></ContentItem>
                <ContentItem contentTitle={'В это сложно поверить, но'} contentText={'Блондины чаще бывали в космосе, чем лошади'} contentIMG={'https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png'} contentDate={'2025-01-21'}></ContentItem>
                <ContentItem contentTitle={'А вы знали'} contentText={'что на каждого Бибу приходится свой Боба?'} contentIMG={'https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png'} contentDate={'2025-05-21'}></ContentItem>
                <ContentItem contentTitle={'Кто бы мог подумать'} contentText={'Придумывание бредовых новостей укорачивает жизнь'} contentIMG={'https://i.pinimg.com/originals/26/91/f2/2691f2fa1a0f078f5f274edf7fea6763.png'} contentDate={'2024-02-31'}></ContentItem>
            </div>
        </>
    )
}