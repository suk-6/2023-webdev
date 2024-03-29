import React, { useState, useReducer } from "react";
import Student from "./Student";

const initialState = {
    count: 0,
    students: [],
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'addStudent':
            const name = action.payload;
            const newStudent = {
                id: Date.now(), name, isHere: false,
            };

            if (newStudent.name === '') return state;

            return {
                count: state.count + 1,
                students: [...state.students, newStudent],
            }

        case 'removeStudent':
            return {
                count: state.count - 1,
                students: state.students.filter((student) => student.id !== action.payload.id),
            }

        case 'toggleIsHere':
            return {
                count: state.count,
                students: state.students.map((student) => {
                    if (student.id === action.payload.id) {
                        return { ...student, isHere: !student.isHere }
                    }
                    return student;
                }
                ),
            }

        default:
            return state;
    }
}

const Attendance = () => {
    const [name, setName] = useState("");
    const [studentsInfo, dispatch] = useReducer(reducer, initialState);

    return (
        <div>
            <h1>덕영고 출석부</h1>
            <p>총 학생 수: {studentsInfo.count}명</p>
            <input type="text" placeholder="이름을 입력하세요." value={name} onChange={(e) => setName(e.target.value)} />
            <button onClick={() => { dispatch({ type: 'addStudent', payload: name }); setName('') }}>추가</button>
            <ul>
                {studentsInfo.students.map((student) => (
                    <li key={student.id}>
                        <Student
                            id={student.id}
                            name={student.name}
                            dispatch={dispatch}
                            isHere={student.isHere}
                        />
                    </li>
                ))}
            </ul>
        </div>
    );
}

export default Attendance;