'use client'

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'

interface UserLinkInput {
  url: string
  nickname: string
} 

const WebsiteList = () => {

  const [websiteList, setWebsteList] = useState<UserLinkInput[]>([]);

  useEffect(() => {
    
    const defaultWebsiteList = [
      { url: "https://www.google.com", nickname: "test w/ google"},
      { url: "https://olafnub.vercel.app/chains", nickname: "test blog"},
    ]

    if (typeof window !== "undefined" && window.localStorage) {
        const localData = localStorage.getItem('userData');
        if (localData && localData.length == 0) {
          setWebsteList(JSON.parse(localData));
        } else {
          setWebsteList(defaultWebsiteList);
        }
    }
  }, []);

  // render local websites & changes
  // take added websites for AddWebsiteForm

  // https://icons.duckduckgo.com/ip3/www.stackoverflow.com.ico
  // http://icons.duckduckgo.com/ip2/www.stackoverflow.com.ico
  // https://external-content.duckduckgo.com/ip3/www.google.com.ico
  // https://www.google.com/s2/favicons?domain=${DOMAIN}&sz=${SIZE}
  // get link image by removing all queries & add a /favicon.ico to the end

  const getLinkIcon = (url: string) => {
    let output;
    const splitUrl = url.split("/");
    if (splitUrl.length > 2) {
      output = `https://icons.duckduckgo.com/ip3/${splitUrl[2]}.ico`;
    } else {
      output = "https://static.thenounproject.com/png/4974686-200.png";
    }
    return output;
  }

  return (
    <>
      <ul className="grid grid-cols-4 gap-3">
        {websiteList && typeof websiteList != "string" && websiteList.map((curr: UserLinkInput, index: number) => (
          <li 
            key={index} 
            className="flex items-center gap-2 bg-slate-300 px-2 py-3 w-56 break-all"
          >
            <Image width={30} height={30} alt={curr.nickname} src={getLinkIcon((curr.url).toString())} />
            <Link href={curr.url}>{curr.nickname}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default WebsiteList