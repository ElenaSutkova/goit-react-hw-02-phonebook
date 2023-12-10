import React, { Component } from 'react';
import styles from '../Filter/Filter.module.css'

class Filter extends Component {
    render() {
        const { value, onChange } = this.props;

        return (
            <label className={styles.label}>Find contacts by name:
                <input className={styles.input} type="text" value={value} onChange={onChange} />
            </label>
        )
    }
}


export default Filter;