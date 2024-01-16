import React from 'react';
import Header from '../components/Header';

const Storyline = () => {
    return (
        <>
            <Header />
            <div className="storyline-container">
                <h1 className="storyline-title">Assassin's Creed - Keris</h1>
                <h2 className="storyline-chapter">Chapter 1: Siege of Malacca</h2>
                <p className="storyline-content">
                <br/><br/>
                The dawn of 1511 brought with it the grim echoes of war as the Portuguese fleet, like dark specters on the horizon, advanced towards Malacca. Atop the city's ancient walls stood Hang Tuah, not as the fierce warrior of his youth, but as a venerable advisor, his once powerful frame now stooped with age.
                <br/><br/>
                Beside him were his brothers in arms, equally weathered by time. They were no longer the frontline warriors of legends sung in the courts of Malacca, but mentors and strategists, guiding the next generation of defenders in what was to be their homeland's gravest hour.
                <br/><br/>
                Lekir, leaning on his own keris, turned to Tuah with a weary sigh. "I wish our brother Jebat was still with us," he murmured, his voice a blend of sorrow and longing.
                <br/><br/>
                Tuah, his eyes fixed on the bustling activity below, responded softly, "Yes, and I wish I could turn back time." His words carried the weight of unspoken regrets, echoes of a past filled with both glory and turmoil.
                <br/><br/>
                As the cannons roared to life, signaling the start of the siege, Tuah's mind wandered back to the days of his youth. He remembered the vibrant streets of Malacca, bustling with traders from distant lands, the air filled with the scents of spices and the sounds of myriad languages. Those were the days of peace and prosperity, starkly contrasting the chaos that now loomed.
                <br/><br/>
                The battle commenced with a ferocity that shook the very foundations of the city. Tuah, Kasturi, and their fellow elders offered counsel, their experience invaluable in the art of war. They watched with a mixture of pride and apprehension as the young warriors, whom they had trained, engaged the enemy with relentless determination.
                <br/><br/>
                As the siege intensified, Tuah found himself at the heart of the command center, his strategic acumen a guiding light amidst the uncertainty of battle. Yet, within him, there was a turmoil that mirrored the conflict outside. The presence of Templar knights among the Portuguese forces was a revelation that rekindled a fire within him, a reminder of a lifelong battle against hidden foes.
                <br/><br/>
                The chapter reaches its climax as Tuah, witnessing a young commander faltering against a Templar knight, makes a crucial decision. Casting aside his age and the caution it demanded, he descends the walls, keris in hand, driven by a duty that transcends time. 
                <br/><br/>
                His intervention turns the tide, but at a great personal cost. As he parries a lethal strike aimed at the young commander, Tuah is grievously wounded. Collapsing to the ground, his vision blurring, he sees the young warriors rallying to defend their fallen mentor, inspired by his undying spirit.
                <br/><br/>
                As darkness envelopes his senses, Hang Tuah’s last thoughts are not of regret or sorrow, but of hope – a belief that the seeds of courage and honor he planted will continue to protect Malacca long after he is gone. The chapter closes with the fate of Malacca uncertain, but the legacy of its greatest protector forever etched in its walls.

                </p>
            </div>
            <style jsx>{`
                .storyline-container {
                    padding: 20px;
                    max-width: 800px;
                    margin: auto;
                    color: #333; /* Adjust the color to fit your site's design */
                    background-color: #f5f5f5; /* Light grey background, can be adjusted /
                    border-radius: 10px;
                    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1); / Soft shadow for depth */
                    }

                    .storyline-title {
                    font-size: 2rem; /* 32px /
                    font-weight: bold;
                    margin-bottom: 1rem; / 16px /
                    color: #1a1a1a; / Darker text for the title */
                    }

                    .storyline-chapter {
                        font-size: 1.5rem; /* 32px /
                        font-weight: bold;
                        margin-bottom: 1.5rem; / 16px /
                        color: #1a1a1a; / Darker text for the title */
                        }

                    .storyline-content {
                    font-size: 1rem; /* 16px /
                    line-height: 1.6; / Adjust line-height for readability /
                    color: #4a4a4a; / Slightly lighter text for the body */
                    }

                    /* Add media queries for responsiveness */
                    @media (max-width: 768px) {
                    .storyline-container {
                    padding: 15px;
                    }
                }
            `}</style>
        </>
    );
};

export default Storyline;
