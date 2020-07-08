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
                {
                    item.map(element =>  
                         <button className="btn btn-warning mt-2" key={element.id}>{element.name} ${element.price}</button>   
                )
                 }
              
               {/*  {item.map((element) => {
                    //console.log(element.name);
                    return (
                    <div >
                        <button className="btn btn-warning mt-2" key={element.id}>{element.name} ${element.price}</button>   
                    </div>
                    );
                })} */}
            </div>
        )
}
export default Breakfast


