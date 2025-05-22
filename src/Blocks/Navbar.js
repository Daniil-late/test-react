// тут я напишу код для навигационной панели
export function Li({className, list_text, list_href}){    
return(
    <li className={className}><a href={list_href}>
    {list_text}</a>
    </li>
)
}
function Navbar(){
    return(
        <>
        <nav style={
            {
            backgroundColor:'aqua',
            padding:'15px'
            }
        }>
            <ul style={
                {display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-around'
                }
            }>
                <Li className={'nav__list'} list_text={'Home'} list_href={'home'}></Li>
               <Li className={'nav__list'} list_text={'News'} list_href={'news'}></Li>
                <Li className={'nav__list'} list_text={'Contacts'} list_href={'contacts'}></Li>
            </ul>
        </nav>
        </>
    )
}

export default Navbar