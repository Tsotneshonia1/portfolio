import React from "react";
import styles from "./auth.module.css";
import Link from "next/link";

const AuthLinks = () => {
  const status = "notauthenticated";
  return (
    <>
      {status === "notauthenticated" ? (
        <Link href="/Login">Login</Link>
      ) : (
        <>
          <Link href="/write">Write</Link>
          <span className={styles.link}> Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
