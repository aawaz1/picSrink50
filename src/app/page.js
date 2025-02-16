"use client";
import { useState } from "react";
import extension from '../../public/extension.png'
import Image from "next/image";


export default function Home() {
    const apiUrl = process.env.NEXT_PUBLIC_BACKEND_URL;


    const [file, setFile] = useState(null);
    const [imageSrc, setImageSrc] = useState(null);
    const [loading, setLoading] = useState(false);

    const handleFileChange = (e) => {
        if (!e.target.files.length) return;
    
        const selectedFile = e.target.files[0];
    
        if (selectedFile) {
            e.target.value = ""; // Reset input to allow selecting the same file again
            setFile(selectedFile);
            const objectURL = URL.createObjectURL(selectedFile);
            setImageSrc(objectURL);
        }
    };
    
    

    function formatFileSize(bytes) {
        if (bytes < 1024) {
            return `${bytes} B`;
        } else if (bytes < 1024 * 1024) {
            return `${(bytes / 1024).toFixed(2)} KB`;
        } else {
            return `${(bytes / (1024 * 1024)).toFixed(2)} MB`;
        }
    }
    
    // Example usage:
    
    

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!file) return alert("Please select a file!");

        setLoading(true);
        const formData = new FormData();
       
        formData.append("file", file);

        try {
          const response = await fetch(`${apiUrl}/api/compress-image`, { 
            method: "POST",
            body: formData,
        });
        

            if (!response.ok) throw new Error("Failed to compress image");

            const blob = await response.blob();
            const url = window.URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = `${file?.name}[50Kb].jpg`;
            document.body.appendChild(a);
            a.click();
            a.remove();
        } catch (error) {
            console.error("Error:", error);
            alert("Compression failed. Please try again.");
        } finally {
            setLoading(false);
            setFile(null);
            setImageSrc(null);
        }
    };

    return (
    
        <div className="  grid  mt-8 p-8 grid-cols-1 md:grid-cols-2">
            <section className="flex flex-col items-center justify-start  p-8 max-w-3xl mx-auto text-center">
      <h2 className=" text-xl md:text-3xl font-bold text-gray-900 mb-4">Converting Images made simple</h2>
    
      
    

      <div className="flex flex-col items-start justify-start gap-3 mt-3 text-gray-700 text-lg">
        


        <p className="text-md md:text-base ">✅Shrink your images, not the quality!</p>
        <p className="text-md md:text-base ">✅Fast & efficient image compression – keep it under 50KB!</p>
        <p className="text-md md:text-base ">✅Optimize, compress, and save space effortlessly</p>
      </div>
    </section>
            <div className="flex flex-col items-center max-w-3xl mx-auto ">
            <div className="bg-green-50 p-6 rounded-xl shadow-md w-full">
        <h3 className="text-xl md:text-3xl text-center font-semibold text-gray-800 mb-4">Upload Your Image</h3>
        <p className="text-gray-600 text-sm md:text-md  mb-4">Easily compress your images to less than 50KB without losing quality.</p>
        <form onSubmit={handleSubmit} className="flex flex-col gap-2 border border-teal-400 border-dashed p-8 justify-center items-center">
         { imageSrc ?    <div>
      
       <> <div> <img src={imageSrc} alt="Preview" className="rounded-md md:max-w-[200px] max-w-[100px]" /> </div> </> 
    </div> : <Image className="" alt="extension" src={extension} width={100}/> 
         }
        
            <input
  type="file"
  onChange={handleFileChange}
  className="hidden"
  id="file-upload"
  accept="image/png, image/jpeg, image/jpg, image/webp"
/>


{
    file ? null : (
        <>
        <label
  htmlFor="file-upload"
  className="cursor-pointer text-sm md:text-base  px-12 py-4 border border-gray-300 rounded-full mb-4 text-center bg-teal-600 text-white hover:bg-teal-700"
>
  Upload File
</label>
</>
    )
}

{file && (<div className=" border border-teal-300 p-2"><p className=" text-sm md:text-base text-gray-700 ">File Name: {file?.name}</p>
    <p className="text-gray-700 text-sm md:text-base ">File Size: {formatFileSize(file?.size)}</p>
</div>)}

      {
        file && (
            <button disabled={loading} className="bg-teal-600 mt-2 rounded-full text-white text-sm md:text-base px-12 py-4 hover:bg-teal-700 transition">
            {
                loading ? "Converting..." : "Convert"
        }
         </button>
        )
      }
        </form>
      </div>
            </div>
         
           
        </div>
      
    );
}
