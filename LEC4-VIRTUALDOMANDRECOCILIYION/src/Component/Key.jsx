import React from 'react'

function Key() {
    const students = ["Aditya", "kumar", "Chaursiya"]
    return (
        <ul>{students.map(students => <li key={students}>{students}</li>)}</ul>
    )
}

export default Key