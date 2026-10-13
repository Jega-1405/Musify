import React, { useState } from 'react'

const DeleteAccount = () => {
  let[inputText,setInputText]=useState("");
  let handleInputChange=(e)=>{
    let inputText=e.target.value;
    setInputText(e.target.value);
  }
  let handleSubmit=(e)=>{
    e.preventDefault();
  }
  return (
<section className='h-[100%] w-[100%] flex items-center justify-center  '>
        <article className='h-[300px] w-[60%] bg-slate-700 rounded-md p-6 flex flex-col gap-6'>
         <header><h1 className='text-[32px] font-semibold'>Deleting Account</h1></header>
         <main>
        <p className=''>
          Deleting Account will remove all the information from database and it <b>It can't be recovery</b>
        </p>
      </main>
      <footer>
        <form action="" className='flex justify-between items-end' onSubmit={handleSubmit}>
          <div className='flex flex-col gap-3'>
            <label htmlFor="">To delete this account type <b>DELETE</b></label>
            <input type="text" className='outline-none border py-1 px-2 rounded-md bg-white text-red-600 w-[255px]' onChange={handleInputChange} />
          </div>
          <div className=''>
            <button disabled={inputText!="DELETE"} className={`px-16 py-2 rounded-md  ${inputText !="DELETE" ?"bg-slate-500 cursor-not-allowed":"bg-red-600 cursor-pointer"}`} >
              Delete account
            </button>
          </div>
        </form>
      </footer>
        </article>
</section>
  )
}

export default DeleteAccount