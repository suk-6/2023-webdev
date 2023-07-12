import React from "react";

const User = ({ userData }) => {
    return (
        <tr>
            <td>{userData.id}</td>
            <td>{userData.name}</td>
            <td>{userData.age}</td>
        </tr>
    );
}

export const List = () => {
    const users = [
        { id: 1, name: "홍길동", age: 20 },
        { id: 2, name: "임꺽정", age: 30 },
        { id: 3, name: "장길산", age: 40 },
    ];

    return (
        <table>
            <thead>
                <tr>
                    <th>번호</th>
                    <th>이름</th>
                    <th>나이</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user) => (
                    <User userData={user} />
                ))}
            </tbody>
        </table>
    );
}