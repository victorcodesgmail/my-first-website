import React from 'react'
import { Footer,Blog, Possibility, Whatgpt3,Features, Header } from './containers'
import { Navbar, CTA, Brand,Form, Feature } from './components'
import './App.css'

const App = () => {
  return (
    <div className='APP'>
<div className='gradient__bg'>
<Navbar/>
  <Form />
    <Navbar/>
    <Header/>
</div>
<Brand/>
<Whatgpt3/>
<Features/>
<Possibility/>
<CTA/>
<Blog/>
<Footer/>
    </div>
  )
}

export default App