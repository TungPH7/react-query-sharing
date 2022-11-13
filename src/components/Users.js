import { useState, useEffect } from 'react'
import axios from 'axios'

function Users() {
  const [isLoading, setIsLoading] = useState(true)
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get('http://localhost:4000/users').then(res => {
      setData(res.data)
      setIsLoading(false)
    })
  }, [])

  if (isLoading) {
    return <h2>Loading...</h2>
  }

  return (
    <>
      <h2>Users Page</h2>
      {data.map(user => {
        return <div key={user.id}>{user.name}</div>
      })}
    </>
  )
}

export default Users