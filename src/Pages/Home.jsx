import logo from "../assets/Logo.png"
import Container from '../Components/Container'
import { GiCrossMark } from "react-icons/gi";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
const Home = () => {
    let [menu,setMenu] =useState(false)
    return (
        <section className="pt-[20px]">
            <Container>
                <div className="lg:flex justify-between items-center">
                    <div className="w-1/12">
                        <img src={logo} alt="" />
                    </div>
                    <div className="w-8/12  ">
                        <ul className="lg:flex gap-3 font-dm text-[14px] text-[#767676] mx-auto">
                            <li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200">Home</li>
                            <li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200">Shop</li>
                            <li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200">About</li>
                            <li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200">Contacts</li>
                            <li className="hover:font-bold hover:text-[#262626] lg:w-[80px] duration-200">Journal</li>
                        </ul>
                    </div>
                    <div className="w-1/12 lg:hidden" onClick={()=>setMenu(!menu)}>
                    {menu   
                    ?
                    <GiCrossMark />
                      
                    : 
                    <FaBars /> }
                         
                         
                    </div>
                </div>
            </Container>
        </section>
    )
}

export default Home
