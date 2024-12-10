'use client'
import React, { useState, useEffect } from 'react'

const AddWebsiteForm = () => {

    interface UserLinkInput {
        url: string
        nickname: string
    }

    const [localUrl, setUrl] = useState("");
    const [localNickName, setNickName] = useState("");
    const [userData, setUserData] = useState<UserLinkInput[]>([]);

    useEffect(() => {
        if (typeof window != "undefined" && window.localStorage) {
            const localData = localStorage.getItem('userData');
            if (localData) {
                setUserData(JSON.parse(localData));
            }
        }
    }, []);

    const handleSetUrl = (event: React.ChangeEvent<HTMLInputElement>) => {
        setUrl(event.target.value);
    }

    const handleSetNickName = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNickName(event.target.value);
    }

    const pushWebsite = () => {
        if (typeof window !== "undefined" && window.localStorage) {
            userData.push({ url: localUrl, nickname: localNickName});
            localStorage.setItem('userData', JSON.stringify(userData));
        } else {
            alert("Couldn't add ;( a bug from our side -- please submit request! ");
            console.log("Error in adding data");
        }
        // Future
        // Push it to the local website list
        // Post it to the database
    }

  return (
    <>
        <div className="flex flex-col gap-3 content-center py-2">
            <div className="flex gap-2">
                <label htmlFor="nickname">Nickname</label>
                <input 
                    className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:border-purple-400" 
                    type="text" 
                    placeholder="current fav song" 
                    aria-label="Website nickname" 
                    onChange={handleSetNickName}
                    name="nickname"
                    id="nickname"
                />
            </div>

            <div className="flex gap-2">
                <label htmlFor="link">Link</label>
                <input 
                    className="appearance-none bg-transparent border-none w-full mr-3 py-1 px-2 leading-tight focus:border-purple-400" 
                    type="text" 
                    placeholder="https://youtu.be/VZIm_2MgdeA?si=OIG-0jMzynmGZ1eA" 
                    aria-label="Website link" 
                    onChange={handleSetUrl}
                    name="link"
                    id="link"
                />
            </div>
            <button
                className="flex-shrink-0 shadow bg-purple-500 hover:bg-purple-400 text-sm text-white py-2 px-4 rounded" 
                type="button"
                onClick={pushWebsite}
                >
                Add Website
            </button>
        </div>
    </>
  )
}

export default AddWebsiteForm