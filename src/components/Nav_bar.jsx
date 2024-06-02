
import styles from "./Nav_bar.module.css";
import { IoMdHome } from "react-icons/io";
import { RiAccountCircleFill } from "react-icons/ri";
import { PiCertificateFill } from "react-icons/pi";
import { IoMdMail } from "react-icons/io";
import { RiComputerFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGeeksforgeeks } from "react-icons/si";
import { FaSquareInstagram } from "react-icons/fa6";
import { useState } from "react";
import { HiOutlineMenuAlt2 } from "react-icons/hi";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import profile01 from "../assets/profile.jpg";


function NavBar(){

    let [showMenu,setShowMenu]=useState(true);

    

    return (
        <>
            
            <div className={styles.itemsContainer}>
                <span onClick={()=>setShowMenu(showMenu?false:true)} className={styles.menuOptions}> 
                       
                        
                    {showMenu && <RxCross2 color="black"/>}
                    {!showMenu && <HiOutlineMenuAlt2 />}

                </span>
                {
                    showMenu && 
                    <div className={styles.menusContainer}>

                    <div className={styles.imageContainer}>
                        <h1 className={styles.MyName}>Krishna</h1>
                        <img src={profile01} alt="profile-photo" className={styles.profileImage}/>
                    </div>

                    
                    <nav className={styles.navMenu}>
                        <ul className={styles.navs}>
                            <li>
                                <Link to="/">
                                    <IoMdHome size={21}/>
                                    &nbsp;&nbsp;
                                    Home
                                </Link>
                            </li>
                            <li>
                                <Link to="/about">
                                <RiAccountCircleFill size={21}/>
                                    &nbsp;&nbsp;About Me</Link>
                            </li>
                            <li>
                                <Link to="/resume">
                                <PiCertificateFill size={21}/>
                                    &nbsp;&nbsp;Resume</Link>
                            </li>
                            <li>
                                <Link to="/projects">
                                <RiComputerFill size={21}/>
                                    &nbsp;&nbsp;Projects</Link>
                            </li>
                            <li>
                                <Link to="/contact">
                                <IoMdMail size={21}/>
                                    &nbsp;&nbsp;Contact</Link>
                            </li>
                        </ul>
                    </nav>

                    <div className={styles.navFooter}>
                        <nav >
                            <ul>

                                <li>
                                    <Link to="https://www.linkedin.com/in/kishan-yadav-981892219/">
                                    <FaLinkedin color="white" size={17} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://leetcode.com/u/kky-ykk/">
                                    <SiLeetcode color="white" size={17} />
                                    </Link>
                                </li>
                                <li>
                                    <Link to="https://www.geeksforgeeks.org/user/kkykishan21/">
                                    <SiGeeksforgeeks color="white" size={17} />
                                    </Link>
                                </li >
                                <li>
                                    <Link to="https://github.com/kky-ykk">
                                    <FaGithub color="white" size={17}/>

                                    </Link>
                                </li>

                            </ul>
                        </nav>

                        <div className={styles.navCopyright}>
                            2024 © KKY - 📝
                        </div>
                    </div>
                </div>
                }
            </div>
        </>
    )
}

export default  NavBar;