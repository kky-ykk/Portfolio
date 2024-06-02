import styles from "./projects.module.css";
import { RiComputerFill } from "react-icons/ri";
import calimg from "../assets/calculator-Project.png";
import { IoCodeSlashOutline } from "react-icons/io5";
import { IoIosRocket } from "react-icons/io";
import todoimg from "../assets/todo.png";
import weatherimg from "../assets/weatherApp.png";
import webtemplateimg from "../assets/web-template.png";
import managerimg from "../assets/manager.jpg";


function Projects(){

    return(

        <>
            <div className={styles.mainContainer}>
                <div className={styles.headingContainer}>
                <h1 className={styles.aboutSection}>
                    Projects
                    <span>
                        <RiComputerFill size={21}/>
                    </span>
                </h1>

                <hr className={styles.hrLine} />
                </div>

                {/* projects lists */}

                <div className={styles.educationContainer}>
                    <h3 className={styles.headSec}>Projects</h3>

                    <div className={styles.projectsContainer}>


                        <div className={styles.project01}>
                            <div className={styles.imgp}>
                                <img src={todoimg} alt="task manager" />
                                <div className={styles.btnAction}>
                                        <a href="https://github.com/kky-ykk/Todo-Application">CODE <span><IoCodeSlashOutline size={15.8} /></span></a>
                                        <a href="https://kky-ykk.github.io/Todo-Application/">LIVE <IoIosRocket></IoIosRocket></a>
                                </div>
                            </div>

                            <div className={styles.projectInfo}>
                                <h3>Task Manager</h3>
                                <p>used html , css , JavaScript</p>
                            </div>
                        </div>

                        <div className={styles.project01}>
                            <div className={styles.imgp}>
                                <img src={webtemplateimg} alt="website templates" />
                                <div className={styles.btnAction}>
                                        <a href="https://github.com/kky-ykk/Website-Design">CODE <span><IoCodeSlashOutline size={15.8} /></span>
</a>
                                        <a href="https://kky-ykk.github.io/Website-Design/">LIVE <IoIosRocket></IoIosRocket></a>
                                </div>
                            </div>

                            <div className={styles.projectInfo}>
                                <h3>Website Design</h3>
                                <p>used html , css , JavaScript ,react</p>
                            </div>
                        </div>

                        <div className={styles.project01}>
                            <div className={styles.imgp}>
                                <img src={weatherimg} alt="weather app" />
                                <div className={styles.btnAction}>
                                        <a href="https://github.com/kky-ykk/WeatherApplication">CODE <span><IoCodeSlashOutline size={15.8} /></span>
</a>                                        <a href="https://kky-ykk.github.io/WeatherApplication/">LIVE <IoIosRocket></IoIosRocket></a>
                                </div>
                            </div>

                            <div className={styles.projectInfo}>
                                <h3>weatherApp Project</h3>
                                <p>used html , css , JavaScript</p>
                            </div>
                        </div>

                        <div className={styles.project01}>
                            <div className={styles.imgp}>
                                <img src={managerimg} alt="blood bank" />
                                <div className={styles.btnAction}>
                                        <a href="https://github.com/kky-ykk/Servlet_Project">CODE <span><IoCodeSlashOutline size={15.8} /></span></a>
                                        <a href="https://github.com/kky-ykk/Servlet_Project">LIVE <IoIosRocket></IoIosRocket></a>
                                </div>
                            </div>

                            <div className={styles.projectInfo}>
                                <h3> Blood Bank Project</h3>
                                <p>used html , css , java , servlet , jdbc</p>
                            </div>
                        </div>

                        <div className={styles.project01}>
                            <div className={styles.imgp}>
                                <img src={calimg} alt="calculator" />
                                <div className={styles.btnAction}>
                                        <a href="https://github.com/kky-ykk/Calculator-Project">CODE <span><IoCodeSlashOutline size={15.8} /></span></a>
                                        <a href="https://kky-ykk.github.io/Calculator-Project/">LIVE <IoIosRocket></IoIosRocket></a>
                                </div>
                            </div>

                            <div className={styles.projectInfo}>
                                <h3>Calculator Project</h3>
                                <p>used html , css , JavaScript</p>
                            </div>
                        </div>


                    </div>

                </div>

            </div>
        
        </>

    )

}


export default Projects;