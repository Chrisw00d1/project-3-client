import React from 'react'
import { Link, useParams } from 'react-router-dom'
import ScrollMenu from 'react-horizontal-scrolling-menu'

import { getAllM8s } from '../../lib/api'
import { useSpring } from '@react-spring/core'

export default function ProfileM8s({ formdata }) {
  const { m8Id } = useParams()
  const [m8, setM8] = React.useState(null)

  React.useEffect(() => {
    const getData = async () => {
      try {
        const res = await getAllM8s(m8Id)
        setM8(res.data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [m8Id])
  console.log(m8)
  

  return (
    <section>
      <div className="media-content">
        <p className="title is-4">{formdata.username}&apos;s m8s</p>
      </div>
      <br/>

      <div className="containerScroll">

        {m8 && (
          m8.map(m8 => (
            <div key={m8._id} className="cardScroll">

              <Link to={`/m8/${m8._id}` } >
                <p className="title is-4">{m8.username}</p>
                {
                  m8.avatar ? 
                    <img src={m8.avatar} alt={m8.username}/> 
                    : 
                    <img src="https://www.ramw.org/sites/default/files/styles/content/public/default_images/default_0.jpg?itok=TlxjusRt" alt="default pic" />
                }
              </Link>
            </div>
          ))
        )}
      </div>
    </section>
  )
}
