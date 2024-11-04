import Button from '../Button/Button'
import './Navigation.css'

function Navigation() {

    return (
        <div className="Navigation">

            <header className="menu">

                <img src="https://static.vecteezy.com/system/resources/thumbnails/019/956/200/small/nike-transparent-nike-free-free-png.png" alt="Logo" />

                <nav>
                    <ul>
                        <li><a href="#">Inicio</a></li>
                        <li><a href="#">Alumnos</a></li>
                        <li><a href="#">Blog</a></li>
                    </ul>
                    <Button content={'Todas las secciones'} />
                </nav>
            </header>

        </div>
    )
}

export default Navigation