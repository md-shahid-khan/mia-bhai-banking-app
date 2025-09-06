import React from 'react'
import Header from "@/components/Header";

const Home = () => {
    const loggedIn = {firstname:"shahid"};
    return (
        <section className="home">
            <div className="home-content">
                <Header type="greeting"
                        title="Welocme"
                        user={loggedIn?.firstname || "guest"}
                        subtext="Access and manage you account and transaction"
                />
            </div>
        </section>
    )
}
export default Home
