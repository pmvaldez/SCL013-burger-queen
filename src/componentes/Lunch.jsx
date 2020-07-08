import React from 'react'
import  data from '../data.json'

const Lunch = () => {

    const [item, setItem] = React.useState([])

    React.useEffect(() => {
        const  almuerzos = data.Almuerzos;
        console.log(almuerzos);
        setItem(almuerzos)
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
export default Lunch


