import styles from "./resume.module.css";
import { PiCertificateFill } from "react-icons/pi";

function Resume() {
  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.headingContainer}>
          <h1 className={styles.aboutSection}>
            Resume
            <span>
              <PiCertificateFill size={40} />
            </span>
          </h1>

          <hr className={styles.hrLine} />
        </div>

        <div className={styles.educationContainer}>
          <h3 className={styles.headSec}>Education</h3>

          <div className={styles.educationCards}>
            <div className={styles.educard}>
              <p className={styles.pycard}>2020-2023</p>
              <h3>Bachelor of Computer Application(BCA)</h3>
              <p className={styles.clzcards}>
                Aryabhatta knowledege University
              </p>
              <p>
              Here is where I started learning programming languages. I scored 8.93 CGPA in BCA.
              </p>
            </div>

            <div className={styles.educard}>
              <p className={styles.pycard}>2023-2025</p>
              <h3>Master of Computer Application(BCA)</h3>
              <p className={styles.clzcards}>Quantum University</p>
              <p>
              Learning more skills and technologies like web development and AI. I am still pursuing.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.skillContainer}>
          <h3 className={styles.headSec}>Coding Skills</h3>

          <div className={styles.skillContainer}>

            <p>Java</p>
            <div className={styles.container}>
              <div className={`${styles.skills} ${styles.java}`}>95%</div>
            </div>

            <p>JavaScript</p>
            <div className={styles.container}>
              <div className={`${styles.skills} ${styles.js}`}>90%</div>
            </div>

            <p>HTML</p>
            <div className={styles.container}>
              <div className={`${styles.skills} ${styles.html}`}>90%</div>
            </div>

            <p>CSS</p>
            <div className={styles.container}>
              <div className={`${styles.skills} ${styles.css}`}>80%</div>
            </div>


          </div>
        </div>
      </div>
    </>
  );
}

export default Resume;
