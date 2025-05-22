
import Jopa from './Popa';
import { Biba } from './Pizda'
import  Boba  from './Pizda'
import Cat from './Props';
import { Dog } from './Props';
import Navbar from './Blocks/Navbar'

const myText = 'Это мой текст из компоненты'

// какая-то динамо функция
const one = 1
function OnePlusOne(el){
return el += el
}

// объект стилей
const myStyle ={
  color_red: 'red',
  color_blue: 'blue',
  color_green: 'green',

  fontSize30: '30px',
  fontSize50: '50px'
}
export default function Gallery(){
  return(
    <section>
      <h1 style={{
        fontSize: '30px',
        color: 'blue'
      }}>
        Ниже я хуячу все эти компоненты
      </h1>
      <p style={{color: myStyle.color_green, fontSize: myStyle.fontSize50}}>{myText}</p><p>а это я считаю функцией OnePlusOne {OnePlusOne(one)}</p>
<Jopa></Jopa>
<Biba/>
<Boba/>
<Cat className='Cat' my_color={myStyle.color_blue} example_text={'test test'}></Cat>
<Cat my_color={'green'} example_text={'new test'}></Cat>
<Dog my_prop_text={'prop text'} my_prop_title={'title by props'}></Dog>



    </section>
  )
}
