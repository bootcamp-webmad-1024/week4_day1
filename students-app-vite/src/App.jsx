import './App.css'
import Navigation from './components/Navigation/Navigation'
import Title from './components/Title/Title'
import Button from './components/Button/Button'
import StudentCard from './components/StudentCard/StudentCard'

function App() {

  return (
    <div className="App">

      <Navigation />

      <Title text={'Listado de alumnos'} />

      <Button content={'Ver alumnos destacados'} />
      <Button content={'Ver centros'} />




      <StudentCard
        studentData={{
          firstName: 'Alberto',
          lastName: 'Whatever',
          age: 33,
          avatar: 'https://cdn.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/04/foto-hombre-creada-ia-3016946.jpg?tf=1200x'
        }}
        bootcampData={{
          title: 'Web dev',
          campus: 'Madrid',
          year: 2005
        }}
      />

      <StudentCard
        studentData={{
          firstName: 'Silvia',
          lastName: 'Doe',
          age: 22,
          avatar: 'https://www.businessinsider.es/sites/navi.axelspringer.es/public/media/image/2023/04/imagen-creada-ia-mujer-manos-3016948.jpg'
        }}
        bootcampData={{
          title: 'UX/UI',
          campus: 'Madrid',
          year: 2023
        }}
      />




      <Title text={'Alumnos destacados'} />




    </div>
  )
}

export default App