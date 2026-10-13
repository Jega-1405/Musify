import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { AiFillDelete } from 'react-icons/ai';
import Spinner from '../utilities/Spinner';
import AllAlbums from './AllAlbums';

const CreateAlbum = () => {
    let initialAlbumState ={
        albumTitle:"",
        albumPoster:"",
        albumReleaseDate:"",
        albumLanguages:"",
        albumDescription:""
    }

let initialSongState = {
    songName:"",
    songUrl:"",
    songThumbnail:"",
    songSingers:"",
    songMood:"",
    songMusicDirector:""
}


    let [albumState , setAlbumState] = useState(initialAlbumState);
    let [songsState , setSongsState] = useState([initialSongState]);

    let [isLoading , setIsLoading] = useState(false);
    let [albumThumbnailPoster , setAlbumThumbnailPoster] = useState();
    let {albumTitle , albumPoster , albumReleaseDate , albumLanguages , albumDescrpition} = albumState;



    // handling album {poster}

    let handleAlbumPoster = (e)=>{
        let file = e.target.files[0];
        if(file){
            setAlbumThumbnailPoster(file)
        }
    }

    // Handling input change in album form 
        let handleAlbumInputChange =(e)=>{
            let {name , value}= e.target;
            setAlbumState({
                ...albumState , [name]:value
            })
        }
    // addd section method for song
        let addSongSection =(e)=>{
            e.preventDefault();
            setSongsState([
                ...songsState,{
                    songName:"",
                    songUrl:"",
                    songThumbnail:"",
                    songSingers:"",
                    songMood:"",
                    songMusicDirector:""
                }
            ])
        }
    // remove song section 
        let removeSongSection = (index , e)=>{
            e.preventDefault();
            
            if(index>0)
                setSongsState(songsState.filter((el , ind)=>{
                    return ind !=index;
                }))
                
        }

        //handling the song input 

        let handleSongInputChange = (index , e)=>{
            let {name , value}=e.target;

            let updatedState =[...songsState];
            updatedState[index][name] = value;

            setSongsState(updatedState);
        }
        // handling files of songs section 
        let handleSongsFileInput = (index , inpName , e)=>{
            let updatedSongs = [...songsState]
            updatedSongs[index][inpName]=e.target.files[0];

            setSongsState(updatedSongs);
        }
    // Form submit method

    let handleFormSubmit= async(e)=>{
        e.preventDefault();
        try {
            setIsLoading(true);

            let AlbumPosterData = new FormData();
            AlbumPosterData.append("file" , albumThumbnailPoster);
            AlbumPosterData.append("upload_preset" , "tech_haven_music_399");
            AlbumPosterData.append("cloud_name" , "dxtwf9t4b");
            let cloudinaryResponse = fetch("https://api.cloudinary.com/v1_1/dxtwf9t4b/image/upload" , {
                method:"POST",
                body:AlbumPosterData
              })
              let AlbumPosterUrlFromDB = await(await cloudinaryResponse).json()
              console.log(AlbumPosterUrlFromDB);
              
              let Payload = {...albumState , albumPoster:AlbumPosterUrlFromDB?.url};
              console.log(Payload);

              let SongsUrl = songsState.map(async(song , index )=>{
                let songThumbnailFormData = new FormData();

                songThumbnailFormData.append("file" , song?.songThumbnail);
                songThumbnailFormData.append("upload_preset" , "tech_haven_music_399");
                songThumbnailFormData.append("cloud_name" , "dxtwf9t4b");

                // songsstate iterating starts here

                let cloudinaryResponseOfSongThumbnailData = fetch("https://api.cloudinary.com/v1_1/dxtwf9t4b/upload" , {
                    method:"POST",
                    body:songThumbnailFormData
                  })
                  let SongPosterUrlFromDB = await(await cloudinaryResponseOfSongThumbnailData).json()
                    // console.log(SongPosterUrlFromDB);

                // songPoster url ends here
                //   ssong url starts here

                let songURLFormData = new FormData();

                songURLFormData.append("file" , song?.songUrl);
                songURLFormData.append("upload_preset" , "tech_haven_music_399");
                songURLFormData.append("cloud_name" , "dxtwf9t4b");

                // songsstate iterating starts here

                let cloudinaryResponseOfSongURLData = fetch("https://api.cloudinary.com/v1_1/dxtwf9t4b/upload" , {
                    method:"POST",
                    body:songURLFormData
                  })
                  let SongMP3UrlFromDB = await(await cloudinaryResponseOfSongURLData).json()
                    // console.log(SongMP3UrlFromDB);
                    console.log("songMP3Url" , SongMP3UrlFromDB);
                    console.log("songPosterUrl" , SongPosterUrlFromDB);
                    
                    


                //  songsstate iteration ends here
              })

            // let Payload = {...albumState , albumPoster:albumThumbnailPoster , AllAlbums: [...songsState]}
            // console.log(Payload);
              

        } catch (error) {
           toast.error(error.message)
           console.log(error);
            
        }finally{
            setIsLoading(false)
        }
        
        
    }

  return (
    <section className='h-full w-full flex justify-center '>
        <article className='min-h-[400px] w-[65%] bg-slate-800 rounded-md mt-10 pt-4 px-8'>
            <header><h1 className='text-[24px] font-semibold text-center'>Create Album</h1></header>
            <hr className='my-2'/>
            {/* Form starting here */}
            <main>
                {/* album form starting */}
                <header className='my-4'>
                    <h1 className='text-[20px] font-semibold'>Album Details</h1>
                </header>
                <article>
                    <form action="" onSubmit={handleFormSubmit}>
                        {/* album starts */}
                        <header className='flex flex-wrap justify-between gap-y-4'>
                            {/* first row album */}
                            <div className='flex flex-col gap-2 w-[48%]'>
                                <label htmlFor="albumTitle">Album Title</label>
                                <input onChange={handleAlbumInputChange} type="text" name='albumTitle' className='outline-none py-2 px-2 border rounded-md ' placeholder='Enter Album Title' value={albumTitle} />
                            </div>
                            <div className='flex flex-col gap-2 w-[48%]'>
                                <label htmlFor="albumPoster">Album Poster</label>
                                <input onChange={handleAlbumPoster} type="file" name='albumPoster' className='outline-none py-2 px-2 border rounded-md file:bg-blue-600 file:px-1 file:rounded-sm' placeholder='Enter Album Poster' />
                            </div>

                            {/* second row album */}
                            <div className='flex flex-col gap-2 w-[48%]'>
                                <label htmlFor="albumReleaseDate">Album Release Date</label>
                                <input value={albumReleaseDate} onChange={handleAlbumInputChange} type="date" name='albumReleaseDate' className='outline-none py-2 px-2 border rounded-md '  />
                            </div>
                            <div className='flex flex-col gap-2 w-[48%]'>
                                <label htmlFor="albumLanguages">Album Languages</label>
                                <input value={albumLanguages} onChange={handleAlbumInputChange} type="text" name='albumLanguages' className='outline-none py-2 px-2 border rounded-md ' placeholder='Enter  Languages' />
                            </div>
                            {/* third row */}
                            <div className='flex flex-col gap-2 w-[100%]'>
                                <label htmlFor="albumDescription">Album Description</label>
                                <textarea value={albumDescrpition} onChange={handleAlbumInputChange} name='albumDescription' className='outline-none py-2 px-2 border rounded-md ' placeholder='Enter Album description' >

                                </textarea>
                            </div>
                        </header>
                        {/* album ends */}
                        {/* songs form starts here */}
                        <main className='py-4'>
                            <header><h1 className='text-[20px] font-semibold'>Songs Section</h1></header>
                            {/* iteratiing the songstate */}
                            {songsState?.map((song , index)=>{
                             return   <section className='bg-slate-700 w-[100%] min-h-[250px] rounded-md my-4 py-2 px-6' >
                                <header><h1 className='text-[18px] font-semibold text-center'>Song {index+1}</h1></header>
                                    {/* this is song div section */}
                                    <main className='flex justify-between flex-wrap gap-y-4'>
                                        {/* first row song section */}
                                        <div className='flex flex-col gap-2 w-[32%]'>
                                            <label htmlFor="">Song Name</label>
                                            <input type="text" onChange={(e)=>handleSongInputChange(index , e)} value={song?.songName} className='outline-none border py-2 px-2 rounded-md' name='songName' placeholder='Enter your song'/>
                                        </div>
                                        <div className='flex flex-col gap-2 w-[32%]'>
                                            <label htmlFor="">Song Url</label>
                                            <input type="file" name='songUrl' onChange={(e)=>handleSongsFileInput(index , "songUrl",e)}  className='outline-none border py-2 px-2 rounded-md file:bg-blue-600 file:px-1 file:rounded-md' />
                                        </div>
                                        <div className='flex flex-col gap-2 w-[32%]'>
                                            <label htmlFor="">Song Poster</label>
                                            <input type="file" name='songThumbnail' onChange={(e)=>handleSongsFileInput(index , "songThumbnail",e)}  className='outline-none border py-2 px-2 rounded-md  file:bg-blue-600 file:px-1 file:rounded-md'/>
                                        </div>
                                        {/* second roww sons section */}
                                        <div className='flex flex-col gap-2 w-[32%]'>
                                            <label htmlFor="">Song Singers</label>
                                            <input type="text" name='songSingers' onChange={(e)=>handleSongInputChange(index , e)} value={song?.songSingers} className='outline-none border py-2 px-2 rounded-md' placeholder='Enter your song singers'/>
                                        </div>
                                        <div className='flex flex-col gap-2 w-[32%]'>
                                            <label htmlFor="">Song Mood</label>
                                            <input type="text" name='songMood' onChange={(e)=>handleSongInputChange(index , e)} value={song?.songMood} className='outline-none border py-2 px-2 rounded-md' placeholder='Enter your song Mood'/>
                                        </div>
                                        <div className='flex flex-col gap-2 w-[32%]'>
                                            <label htmlFor="">Song Music Director</label>
                                            <input type="text" name='songMusicDirector' onChange={(e)=>handleSongInputChange(index , e)} value={song?.songMusicDirector} className='outline-none border py-2 px-2 rounded-md' placeholder='Enter your music Director'/>
                                        </div>
                                    </main>
                                    <footer className='flex justify-between py-5'>
                                        <button className='py-2 px-8 bg-red-600 rounded-md' onClick={(e)=>removeSongSection(index , e)}>Remove Section</button>
                                        {index == songsState.length-1 && <button className='py-2 px-8 bg-blue-600 rounded-md' onClick={(e)=>addSongSection(e)}>Add Section</button>}
                                    </footer>
                                </section>
                            })}
                            
                        </main>
                        {/* songs form ends here */}


                        {/* submit part starts */}
                        <footer className='py-8'>
                            <button className='bg-blue-600 hover:bg-blue-800 w-[100%] py-2 rounded-md'>Submit</button>
                        </footer>
                        {/* submit part ends */}
                    </form>
                </article>
                {/* album form eending */}
            </main>
            {/* Form ending here */}
        </article>
        {isLoading && <Spinner/>}
    </section>
  )
}

export default CreateAlbum
