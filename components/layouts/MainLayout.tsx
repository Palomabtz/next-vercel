import Head from "next/head";
import styles from "./MainLayout.module.css";
import { Navbar } from "../Navbar";
import { FC } from 'react';

export const MainLayout: FC = ({ children }) => {
  return (
    <div className={styles.container}>
      <Head>
        <title>Home - Paloma</title>
        <meta name="description" content="Home page" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar></Navbar>
      <main className={styles.main}>{children}</main>
    </div>
  );
};
