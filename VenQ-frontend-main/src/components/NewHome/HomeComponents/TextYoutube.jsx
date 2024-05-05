import React, { useReducer, useState } from 'react'
import "./TextYoutube.css"
import YoutubeButtom from './YoutubeButtom'

const youtubeLink = {
    first: {
        embade: <iframe width="460" height="259" src="https://www.youtube.com/embed/TqKeOBYkdV0?si=SdFgPwGQkUniMmDQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
        link: "https://www.youtube.com/watch?v=TqKeOBYkdV0&t=11s"
    },
    second: {
        embade: <iframe width="460" height="259" src="https://www.youtube.com/embed/zevp-ZkabO4?si=AOK8w69PdOdIitLQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
        link: "https://www.youtube.com/watch?v=zevp-ZkabO4&t=12s"
    },
    third: {
        embade: <iframe width="460" height="259" src="https://www.youtube.com/embed/GJHQczD6P7Y?si=U3GjDZ0klMwyWX4w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>,
        link: "https://www.youtube.com/watch?v=GJHQczD6P7Y&t=120s"
    }
}

const initialState = {
    checkbox1: true,
    checkbox2: false,
    checkbox3: false
};


const reducer = (state, action) => {
    switch (action.type) {
        case 'TOGGLE_CHECKBOX': {
            console.log(state)
            return { checkbox1: false, checkbox2: false, checkbox3: false, [action.checkbox]: !state[action.checkbox] };
        }
        default:
            return state;
    }
};





function TextYoutube() {
    const [state, dispatch] = useReducer(reducer, initialState);
    const [data, setData] = useState(youtubeLink.first);

    const handleCheckboxChange = checkbox => {
        dispatch({ type: 'TOGGLE_CHECKBOX', checkbox });
    };

    const inputClickHandler = (e) => {
        handleCheckboxChange(e.target.dataset.id)
        setData(youtubeLink[e.target.dataset.count])
    }

    return (
        <div className='container-padding  page-width'>
            <div className='text-youtube-container'>
                <div className="text-youtube-left">
                    <div className="heading--primary heading">
                        <h3>Real estate investing at your fingertips.</h3>
                    </div>
                    <div className="btn-container" id='radio-container'>
                        <div>
                            <input type="checkbox" name="select-item" id="checkbox1" value={state.checkbox1} />
                            <label className={state.checkbox1 ? 'active' : ''} onClick={inputClickHandler} data-count="first" data-url={youtubeLink.first} data-id="checkbox1" htmlFor="checkbox1" id='label-1'>Introduction to SPV & CCDs | VENQ</label>
                        </div>
                        <div>
                            <input type="checkbox" name="select-item" id="checkbox2" value={state.checkbox2} />
                            <label className={state.checkbox2 ? 'active' : ''} onClick={inputClickHandler} data-count="second" data-id="checkbox2" data-url={youtubeLink.second} htmlFor="checkbox2" id='label-2'>Understanding Compulsory Convertible Debentures (CCDs) | VENQ</label>
                        </div>
                        <div>
                            <input type="checkbox" name="select-item" id="checkbox3" value={state.checkbox3} />
                            <label className={state.checkbox3 ? 'active' : ''} onClick={inputClickHandler} data-count="third" data-id="checkbox3" data-url={youtubeLink.third} htmlFor="checkbox3" id='label-3'>What is Fractional Investing in Real Estate?</label>
                        </div>
                    </div>
                </div>
                <div className="text-youtube-right">
                    <div className="youtube-container">
                        {data.embade}
                    </div>
                    <YoutubeButtom youtubeLink={"https://www.youtube.com/@venqtech"} >Youtube</YoutubeButtom>
                </div>
            </div>
        </div >
    )
}

export default TextYoutube