import {useEffect, useState} from "react";
import { NavLink } from 'react-router-dom';

function ProductList() {


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

    const handleClick = (e) => {
        fetch(`http://127.0.0.1:8000/api/produits/${e.target.id}`, {
            method: "DELETE",
            headers: {
                'Content-Type': 'application/json'
            },
            body: null
        })
            .then((reponse)=>{ console.log(reponse) })
            window.location.reload()
            alert("Le produit a été enlevé du catalogue")
    }

    return (

        <div>

            <div className="centered-element">
                <h1 className="centered">List</h1>
                <br/>
                <table className="centered">
                    <thead>
                    <tr>
                        <th>Name</th>
                        <th>Price</th>

                    </tr>
                    </thead>
                    <tbody>
                    <tr>
                        <td>
                            {
                                list.map((produit) => (
                                    <div key={produit.id} className="centered bordered medium height">
                                        {produit.proLibelle}
                                    </div>
                                ))
                            }
                        </td>
                        <td>
                            {
                                list.map((produit) => (
                                    <div key={produit.id} className="centered bordered height">
                                        {produit.proPrix}
                                    </div>
                                ))
                            }
                        </td>
                        <td>
                            {
                                list.map((produit) => (
                                    <div key={produit.id} className="centered">
                                        <button className="height" onClick={handleClick} id={produit.id}>DELETE</button>
                                    </div>
                                ))
                            }

                        </td>
                        <td>
                            {
                                list.map((produit) => (
                                    <div key={produit.id} className="centered">
                                        <button><NavLink to={{ pathname: "/productdetail/" + produit.id}} className="black">UPDATE</NavLink></button>
                                    </div>
                                ))
                            }

                        </td>
                    </tr>
                    </tbody>
                </table>
                <br/>
                <br/>
            </div>
        </div>
    )
}

export default ProductList;