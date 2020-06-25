import React, {useState, useEffect} from 'react'
import EntryForm from './EntryForm'

const NewEntry = ({match,categories, addEntryToJournal}) => {
    //console.log("match: ", match)
    //console.log("categories: ", categories)
    const [errorMessage, setErrorMessage] = useState(null)

    const selectedCategory = match.params.id
    const category = categories[selectedCategory]
    useEffect(()=>{
        if (category){
            setErrorMessage(null)
        } else{
            setErrorMessage("Invalid category")
        }
    }, [category, categories])

    return(
        <div>
            <h1>New Entry for {category}</h1>
            {category && <EntryForm category={category} addEntryToJournal={addEntryToJournal}/> }
            {errorMessage && <p>{errorMessage}</p>}
        </div>
    )
}

export default NewEntry