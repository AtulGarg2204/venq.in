import React from 'react'
import "./WhyInvest.css"
import invetopedia from "./articleImages/investopedia.png"
import et from "./articleImages/et.png"
import forbes from "./articleImages/forbes.png"
import geekwire from "./articleImages/geekwire.png"
import entrepreneur from "./articleImages/entrepreneur.png"
import cnbc from "./articleImages/cnbc.png"
import YoutubeButtom from './YoutubeButtom'

export default function WhyInvest() {
    return (
        <div className='whyInvest-container page-width'>
            <div className="heading-container">
                <div className="top-sub-heading">
                    <p>An investor's Guide</p>
                </div>
                <div className="heading--primary main-heading">
                    <h3>Why invest in India?</h3>
                </div>
            </div>
            <div className="article-grid">
                <div className="article-item">
                    <h3>Key Reasons to Invest in Real Estate</h3>
                    <p>The benefits of investing in real estate are numerous. With well-chosen assets, investors can enjoy predictable cash flow, excellent returns...</p>
                    <img src={invetopedia} alt="" />
                </div>
                <div className="article-item">
                    <h3>Why investing in property is a good idea</h3>
                    <p>Real estate has the potential to deliver very high returns in the long run. It can provide a steady cash flow and enjoys several tax benefits...</p>
                    <img src={et} alt="" />
                </div>
                <div className="article-item">
                    <h3>Eight Reasons You Should Consider Real Estate Investing</h3>
                    <p>Real estate investments are often a great way to earn higher-than-average returns while also diversifying...</p>
                    <img src={forbes} alt="" />
                </div>
                <div className="article-item">
                    <h3>10 Reasons Why Every Entrepreneur Should Invest in Real Estate</h3>
                    <p>Usually, as entrepreneurs, we have our heads down, in the weeds, grinding away on our businesses. Even though my first love is business...</p>
                    <img src={geekwire} alt="" />
                </div>
                <div className="article-item">
                    <h3>Real estate is still the best investment you can make today, millionaires say</h3>
                    <p>Billionaire Andrew Carnegie famously said that 90% of millionaires got their wealth by investing in real estate. We wanted to know...</p>
                    <img src={entrepreneur} alt="" />
                </div>
                <div className="article-item">
                    <h3>8 Reasons Why Real Estate Is a Good Investment</h3>
                    <p>Diversifying your investment portfolio is essential. If you put all your eggs in one basket, you could suffer a total loss in the blink of an eye...</p>
                    <img src={cnbc} alt="" />
                </div>
            </div>
            <div className="button-container">
                <YoutubeButtom navigate={"/learn"}>FAQ</YoutubeButtom>
                <YoutubeButtom navigate={"/blogs"} >Blog</YoutubeButtom>
            </div>
        </div>
    )
}