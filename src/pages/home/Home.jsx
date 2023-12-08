import React from 'react';
// layouts
import Layout from '../../Layouts/Layout';
// images
import ChatIcon from '../../assets/img/icon-chat.png';
import MoneyIcon from '../../assets/img/icon-money.png';
import SecurityIcon from '../../assets/img/icon-security.png';
// components
import Feature from '../../components/Features/Feature';
// style
import '../../assets/css/main.css'
import './home.css'

const Home = () => {
    return (
        <Layout>
            <div className="home">
                <div className="hero">
                    <section className="hero-content">
                        <h2 className="sr-only">Promoted Content</h2>
                        <p className="subtitle">No fees.</p>
                        <p className="subtitle">No minimum deposit.</p>
                        <p className="subtitle">High interest rates.</p>
                        <p className="text">Open a savings account with Argent Bank today!</p>
                    </section>
                </div>

                <section className="features">
                    <h2 className="sr-only">Features</h2>
                    <Feature
                        icon={ChatIcon}
                        title="You are our #1 priority"
                        description="Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes."
                    />
                    <Feature
                        icon={MoneyIcon}
                        title="More savings means higher rates"
                        description="The more you save with us, the higher your interest rate will be!"
                    />
                    <Feature
                        icon={SecurityIcon}
                        title="Security you can trust"
                        description="We use top of the line encryption to make sure your data and money is always safe."
                    />

                </section>

            </div>
        </Layout>
    );
};

export default Home;
