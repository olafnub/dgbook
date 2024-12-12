'use client';
import React, { useState } from 'react';

const FeedBack = () => {
    const [selectForm, setSelectForm] = useState(false);
    const [formData, setFormData] = useState("");

    let result;

    const recieveFormChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setFormData(e.target.value);
    }

    const handleFeedBack = async () => {
        try {
            let data = await fetch("/api/forms", {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            result = await data.json();
        } catch (error) {
            result = { message: `Failed to post: ${error}`}
        }
        console.log(result);
    }

    const showForm = () => {
        setSelectForm(!selectForm);
    }

  return (
    <div className="flex flex-col gap-2">
        <label 
            className="text-center" 
            htmlFor="user-feedback"
            onClick={showForm}
            >
               Any suggestions or bugs? (<em>click here</em>)
        </label>
       {selectForm &&
            <>
                <textarea onChange={recieveFormChange} id="user-feedback" placeholder="anything is appreciated..."/>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2" onClick={handleFeedBack}>Submit</button>
            </>
        }
    </div>
  )
}

export default FeedBack