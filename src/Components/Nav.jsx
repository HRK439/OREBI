
import { HiOutlineBars3BottomLeft } from "react-icons/hi2"
import Container from "./Container"
import { FaCaretRight, FaSortDown, FaUser } from "react-icons/fa"
import { useEffect, useRef, useState } from "react"
import { MdSearch } from "react-icons/md"
import { FaCartShopping } from "react-icons/fa6"
 

const Nav = () => {
   let cateRaf = useRef()
   let cateRof = useRef()
   let [show,setShow] = useState(false)
   let [accShow,setAccShow] = useState(false)
   useEffect(()=>{
      document.addEventListener("click",(e)=>{
         console.log(cateRaf.current.contains(e.target) == true);
         if (cateRaf.current.contains(e.target) == true) {
            setShow(!show)
         }else{
            setShow(false)
         }
         if (cateRof.current.contains(e.target) == true) {
            setAccShow(!accShow)
         }else{
            setAccShow(false)
         }
      })
      
   })
 
  return (
     <section className="bg-[#F5F5F3]">
        <Container>
        <div className="flex py-[20px] items-center">
            <div className="w-2/7 relative">
            <div ref={cateRaf} className="flex items-center gap-2 cursor-pointer">
               <HiOutlineBars3BottomLeft />
               <h2>Shop by Category</h2>
            </div>
            {show && 
            
            <div className="py-3 absolute left-0 top-[30px] w-full">
               <ul className="bg-[#262626] text-[#ffffff70]  pl-[10px]">
                  <li className="hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 border-b-[1px] border-[#2D2D2D] flex items-center justify-between pr-[10px] cursor-pointer">Accesories <FaCaretRight /></li>
                  <li className="hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 border-b-[1px] border-[#2D2D2D] flex items-center justify-between pr-[10px] cursor-pointer">Furniture <FaCaretRight /></li>
                  <li className="hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 border-b-[1px] border-[#2D2D2D] flex items-center justify-between pr-[10px] cursor-pointer">Electronics <FaCaretRight /></li>
                  <li className="hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 border-b-[1px] border-[#2D2D2D] flex items-center justify-between pr-[10px] cursor-pointer">Clothes <FaCaretRight /></li>
                  <li className="hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 border-b-[1px] border-[#2D2D2D] flex items-center justify-between pr-[10px] cursor-pointer">Bags <FaCaretRight /></li>
                  <li className="hover:text-[#FFFFFF] pl-[20px] duration-200 ease-in-out hover:pl-[30px] py-2 flex items-center justify-between pr-[10px] cursor-pointer">Home appliances <FaCaretRight /></li>
               </ul>
            </div>
            }
            </div>
            <div className="w-4/7">
            <div className="flex relative">
               <input type="text" placeholder="Search Products"  className="w-full bg-[#FFFFFF] rounded-full py-3 pl-4 outline-0" />
               <div className=" absolute top-[50%] right-0 translate-y-[-50%] pr-[20px]">
                  <MdSearch />
               </div>
            </div>
            </div>
            <div className="w-1/7">
            <div className="flex justify-end gap-x-3 relative ">
               <div ref={cateRof} className="flex">
                  <FaUser />
                  <FaSortDown />
            </div>
            {accShow && 
            
            <div className=" absolute  left-0 mt-[30px] w-full bg-[#FFFFFF] border-[1px] border-[#F0F0F0]  shadow-lg ">
               <ul className="text-center ">
                  <li className="hover:bg-[#2B2B2B] py-3 hover:text-[#FFFFFF]  duration-200">My Account</li>
                  <li className="hover:bg-[#2B2B2B] py-3 hover:text-[#FFFFFF] duration-200">Log Out</li>
               </ul>
            </div>
            
            }
            <div className="">
               <FaCartShopping />
            </div>
            </div>
            </div>
        </div>
     </Container>
     </section>
  )
}

export default Nav
