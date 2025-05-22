import { Li } from "./Navbar"
export default function Footer(){
    return(
        <footer className="footer">
        <Li className={'footer__list'} list_text={'VK'} list_href={'https://t.me/s/yandex'}></Li>
        <Li className={'footer__list'} list_text={'YT'} list_href={'https://t.me/s/yandex'}></Li>
        <Li className={'footer__list'} list_text={'TG'} list_href={'https://t.me/s/yandex'}></Li>
        </footer>
    )
}