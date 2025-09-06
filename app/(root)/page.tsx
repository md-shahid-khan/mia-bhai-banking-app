import React from 'react'
import Header from "@/components/Header";
import TotalBalanceBox from "@/components/TotalBalanceBox";

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
                <TotalBalanceBox
                accounts={[]}
                totalBanks={1}
                totalCurrentBanlance={1250.35}
                />
            </div>
        </section>
    )
}
export default Home
