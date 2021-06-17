import logo from './logo.svg';
import React, {Components} from 'react'
import './App.css';
import Header from './Components/Header.js'
import Menu from './Components/Menu.js'
import Footer  from './Components/Footer.js'
import Technologies from './Components/Technologies.js'
const App = () => {
  return (
  <div>
    <div className ='app-wrapper'>
      <header className = 'header'>
        <img src ='https://cs13.pikabu.ru/post_img/big/2020/02/13/6/1581583975158582080.jpg'/>
      </header>
      <div className = 'menu'><Menu  /></div>
      <div className='technologies'><Technologies /></div>
      <div className='footer'><Footer /></div>
      <div className='content'><img src ='https://i.pinimg.com/originals/f4/4b/be/f44bbe0a87e9e260a56118de5416edf9.jpg'/></div>
    </div> 
  </div>
  )
}



export default App;
