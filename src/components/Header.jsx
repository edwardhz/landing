import React,{useState} from 'react'


const Header = () => {

    const [show,setShow]=useState(false);

    const handleToggle = ()=>{
        setShow(!show);     
    }

  return (
    <>
    <header>
        
        <div className='logo' >_Edward_Hernandez</div>
            <div className='hamburger' onClick={handleToggle}>
            <div className='line'></div>
            <div className='line'></div>
            <div className='line'></div>
        </div>
        <nav className={show ? 'mobile' : 'nav-bar'}>
            <ul>
                <li>
                    <a href="" className='active'>Home</a>
                </li>
                <li>
                    <a href="" >Portfolio</a>
                </li>
                <li>
                    <a href="" >Contact</a>
                </li>
            </ul>
        </nav>
    
    </header>
    </>
    
  )
}

export default Header