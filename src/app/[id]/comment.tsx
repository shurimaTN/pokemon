"use client"
import { createCommentOnPokemon } from '@/lib/queries/comment'
import React, { useState } from 'react'

type Props = {
    user?: any;
    pokemon?:string;
}

const Comment = ({user, pokemon}: Props) => {
    const [comment, setComment] = useState('')

    const handleCommentChange = (event: { target: { value: React.SetStateAction<string> } }) => {
        setComment(event.target.value);
      };
    const submitComment = async () =>{
        const temp = comment
        try {
            if(temp.length===0) throw new Error("empty");
            setComment('')
            if(!user){
                alert("Must be logged in to comment")
            }
            await createCommentOnPokemon({content:temp, pokemon:pokemon || '', username: user.username})
            window.location.reload()
        } catch (error) {
            alert("failed to send comment")
            setComment(temp)
        }
        
    }
    return (
    <>
        <textarea className='text-black' value={comment} onChange={handleCommentChange} placeholder='Write your comment here'/>
        <button type='button' onClick={submitComment} className='bg-[#80ed9d] rounded-md w-20 mt-4'> Submit</button>
    </>
  )
}

export default Comment