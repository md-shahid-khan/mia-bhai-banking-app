import React from 'react'
import Header from "@/components/Header";
import TotalBalanceBox from "@/components/TotalBalanceBox";
import RightSidebar from "@/components/RightSidebar";

const Home = () => {
    const loggedIn = {firstname:"shahid", lastname:"khan", email:"shahid@gmail.com"};
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
                RECENT TRANSACTION
            </div>
            <RightSidebar
                transactions={[]}
                banks={[{currentBalance:123.40}, {currentBalance: 678.09}]}
                user={loggedIn}/>
        </section>
    )
}
export default Home
