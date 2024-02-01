const Hello = (props) =>{
  console.log(props);
  return(
    <>
      <p><strong>Hello</strong> {props.name} your age is {props.age}</p>
    </>
  )
}

const App = () => {

  /*const now = new Date();
  const a = 10;
  const b = 20;

  const name = 'Braulio';
  const age = 20;

  console.log("Hola desde un componente");

  return (
    <>
       
      <p>today date is {now.toLocaleString()}</p>
      <br/>
      <p>{a} plus {b} is equal to {a + b}</p>
      <br/>
      <Hello name='Pepe' age={20} />
      <Hello name= {name} age= {age}/>
      <Hello/> 
      

    </>
  )
  */
    
  const friends = [
    //{ name: 'Peter', age: 4 },
    //{ name: 'Maya', age: 10 },
    //<p>{friends[0].name} {friends[0].age}</p>
   // <p>{friends[1].name} {friends[1].age}</p>
    'Peter','Maya'
  ]

  return (
    <>
      <p>{friends}</p>
      <Hello/>
      
    </>
  )
}



export default App