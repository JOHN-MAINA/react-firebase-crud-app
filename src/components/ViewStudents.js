import React from 'react';
import db from '../firebaseconfigs/firebaseInit'

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
                <span className="badge badge-primary badge-pill">14</span>
                {student.name}
            </li>
        );
        return(
            <div>
                <ul className="list-group">
                    {studs}
                    <li className="list-group-item d-flex justify-content-between align-items-center">
                        Morbi leo risus
                        <span className="badge badge-primary badge-pill">1</span>
                    </li>
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
                        "dob": student.data().dob
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