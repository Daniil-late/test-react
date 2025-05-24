import BlockWithContent, { Title } from "./ElementBlock";

export default function Content(){
    return(<div className="content">
        <Title data_text={'Мой заголовок'}></Title>
        <BlockWithContent  imgSRC={'https://i.pinimg.com/originals/d6/2f/7a/d62f7a3c28313606a651d639987f7439.jpg'} textContent={'Многие годы человечество желало одного. Чтобы этот текст грузился из другого компонента. Но разраб устал'}></BlockWithContent>
        </div>)
}