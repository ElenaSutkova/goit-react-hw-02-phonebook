import React, { Component } from 'react';
import ListItem from '../ListItem/ListItem'


class List extends Component {
    render() {
        const { contacts, onDeleteContact } = this.props;

        return (
            <ul>
                {contacts.map(contact => (
                    <ListItem 
                        key={contact.id}
                        id={contact.id}
                        name={contact.name}
                        number={contact.number}
                        onDeleteContact={onDeleteContact} />
                ))}
            </ul>
        )
    }
}

export default List;