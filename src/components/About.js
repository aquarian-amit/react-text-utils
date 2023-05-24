
import React from 'react'
import { useState } from 'react';
import Accordion from 'react-bootstrap/Accordion';


export default function About() {

    const [myStyle, setMyStyle] = useState({
        color: 'black',
        backgroundColor: 'white',
        border: '2px solid white'
    })

    const [buttonText, setButtonText] = useState('Enable Dark Mode')

    const toggleStyle = () => {

        if (myStyle.color === 'white') {
            setMyStyle({
                color: 'black',
                backgroundColor: 'white'
            })
            setButtonText('Enable Dark Mode')
        } else{
            setMyStyle({
                color: 'white',
                backgroundColor: 'black'
            })
            setButtonText('Enable Light Mode')
        }

        //   let  newStyle = {
        //         color: 'black',
        //         backgroundColor: 'white'
        //     }

        //     setMyStyle(newStyle);
    }


    return (
        <div className='container' style={myStyle}>

            <Accordion defaultActiveKey="0" >
                <Accordion.Item eventKey="0">
                    <Accordion.Header>Accordion Item #1</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>Accordion Item #2</Accordion.Header>
                    <Accordion.Body>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
                        minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. Duis aute irure dolor in
                        reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                        pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                        culpa qui officia deserunt mollit anim id est laborum.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>

            <div className='container my-3 '>
                <button type="button" onClick={toggleStyle} className="btn btn-primary">{buttonText}</button>
            </div>
        </div>
    )
}
