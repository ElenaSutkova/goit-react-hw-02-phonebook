import React, { Component } from 'react';
import styles from '../ListItem/ListItem.module.css'

class ListItem extends Component {
    handleClick = () => {
        const { id, onDeleteContact } = this.props;
        onDeleteContact(id);
    }
        render() {
            const { name, number } = this.props;

            return (
                <li className={styles.item}>
                    <p>{name}: {number}</p>
                    <button
                        className={styles.btn}
                        onClick={this.handleClick}>Delete</button>
                </li>
            )
        }
    
}

export default ListItem;