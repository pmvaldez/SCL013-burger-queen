import React from 'react'
import  data from '../data.json'

const Breakfast = () => {

    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        const  desayunos = data.Desayunos;
        console.log(desayunos);
        setItem(desayunos)
    },[])
    
    return (
            <div>
                <ul> {
                    item.map(element =>  
                    <li key={element.id}> {element.name} </li>
                )
            }
                </ul>
            </div>
        )
}
export default Breakfast