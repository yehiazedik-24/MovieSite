import React, { useState } from 'react';

export default function User() {
    const [user, setUser] = useState("actions");
    const [age, setAge] = useState("");

    const btnClick = () => {
        setUser("moh");
        setAge(23);
    }

    return (
        <>
            <div className="">{user} - {age}</div>
            <button onClick={btnClick} className="btn btn-primary">Save</button>
        </>
    );
}


