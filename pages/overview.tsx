
import Head from "next/head"
import React from "react"
import Router, { useRouter } from "next/router"
import NavBar from "../components/NavBar"

export default function Overview() {

    return (
        <div>
            <Head>
                <title>Organization Overview</title>
            </Head>
            <NavBar />
            <h1 className="">Organizations</h1>
            <button value={""} onClick={() => {Router.push("/")}}>+ New Organization</button>
        </div>
    )
}
