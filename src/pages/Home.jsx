import {useEffect, useState} from "react";

function Home () {

    const [list, setList] = useState([])

    useEffect(()=> {
        fetch("http://127.0.0.1:8000/api/produits", {
            method: 'GET',
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            }
        })
            .then((response)=>{ return response.json() })
            .then((data)=> {
                setList(data)
            })
    }, [])

    return (
        <div>


                <div className="centered-element">
                    <h1 className="centered">List</h1>
                    <br/>
                    <table>
                        <thead>
                        <tr>
                            <th>Nom</th>
                            <th>Prix</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr>
                            <td>
                                {
                                    list.map((produit) => (
                                        <div key={produit.id} className="centered bordered">
                                            {produit.proLibelle}
                                        </div>
                                    ))
                                }
                            </td>
                            <td>
                                {
                                    list.map((produit) => (
                                        <div key={produit.id} className="centered bordered">
                                            {produit.proPrix}
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

export default Home; 