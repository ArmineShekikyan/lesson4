import {Inf} from './data'
import { useState } from "react";
const Phones = () =>{
    const [datas,setDatas] = useState(Inf);
    const handleClear =(id)=>{
    const updatedCards = datas.filter((item)=>
    item.id !==id)
    setDatas(updatedCards);
    }
    const [dat,setDat] = useState(datas);
     const handleDelate = ()=>{
        dat.map((item)=>
        item = 'is currently empty')
        setDat(handleDelate);
    }
    const [count, setCount] = useState(1);
    const handleDecreament =() => {
        setCount(count - 1)
    }
    const handleIncreament =() => {
        setCount(count + 1)
    }
//     const gin = Inf.find({price})
//  const totalPrice = gin.reduce((a, b) => a + b)
  return (
    < >
    <div className='div'>
    <h1  className='header'>UseReducer</h1>
    </div>
    <div className='container'>
    <div>
                <h2 className='bag'>YOUR BAG</h2>
                </div>
    {datas.map(({title,id, price, img,})=>{
     return(
          < div className='parent'key={id}>
                   <img className='child' src={img}  alt="photo"/>
                   <div className='child2'>
                  <h3 className='title' >{title}</h3>
                  <span className='price'>{price}</span>
                  <button className='btn'onClick={()=>handleClear(id)}>remove</button>
                  </div>
                  <div>
                <button onClick={()=>handleDecreament}>-</button>
                    <span>{count} </span>
                <button onClick={()=>handleIncreament}>+</button>
            </div>
                  </div>
                   );
                   })}
                        <hr/>
                        <span className='total'>Total</span>
                        {/* <span>{totalPrice}</span> */}
                        <div >
                        <button className='button'onClick={()=>handleDelate}>Clear Cart</button>
                        </div>
                        </div>
                        
                  </>
                    );
                    };

    export default Phones