'use client';
// import React, { useState, useEffect } from 'react';


// const FeedBack = () => {
//     const [selectForm, setSelectForm] = useState(false);
//     const [hasMounted, setHasMounted] = useState(false);

//     useEffect(() => {
//         setHasMounted(true);
//     }) // Avoid rendering until client-side matches

//     if (!hasMounted) return;

//     let result;

//     const handleSubmit = async (e: any) => {
//         e.preventDefault();

//         // const formData = new FormData(e.currentTarget);
//         const data = e.formData;
//         console.log(data);

//         return;

//         try {
//             const response = await fetch("/api/contact", {
//                 method: 'POST',
//                 body: formData,
//                 headers: {
//                     "Content-Type": "application/json",
//                     Accept: "application/json",
//                 },
//             })
//             result = await response.json();
//         } catch (error) {
//             result = { message: `Failed to post: ${error}`}
//         }

//         return;
        
//         if (result.status == 200) {
//             alert("Sent!");
//         } else {
//             alert("Message did not send, please try again later");
//         }
//     }

//     const showForm = () => {
//         setSelectForm(!selectForm);
//     }

//   return (
//     <>
//     <form className="flex flex-col gap-2" onSubmit={handleSubmit}>
//         <label 
//             className="text-center" 
//             htmlFor="user-feedback"
//             onClick={showForm}
//             >
//                Any suggestions or bugs? (<em>click here</em>)
//         </label>

//         <textarea display="" id="user-feedback" name="user-feedback" placeholder="anything is appreciated..."/>

//         {selectForm &&
//             <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2" type="submit">Submit</button>
//         }
//     </form>
    
//     </>
//   )
// }

const FeedBack = () => {
    return (
        <>
            <p>Reach out to li002488@umn.edu for support</p>
        </>
    )
}

export default FeedBack