import React from 'react'
import "./OurCommitment.css"
import building from "./images/builings.png"

const styleObj = {
    userSelect: 'none',
    display: 'inline-block',
    fill: 'rgb(65, 206, 142)',
    color: 'rgb(65, 206, 142)',
    flexShrink: 0
}

const svgs = [<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" style={styleObj}><g color="var(--token-dfac4a67-4238-4aab-bc86-20fbdeb40318, rgb(65, 206, 142))" weight="duotone"><path d="M216,56v58.77c0,84.18-71.31,112.07-85.54,116.8a7.54,7.54,0,0,1-4.92,0C111.31,226.86,40,199,40,114.79V56a8,8,0,0,1,8-8H208A8,8,0,0,1,216,56Z" opacity="0.2"></path><path d="M208,40H48A16,16,0,0,0,32,56v58.78c0,89.61,75.82,119.34,91,124.39a15.53,15.53,0,0,0,10,0c15.2-5.05,91-34.78,91-124.39V56A16,16,0,0,0,208,40Zm0,74.79c0,78.42-66.35,104.62-80,109.18-13.53-4.51-80-30.69-80-109.18V56H208ZM82.34,141.66a8,8,0,0,1,11.32-11.32L112,148.68l50.34-50.34a8,8,0,0,1,11.32,11.32l-56,56a8,8,0,0,1-11.32,0Z"></path></g></svg>,

<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color=" rgb(65, 206, 142)"
    style={styleObj}>
    <g color=" rgb(65, 206, 142)" weight="duotone"><path d="M216,96V208a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V96a8,8,0,0,1,8-8H208A8,8,0,0,1,216,96Z" opacity="0.2"></path><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-68-56a12,12,0,1,1-12-12A12,12,0,0,1,140,152Z"></path></g>
</svg>,
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" focusable="false" color="var(--token-dfac4a67-4238-4aab-bc86-20fbdeb40318, rgb(65, 206, 142))" style={styleObj}><g color="var(--token-dfac4a67-4238-4aab-bc86-20fbdeb40318, rgb(65, 206, 142))" weight="duotone"><path d="M224,56V92.23a48,48,0,1,0-64,71.57h0V192H40a8,8,0,0,1-8-8V56a8,8,0,0,1,8-8H216A8,8,0,0,1,224,56Z" opacity="0.2"></path><path d="M248,128a56,56,0,1,0-96,39.14V224a8,8,0,0,0,11.58,7.16L192,216.94l28.42,14.22A8,8,0,0,0,232,224V167.14A55.81,55.81,0,0,0,248,128ZM192,88a40,40,0,1,1-40,40A40,40,0,0,1,192,88Zm3.58,112.84a8,8,0,0,0-7.16,0L168,211.06V178.59a55.94,55.94,0,0,0,48,0v32.47ZM136,192a8,8,0,0,1-8,8H40a16,16,0,0,1-16-16V56A16,16,0,0,1,40,40H216a16,16,0,0,1,16,16,8,8,0,0,1-16,0H40V184h88A8,8,0,0,1,136,192Zm-16-56a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,136Zm0-32a8,8,0,0,1-8,8H72a8,8,0,0,1,0-16h40A8,8,0,0,1,120,104Z"></path></g></svg>
]

export default function OurCommitment() {
    return (
        <div className='ourcommit-container container-padding '>
            <div className="heading-container">
                <div className="top-sub-heading">
                    <p>Invest with confidence</p>
                </div>
                <div className="heading--primary main-heading">
                    <h3>Our commitment to transparency and regulation</h3>
                </div>
            </div>
            <div className="flex-container">
                <ul className="ourcommit-items">
                    <li className="items">
                        {svgs[0]}
                        Compliance: VENQ adheres strictly to financial and investment regulations by following the SPV model.</li>
                    <li className="items">
                        {svgs[1]}
                        Transparent Process: We provide clear data and insights for informed investment decisions. </li>
                    <li className="items">
                        {svgs[2]}
                        Legal Framework: Our platform operates within a robust legal framework for transparency and accountability.</li>
                </ul>
                <div className="our-commit-img">
                    <img src={building} alt="builing" />
                </div>
            </div>
        </div>
    )
}
