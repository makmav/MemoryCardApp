import React from 'react';
import './styles/InfoCard.scss'
const InfoCard = ({source}) => {
    const { imgUrls, word, wordInfo: {description, wordMeaning, examples}} = source;
    return (
        <>
            <div>
                {
                    imgUrls.map(r => <img src={r} alt=""/>)
                }
            </div>
            <div className="container">
                <div className="wrapper">
                    <h1>{word}</h1>
                    <h4>{wordMeaning}</h4>
                    <h4>{description}</h4>
                    {
                        examples.map(r => (
                            <p>
                                {r}
                            </p>
                        ))
                    }
                </div>
            </div>
        </>
    )
};

export default InfoCard;
