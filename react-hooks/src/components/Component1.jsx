import React,{useState} from 'react'

export default function Component1() {
const [age, setAge] = useState(22);
const handleClick = () => {
    setAge(age + 1);
}

    return (
        <div>
            This year I am {age} years old.
            <div>
            <button onClick={handleClick}>Get Older</button>
            </div>
        </div>
    )
}
