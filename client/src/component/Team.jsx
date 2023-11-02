import React from 'react'
import "./Team.css"
import team01 from "../component/assets/Saral.jpg"
import team02 from "../component/assets/Aayush.jpg"



const teamMembers = [
    {
        imgUrl: team01,
        name: 'Saral',
        position: 'Back-end Developer'
    },

    {
        imgUrl: team02,
        name: 'Aayush',
        position: 'Frint-Developer'
    },

   
]

const Team = () => {
    return (
        
        <section className='our__team'>         
            <div className='container'>
                <div className='team__wrapper'>
                    {
                        teamMembers.map((item, index) => (
                            <div className='team__item' key={index}>
                                <div className='team__img'>
                                    <img src={item.imgUrl} alt='' />
                                </div>
                                <div className='team__details'>
                                    <h4>{item.name}</h4>
                                    <p className='description'>{item.position}</p>

                                    <div className='team__member-social'>
                                        <span><i class='ri-linkedin-line'></i></span>
                                        <span><i class='ri-twitter-line'></i></span>
                                        <span><i class='ri-facebook-line'></i></span>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    )
}

export default Team