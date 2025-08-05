function Titulo() {
  const nombre = "carmen hermosas";
 
  if (nombre){
     return <h1>Hola {nombre}</h1>
  }
  return <h1>hola mundo</h1>;
  
}
export default Titulo;