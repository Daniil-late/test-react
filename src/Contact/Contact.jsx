import { useEffect } from "react";
export default function Contact() {
    useEffect(() => {
        if (window.sendURL) {
            window.sendURL()
        }
    }, []);
    return (
        <>
            <h1>Связаться с нами</h1>
            <p>Вообще, контакты есть в футере, но я очень хотел сделать эту страницу с обратной формой</p>
            <form action={'#'} id="contactForm">
                <input type="text" name="formName" placeholder="Имя" id="formName"/>
                <input type="tel" name="formTel" id="formTel" placeholder="+7(999)123-45-67"/>
                <input type="button" value="Свяжитесь со мной" />
            </form>
        </>
    )
}