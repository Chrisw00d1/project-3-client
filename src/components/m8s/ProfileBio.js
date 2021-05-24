export default function ProfileBio({ username, highScore,formdata, edit, handleInput }) {
  return (
    <div>
      <div className="media-content">
        <p className="title is-4">{username}&apos;s bio</p>
      </div>
      <br/>
      <div className="media-content">
        {!edit && <p className="title is-6">{!formdata.bio ? 'Add a description about yourself' : formdata.bio }</p>}
        {edit && <textarea className='title is-6' id='bio' value={formdata.bio} onChange={handleInput}/>}
      </div>
      <hr/>
      <div className="media-content">
        <p className="title is-4">Throw a pl8 Highscore</p>
      </div>
      <br/>
      <div className="media-content">
        <p className="title is-6">{highScore}</p>
      </div>
    </div>
  )
}