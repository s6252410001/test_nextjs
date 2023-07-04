import React from 'react'

export default async function About() {

    const result = await fetch("https://odemobiles.com/adhoc/youtubes/index_new.php?username=admin&password=password&type=songs");
    const data = await result.json()
  return (
    <div>
      About
      <span>Debug : {JSON.stringify(data)}</span>
    </div>
  )
}
