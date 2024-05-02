import React from 'react'
import "./youtubeButton.css"

export default function YoutubeButtom({ youtubeLink = "#", children }) {
    return (
        <div>
            <a class="youtube-button bodyLarge bodyLargeHeavy " target="_blank" href={youtubeLink}>
                {children}
                <span class="arrow-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" height="16" width="16">
                        <path fill="none" d="M0 0h24v24H0z"></path><path d="m15 5-1.41 1.41L18.17 11H2v2h16.17l-4.59 4.59L15 19l7-7-7-7z"></path>
                    </svg>
                </span>
            </a>
        </div>
    )
}
