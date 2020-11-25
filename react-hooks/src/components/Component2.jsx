import React, { useState } from 'react'

export default function Component2() {

    const [age,setAge] = useState(22);
    const [siblings,setSiblings] = useState(1);

    const getOlder = () => {
        setAge(age +1);
    }
    const moreSiblings = () => {
        setSiblings(siblings +1);
    }

    return (
        <div>
            <div>Today I am {age} years old</div>
            <div>I have {siblings} siblings</div>
            <div>
                <button onClick={getOlder}>Get Older</button>
                <button onClick={moreSiblings}>More Siblings</button>
            </div>
        </div>
    )
}
