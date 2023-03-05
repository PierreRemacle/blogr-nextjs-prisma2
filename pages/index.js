import styles from '../components/layout2.module.css';
import Link from 'next/link';
import AuthenticatedComponent from './api/AuthenticatedComponent';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faEnvelope,
    faPhone,
    faLocation,
    faCalendarDay,
    faChalkboardTeacher,
    faMoneyBill
  } from "@fortawesome/free-solid-svg-icons";
import {
faFacebook
} from "@fortawesome/free-brands-svg-icons";

export default function FirstPost() {
    return (   
        <>
        <div className={styles.header}>
            <nav className={styles.topnav}>
                <Link href="" className="active">Home</Link>
                <Link href="reservation">Reservation</Link>
                <AuthenticatedComponent>
                <Link href="transition">Transition</Link>
                <Link href="students">Students</Link>
                <Link href="ListOfReservation">Table</Link>
                </AuthenticatedComponent>
            </nav>
        </div> 
        <div>
            <div className={styles.logo}>
                <img src='images/LOGO_Rework.png' ></img>
                <h2 >  Soutien scolaire pour les élèves du secondaire supérieur </h2>
            </div>
            <div className={styles.one}>
                <div  className={styles.bench}></div>   
            </div>
        </div>

        <div className={styles.two}>
            <h2>Bienvenue à l'ASBL Rework, où nous nous engageons à offrir un soutien scolaire de qualité en mathématiques, sciences, physique et chimie.</h2>
        </div>
        <div className={styles.tree}>

            <h1> Equipe </h1>
            <h2> Notre équipe est constituée d’étudiants universitaires dans le domaine des sciences exactes. </h2>
            <h2>  Notre mission est de transmettre nos connaissances et notre passion pour les sciences à la nouvelle génération. Nous désirons offrir à tout étudiant l’opportunité de réussir dans ces matières complexes.</h2>
            <h2> En tant qu'association, nous nous engageons à préparer les jeunes pour qu'ils réussissent et se construisent un avenir prometteur.</h2>
        </div>

        <div className={styles.block}>
                <h3> Cours particuliers </h3>
                <div className={styles.paragraphe}>
                    <div className={styles.pright}>
                        <p> Nous accueillons les élèves pour répondre à leurs questions et les aider dans la compréhension de leurs devoirs et leurs leçons </p>
                        <br></br>
                        <ul> <FontAwesomeIcon icon={faLocation}/> Où? Collège Saint-Croix Hannut. </ul>
                        <ul> <FontAwesomeIcon icon={faCalendarDay}/> Quand? les samedis matin (10-13h) </ul>
                        <ul> <FontAwesomeIcon icon={faChalkboardTeacher}/> Comment? les cours sont donné par groupe de 4 </ul>
                        <ul> <FontAwesomeIcon icon={faMoneyBill}/> Tarif? 35€/3h </ul>
                        <br></br>
                        <div class={styles.buttonContainer}>
                            <a class={styles.button} href="reservation">Prenez contact avec nous</a>
                        </div>
                        <br></br>
                    </div>
                </div>
                
            </div>
        <div className={styles.four}>
                
                <div className={styles.four}>

                <ul> 
                    
                    <p> 
                    <a href="mailto:communication@rework.education" title="Email" className={styles.lables2}><FontAwesomeIcon icon={faEnvelope}/></a><span className={styles.lables}>Email:</span> <a href="mailto:communication@rework.education" className={styles.lables1}>communication@rework.education</a>
                    </p>
                    <p> 
                    <a href="tel:0493033415" title="Téléphone" className={styles.lables2}><FontAwesomeIcon icon={faPhone}/></a><span className={styles.lables}>Téléphone:</span> <a href="tel:0493033415" className={styles.lables1}>0493/033415</a>
                    </p>
                    <p> 
                    <a href="https://www.facebook.com/profile.php?id=100090766090539" title="Facebook" className={styles.lables2}><FontAwesomeIcon icon={faFacebook}/></a><span className={styles.lables}>Facebook:</span> <a href="https://www.facebook.com/profile.php?id=100090766090539" className={styles.lables1}>Rework</a>  
                    </p>
                </ul>
                </div>
                </div>
        </>
    )
}