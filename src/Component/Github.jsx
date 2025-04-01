import React, { useEffect, useState } from 'react'
import './Github.css'

function Github() {
  const [data, setData] = useState([])
  useEffect(() => {
    fetch("https://api.github.com/users/Praveenkr398")
      .then((response) => response.json())
      .then((data) => {
        console.log(data.followers  )
        setData(data);
        
      })
     
  }, []);
  return (
    
    <div className='github'> 
    <img src={data.avatar_url} alt="git profile pic" className='gitPic' />
    <div>
      <table>
        <caption>{data.name}</caption>
        <tr>
          <th>data</th>
          <th>info</th>
        </tr>
        <tr>
          <td>User ID</td>
          <td>{data.id}</td>
        </tr>
        <tr>
          <td>user Id</td>
          <td>{data.login}</td>
        </tr>
        <tr>
          <td>location</td>
          <td>{data.location}</td>
        </tr>
      </table>
    </div>
    </div>
  )
}

export default Github