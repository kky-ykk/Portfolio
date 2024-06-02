
import styles from "./about.module.css";
import { RiAccountCircleFill } from "react-icons/ri";


function About() {
    
    return (
        <>
            <div className={styles.mainContainer}>

                <h1 className={styles.aboutSection}>About Me
                <span><RiAccountCircleFill size={40}/></span>
                </h1>

                <hr className={styles.hrLine} />

                <div className={styles.contentContainer}>

                    <div className={styles.introSection}>
                        <h3> Passionate Software Developer</h3>
                        <p>
                        I'm a motivated MCA student with a strong grasp of Java and web development tools like JavaScript, React, Node.js and spring boot. To build my skills, I've participated in coding projects, which helped me learn and become a better problem solver. I've also tackled over 500+ coding challenges on websites like GeeksforGeeks and LeetCode, proving I can think clearly and find solutions quickly.
                        </p>
                    </div>

                    <div className={styles.infoSection}>
                        <h3>Personal Information</h3>
                        
                        <ul>
                            <li className={styles.infoUl}>
                                <span className={styles.title}>Name</span>
                                : <span className="value">Krishna Yadav</span>
                            </li>
                            <li className={styles.infoUl}>
                                <span className={styles.title}>Age</span>
                                : <span className="value">23</span>
                            </li>
                            <li className={styles.infoUl}>
                                <span className={styles.title}>Email</span>
                                : <span className="value">kishanyadavcs21@gmail.com</span>
                            </li>
                            <li className={styles.infoUl}>
                                <span className={styles.title}>Residence</span>
                                : <span className="value">Siwan,Bihar</span>
                            </li>
                        </ul>
                        <div className={styles.btnResumediv}>
                            <button className={styles.btnResume}><a href="https://drive.google.com/file/d/1cFWwkzNUsu6kdgTfR3J_3V-R5rh68nB0/view?usp=sharing">DOWNLOAD RESUME</a></button>
                        </div>
                    </div>

                </div>


            </div>
        </>
    )
}

export default About;