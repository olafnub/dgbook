'use client'
import React, { useEffect, useState } from 'react'

const RemoveWebsite = () => {
  
    const [userData, setUserData] = useState([]);
    const [removeLink, setRemoveLink] = useState("");

    interface UserLinkInput {
        url: string
        nickname: string
    }

    useEffect(() => {
        if (typeof window != "undefined" && window.localStorage) {
            const localData = localStorage.getItem('userData');
            if (localData) {
                setUserData(JSON.parse(localData));
            }
        }
    }, []);

    const handleSetRemoveLink = (event: React.ChangeEvent<HTMLInputElement>) => {
        setRemoveLink(event.target.value);
    }

    const handleRemoveLink = () => {
        if (typeof window !== "undefined" && window.localStorage) {
            userData.map((curr: UserLinkInput, index: number) => {
                if (curr.url == removeLink) {
                    if (index == 0) {
                        userData.splice(index, index+1)
                    } else {
                        userData.splice(index, index)
                    }
                }
            })
            alert("Removed, Refresh the site to see all changes");
            updateLocalStorage();
        }
    }

    const updateLocalStorage = () => {
        localStorage.setItem('userData', JSON.stringify(userData));
    }

  return (
    <>
        <input type="text" onChange={handleSetRemoveLink} placeholder="Input remove link" id="remove-link" name="removeLink" className="w-3/4"/>
        <button className="border border-red-600 w-1/4" onClick={handleRemoveLink}>Remove</button>
    </>
  )
}

export default RemoveWebsite