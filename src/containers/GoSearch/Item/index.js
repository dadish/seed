import React from 'react';
import { Icon, Grid } from 'semantic-ui-react';
  // id: item.id,
  // name: item.name,
  // owner: item.owner.login,
  // description: item.description,
  // stargazers_count: item.stargazers_count,
  // forks_count: item.forks_count,
  // language: item.language,

const { Column, Row } = Grid;

export const ItemComponent = ({ item }) => {
  const {
    name,
    owner,
    forks_count,
    stargazers_count,
  } = item.toObject(['name', 'owner', 'forks_count', 'stargazers_count']);
  return (
    <Row>
      <Column width="10">
        <a href={`https://github.com/${owner}/${name}`} target="_blank" >{`${owner}/${name}`}</a>
      </Column>
      <Column width="3">
         <Icon name="fork" /> {forks_count}
      </Column>
      <Column width="3">
        <Icon name="star" /> {stargazers_count}
      </Column>
    </Row>
    );
}

export default ItemComponent;