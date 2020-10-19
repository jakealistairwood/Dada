import React from 'react'
import styles from "./Register.module.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

//Font Awesome:



export const Register = () => {


  return (
    <article className={styles.baseContainer}>
      <div className={styles.header}>Sign Up</div>
      <div className={styles.content}>
        <div className={styles.form}>
          <div className={styles.formGroup}>
            <input type="text" placeholder="Name"/>
            </div>
          <div className={styles.formGroup}>
            <input type="email" placeholder="Email"/>
            </div>
          <div className={styles.formGroup}>
            <input type="password" placeholder="Password"/>
            </div>
          <p className={styles.terms}>I read and agree to <strong>Terms and Condition</strong></p>
        </div>
        <div className={styles.footer}>
          <button type="button" className={styles.btn}>
            Sign Up
          </button>
        </div>
        <p className={styles.terms}>Already have an account? <strong><a>Login</a></strong></p>
        <p className={styles.orSignIn}>or sign in with</p>
       <i className="fab "></i><i className="fab fa-twitter"></i><i className="fab fa-google"></i>
      </div>
    </article>
  )
}


export default Register;