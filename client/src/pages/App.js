import React from "react";
import Login from "./Login";
import Link from "next/link";
import Head from "next/head";
import styles from "@/styles/general.module.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function App() {
  return (
    <>
      <Head>
        <title>Project-1</title>
    
      </Head>
      <Login />
    </>
  );
}
