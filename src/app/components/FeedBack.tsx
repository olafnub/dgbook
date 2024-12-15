'use client';
import React, { useState } from 'react';


const FeedBack = () => {
    const [selectForm, setSelectForm] = useState(false);
    const [userForm, setUserForm] = useState<string>("");

    let result

    const recieveFormChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserForm(e.target.value);
    }

    const handleFeedBack = async () => {
        console.log(JSON.stringify(userForm));
        try {
            const response = await fetch("/api/contact", {
                method: 'POST',
                body: JSON.stringify(userForm),
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            result = await response.json();
        } catch (error) {
            result = { message: `Failed to post: ${error}`}
        }
        
        if (result.status == 200) {
            alert("Sent!");
        } else {
            alert("Message did not send, please try again later");
        }
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