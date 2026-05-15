
import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getdata } from '../../Api/api'


const GetBlog = () => {

  const[data,setdata]=  useState([])

  useEffect(()=>{
    const fetchdata = async()=>{
        //  console.log("hello");
        const res= await getdata()
        
        setdata(res.data)
       
        
    }
    fetchdata()
  },[])
  return (
    <>GetBlog


        {
            data.map((i,index)=>(
                <div key={index}>
                    <h1>{i.title}</h1>
                    <p>
                        {i.description}
                    </p>
                    <h3>
                        {i.author}
                    </h3>
                </div>
            ))
        }
    </>
  )
}

export default GetBlog