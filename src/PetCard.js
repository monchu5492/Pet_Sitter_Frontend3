import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'


const PetCard = (props) => (
  // handleDeleteButton = () => {
  //   props.deletePet(props.pet)
  // }

      <Card>
        {console.log(props.pet.name)}
        <Image src={props.pet.image} wrapped ui={false} />
        <Card.Content>
<Card.Header>{props.pet.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{props.pet.animal_type}</span>
          </Card.Meta>
          <Card.Description>
            {props.pet.age}
          </Card.Description>
        </Card.Content>
        <button className="ui button">Edit Pet</button>
        <button className="ui button" >Delete Pet</button>
        {/* onClick={handleDeleteButton()} */}
      </Card>
)

export default PetCard