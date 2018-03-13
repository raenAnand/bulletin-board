import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import {arrayMove, SortableElement, SortableContainer} from 'react-sortable-hoc';

import AddEntry from '../addEntry';

const SortableItem = SortableElement(({item}) => {
  return (
    <tr>
      <td>{item.id}</td>
      <td>{item.title}</td>
      <td>{item.owner}</td>
      <td>{item.duration}</td>
      <td><a href={item.url}>{item.url}</a></td>
      <td>
        <FontAwesome
          className="edit-icon"
          name="edit"
          size="1x"
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
        <FontAwesome
          className="cancel-icon"
          name="times"
          size="1x"
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
      </td>
    </tr>
  );
});

const SortableList = SortableContainer(({items}) => {
  return (
    <tbody>
      {items.map((item, index) => (
        <SortableItem key={`item-${index}`} index={index} item={item}/>
      ))}
    </tbody>
  );
});

class ListEntries extends Component {

  constructor () {
    super();
    
    this.state = {
      items: [
        {
          id: 1,
          owner: 'owner1',
          duration: '10',
          url: 'https://www.google.com',
          title: 'google'
        }, {
          id: 2,
          owner: 'owner1',
          duration: '5',
          url: 'https://www.youtube.com',
          title: 'youtube'
        }, {
          id: 3,
          owner: 'owner2',
          duration: '10',
          url: 'https://www.twitter.com',
          title: 'twitter'
        }, {
          id: 4,
          owner: 'owner1',
          duration: '5',
          url: 'https://www.facebook.com',
          title: 'facebook'
        }
      ]
    };
    
    this.onSortEnd = this.onSortEnd.bind(this);
  }

  onSortEnd({oldIndex, newIndex}) {
    this.setState({
      items: arrayMove(this.state.items, oldIndex, newIndex)
    });
  }

  render () {
    
    return (
      <div>
        <AddEntry/>
        <h3>Bulletins</h3>
        <table className="bulletin-table">
          <thead>
            <tr>
              <td>id</td>
              <td>title</td>
              <td>owner</td>              
              <td>duration</td>
              <td>url</td>
              <td>actions</td>
            </tr>
          </thead>
          <SortableList items={this.state.items} onSortEnd={this.onSortEnd}/>              
        </table>
      </div>
    );
  }

}

export default ListEntries;
