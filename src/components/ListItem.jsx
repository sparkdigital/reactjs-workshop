import React from 'react'




class ListItem extends React.Component{

  render(){
    return(
      <div>{this.props.movie.Title}</div>
    );
  }
}

export default ListItem;
