import {useEffect, useState} from "react";

export default function Category() {


    const [listCat, setListCat] = useState([])

    useEffect(()=> {
        fetch("http://127.0.0.1:8000/api/categories", {
            headers: {
                'Content-Type': "application/json",
                'Accept': "application/json"
            }
        })
            .then((response)=>{ return response.json() })
            .then((data)=> {
                console.log(data)
                setListCat(data)
            })
    }, [])





    return (
        <div className="global">
            <div className="gauche">
                <div className="centered-element">
                    <h1 className="centered mb20">Add a category</h1>
                    <form className="centered">
                        <label htmlFor="techno-name" className="title">Name</label>
                        <br/>
                        <input type="text" name="techno-name" id="techno-name" className="smallBox"/>
                        <br/>
                        <label htmlFor="techno-category" className="title">Category</label>
                        <br/>
                        <select name="techno-category" id="techno-category" className="dropdown1">
                            {
                                listCat.map((categorie) => (
                                    <option key={categorie.id} className="centered bordered">
                                        {categorie.catNom}
                                    </option>
                                ))
                            }
                        </select>
                        <br/>
                        <label htmlFor="techno-description" className="title">Description :</label>
                        <br />
                        <textarea name="techno-description" id="techno-description" cols="15" rows="5" className="box" defaultValue="Insert description" />
                        <br />
                        <br />
                        <label htmlFor="catPic" className="title">Insérez une image</label>
                        <input type="file" name="catPic" id="catPic"/>
                        <input type="submit" value="Add Category" className="button"/>
                    </form>

                </div>
            <br />
            <hr />
            </div>
            <div className="droite">



            </div>
        </div>
    )
}