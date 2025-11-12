
import styles from "./Header.module.css"
const Header = ()=> {
  return (
    <div className={styles.container}>
        <h1>Contact App</h1>
        <div className={styles.subtitle}>

            <div className={styles.badge}>
                <a href="https://getbootstrap.com/">Bootstrap</a>
            </div>
            <div className={styles.title}>| React.js</div>

        </div>
        
    </div>
    
  )
}

export default Header