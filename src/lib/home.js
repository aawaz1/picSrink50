import React from 'react'

const home = () => {
  return (
    <>
    <h1 className="font-bold">Compress Image to Less than 50 KB</h1>
    <form onSubmit={handleSubmit}>
        <input type="file" onChange={handleFileChange} accept=".jpg,.jpeg,.png" />
        <button type="submit" disabled={loading}>
            {loading ? "Compressing..." : "Compress Image"}
        </button>
    </form>
    </>
  )
}

export default home