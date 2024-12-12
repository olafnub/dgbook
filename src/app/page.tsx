'use client'
import React, {} from "react"
import AddWebsiteForm from "./components/AddWebsiteForm";
import WebsiteList from "./components/WebsiteList";
import RemoveWebsite from "./components/RemoveWebsite";
import FeedBack from "./components/FeedBack";

export default function Home() {
  // fetch all data
  // store it in a value
  // return the list value
  // when user submits data
  // first post it to database
  // then append to local value

  return (
    <section className="flex flex-row gap-3">
      <div className="flex-0">
        <WebsiteList />
      </div>
      <div className="flex-1">
        <AddWebsiteForm />
        <RemoveWebsite />
        <FeedBack />
      </div>
    </section>
  );
}
