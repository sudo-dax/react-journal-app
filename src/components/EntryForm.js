import React, { useState } from 'react'
import {withRouter} from 'react-router-dom'

const EntryForm = ({history, category, addEntryToJournal}) =>{
    const [entry, setEntry] = useState(null)
    const [errorMessage, setErrorMessage] = useState(null)
    function onTextAreaChange (event){
        setEntry(event.target.value)
        console.log(entry)
    }

    function handleSubmit(event){
        event.preventDefault()
        // if we have an entry, call addEntryToJournal
        if (entry && entry.length > 0) {
            setErrorMessage(null)
            addEntryToJournal({category, entry})
            return history.push("/")
        }
        return setErrorMessage("Entry cannot be blank")
    }

    return(
        <form onSubmit={handleSubmit}>
            <div>
                <textarea onChange={onTextAreaChange}></textarea>
            </div>
            <input type="submit" value="Create new entry" />
    {errorMessage && <p>{errorMessage}</p>}
        </form>
    )
}

export default withRouter(EntryForm)