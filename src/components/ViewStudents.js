import React from 'react';
import db from '../firebaseconfigs/firestoreInit';

class ViewStudents extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        };

    }
    render () {

        const studs = this.state.students.map((student) =>
            <li className="list-group-item d-flex justify-content-between align-items-center" key={student.id}>
                <span className="badge badge-primary badge-pill">{student.admission_year}</span>
                {student.name}
            </li>
        );
        return(
            <div>
                <ul className="list-group">
                    {studs}
                </ul>

            </div>
        )
    }

    componentDidMount() {
        const $this = this;
        db.collection('student').get()
            .then(function (studentsSnapShot) {
                studentsSnapShot.forEach((student) => {
                    let data = {
                        "id": student.id,
                        "name": student.data().name,
                        "course": student.data().course,
                        "dob": student.data().dob,
                        "student_id": student.data().student_id,
                        "admission_year": student.data().admission_year
                    };
                    $this.setState(prevState => ({
                        students: [...prevState.students, data]
                    }))

                });
            })
            .catch(error => {console.log(error)});


    }

}

export default ViewStudents;