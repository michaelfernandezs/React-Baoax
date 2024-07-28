
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import uno from '../assets/uno.jpg';
import dos from '../assets/dos.jpg';
import tres from '../assets/tres.jpg';
import cuatro from '../assets/cuatro.jpg'
const Home=()=>{
    return(
    <div className="">
    <Carousel>
      <div>
        <img src={uno} />
        <p className="legend">Contribuimos a mejorar el estilo de vida de las personas más vulnerables</p>
      </div>
      <div>
        <img src={dos} />
        <p className="legend">Cumplimos 25 años ayudando a las familias Oaxaqueñas</p>
      </div>
      <div>
        <img src={tres} />
        <p className="legend">Seguimos ayudando a los municipios en los valles centrales y la Mixteca</p>
      </div>
      <div>
        <img src={cuatro} />
        <p className="legend">Comprometidos día con día con el traslado, recolección, almacenamiento y entrega de los alimentos</p>
      </div>
    </Carousel>

    <section className="bg-yellow-500 p-8">
      <div className="grid grid-cols-3 gap-4 p-4">
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-4xl font-bold text-red-600">Misión</h2>
          <p>Contribuir a la seguridad alimentaria de familias vulnerables en condiciones de pobreza, marginación y desigualdad social a través de la recuperación de alimentos en buen estado de consumo.</p>
        </div>
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-4xl font-bold text-red-600">Visión</h2>
          <p>Ser reconocidos por empresarios, productores y sociedad en general como la mejor asociación civil en el estado de Oaxaca. Cuyo apoyo es realmente importante para las familias.</p>
          
        </div>
        <div className="bg-white p-4 rounded-md">
          <h2 className="text-4xl font-bold text-red-600">Quienes somos</h2>
          <p>Somos una Organización de la Sociedad Civil sin fines de lucro con 23 años de trabajo en Oaxaca.</p>
          
        </div>
        
      </div>


      
          
    </section>

    <div>
      <section className="bg-white p-8">
        
        <div className="grid grid-cols-1 gap-4 p-4">
            
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-4xl font-bold text-red-600 text-center">40 Localidades</h2>
           
          </div>
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-4xl font-bold text-red-600 text-center">1615 Familias</h2>
          </div>
          <div className="bg-white p-4 rounded-md">
            <h2 className="text-4xl font-bold text-red-600 text-center">21 Municipios</h2>
          </div>
      </div> 
   
    </section>
    </div>
  

          <div className="grid grid-cols-3 gap-4 p-4">
            
            <div className="bg-white p-4 rounded-md">
              <p className="text-center">Santa Cruz Xoxocotlan</p>
              <p className="text-center">Tlacolula de matamoros</p>
              <p className="text-center">San Pedro Ixtlahuaca</p>
              <p className="text-center">San Pedro Ixtlahuaca</p>
             
            </div>
            <div className="bg-white p-4 rounded-md">
            <p className="text-center">San Bartolo Coyotepec</p>
            <p className="text-center">Montoya</p>
            <p className="text-center">San Pedro Nopala</p>
            <p className="text-center">Santa Maria Atzompa</p>
                
              
            </div>
            <div className="bg-white p-4 rounded-md">
             <p className="text-center">Oaxaca</p>
             <p className="text-center">San Martin Mexicapan</p>
             <p className="text-center">San Felipe Tejalapan</p>
             <p className="text-center">San Lorenzo Cacaotepec</p>
             
            </div>
            </div>
        </div>
    
       
    )
}

export default Home;

