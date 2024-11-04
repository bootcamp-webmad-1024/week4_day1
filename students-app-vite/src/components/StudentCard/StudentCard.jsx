import './StudentCard.css'
import Button from './../Button/Button'

const StudentCard = ({ studentData, bootcampData }) => {

    const { firstName, lastName, age, avatar } = studentData
    const { title, campus, year } = bootcampData

    return (
        <div className="StudentCard">
            <article>
                <img src={avatar} alt={firstName} />
                <h3>{firstName} {lastName}, {age} años</h3>
                <p>{title} | {campus} | {year}</p>

                <Button content={'Ver detalles de alumno'} />

            </article>
        </div>
    )
}

export default StudentCard