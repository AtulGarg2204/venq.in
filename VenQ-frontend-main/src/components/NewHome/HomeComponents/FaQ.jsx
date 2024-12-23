import React from 'react'
import "./FaQ.css"

export default function FaQ() {
    return (
        <div className='faq-container container-padding '>
            <div className="heading-container">
                <div className="top-sub-heading">
                    <p>Have a question?</p>
                </div>
                <div className="heading--primary main-heading">
                    <h3>We have answers.</h3>
                </div>
            </div>
            <div className="faq-content">
                <details>
                    <summary><span className="summary">How does VenQ stand out in real estate investing?</span></summary>
                    <p>VenQ distinguishes itself by being India's first platform enabling real estate investments with a low entry of ₹5,000.</p>
                </details>
                <details>
                    <summary> <span className="summary">What property options are on VenQ, and can I choose my investments?</span></summary>
                    <p>VenQ offers various property options, including residential, plots, and rental-focused properties. You have the freedom to choose investments that align with your preferences.</p>
                </details>
                <details>
                    <summary><span className="summary">What is the minimum investment to start on VenQ?</span></summary>
                    <p>The minimum investment to start on VenQ is just ₹5,000, making real estate accessible to a broader audience.</p>
                </details>
                <details>
                    <summary><span className="summary">How does VenQ ensure investment security and transparency?</span></summary>
                    <p>VenQ ensures investment security and transparency through Compulsory Convertible Debentures (CCDs), aligning investor interests with the property's success.</p>
                </details>
                <details>
                    <summary><span className="summary">Can I sell or exit my investment before property sale on VenQ?</span></summary>
                    <p>Yes, you can sell or exit your investment before the property sale by listing and trading your CCDs on the VenQ platform, providing flexibility and liquidity.</p>
                </details>
            </div>
        </div>
    )
}
