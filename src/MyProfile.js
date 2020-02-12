import React from 'react'
import { Image, Header, Divider } from 'semantic-ui-react'
import PetsContainer from './PetsContainer'
import PetCard from './PetCard'

// testing note #1 alice

const ProfilePicture = (props) => (
  <>
    <div className="profile-top-section">
    {console.log(props.user[0])}

    <Image className="profilepic" src={props.user[0].user_image} size='medium' circular />
    <Header className="profilename" as='h3' style={{ fontSize: '2em' }}>
    {props.user[0].name}
    </Header>

    </div>

    <Divider
      as='h4'
      className='header'
      horizontal
      style={{ margin: '3em 0em', textTransform: 'uppercase' }}>
      <p>My Pets</p>
    </Divider>

    <PetsContainer user={props.user}/>
    <PetCard/>
  </>
)

export default ProfilePicture