import {useEffect, useState} from "react";

function List() {


    const [list, setList] = useState([])

    useEffect(()=> {
        fetch("http://127.0.0.1:8000/api/produits", {
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            }
        })
            .then((response)=>{ return response.json() })
            .then((data)=> {
                console.log(data);
                setList(data)
            })
    }, [])

    return (

        <div>
            <h1>List</h1>
            {

                list.map((produit) => (
                    <div key={produit.id}>
                        {produit.proLibelle} - {produit.proPrix}
                    </div>
                ))
            }
            <hr/>
        </div>
    )
}
export default List;