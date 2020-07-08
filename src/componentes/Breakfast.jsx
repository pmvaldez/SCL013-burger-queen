import React from 'react'
import  data from '../data.json'

const Breakfast = () => {

    //const [item, setItem] = React.useState([])

    const  people = data.Desayunos;


    return (
        <div>
            {people.filter(person => person.type === 'lunch').map(filteredPerson => (
            <li>
                {filteredPerson.name}
            </li>
            ))}
        </div>
      );
}
export default Breakfast


