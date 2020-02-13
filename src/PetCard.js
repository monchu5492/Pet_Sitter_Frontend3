import React from 'react'
import { Card, Icon, Image, Button } from 'semantic-ui-react'



class PetCard extends React.Component {
// handleDeleteButton = () => {
  //   props.deletePet(props.pet)
  // }

  handleDeleteButton = () => {
    this.props.deletePet(this.props.pet)
    console.log("DELETE BUTTON CLICKED!!!")
    console.log(this.props)
  }

  render() {
    return(
      <Card>
        {console.log(this.props.pet.name)}
        <Image src={this.props.pet.image} wrapped ui={false} />
        <Card.Content>
<Card.Header>{this.props.pet.name}</Card.Header>
          <Card.Meta>
            <span className='date'>{this.props.pet.animal_type}</span>
          </Card.Meta>
          <Card.Description>
            {this.props.pet.age}
          </Card.Description>
        </Card.Content>
        <button className="ui button">Edit Pet</button>
        <button className="ui button" onClick={this.handleDeleteButton}>Delete Pet</button>
        
      </Card>
      )
    }
}

export default PetCard