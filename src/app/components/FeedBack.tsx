'use client';
import React, { useState } from 'react';


const FeedBack = () => {
    const [selectForm, setSelectForm] = useState(false);
    const [userForm, setUserForm] = useState<string>("");

    let result

    const recieveFormChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setUserForm(e.target.value);
    }

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);

        try {
            const response = await fetch("/api/contact", {
                method: 'POST',
                body: formData,
                headers: {
                    "Content-Type": "application/json",
                    Accept: "application/json",
                },
            })
            result = await response.json();
        } catch (error) {
            result = { message: `Failed to post: ${error}`}
        }

        return
        
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
    <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
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
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2" type="submit">Submit</button>
            </>
        }
    </form>
  )
}

export default FeedBack