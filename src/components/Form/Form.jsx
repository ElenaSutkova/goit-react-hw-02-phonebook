import React, {Component} from 'react';
import styles from '../Form/Form.module.css'
class Form extends Component {
    state = {
        name: '',
        number: '',
    };

    handleChange = event => {
        const { name, value } = event.target;
        this.setState({ [name]: value });
    };

    handleSubmit = event => {
        event.preventDefault();
        const { name, number } = this.state;
        this.props.onSubmit(name, number);
        this.setState({ name: '', number: '' });
    };

    render() {
        const { name, number } = this.state;

        return (
            <form
                className={styles.form}
                onSubmit={this.handleSubmit}>
                <ul className={styles.list}>
                    <li className={styles.item}>
                        <label className={styles.name}>Name</label>
                        <input
                            className={styles.input}
                            type="text"
                            name="name"
                            placeholder="Enter name"
                            value={name}
                            onChange={this.handleChange}
                            required
                        />
                    </li>
                    <li className={styles.item}>
                        <label className={styles.name}>Number</label>
                        <input
                            className={styles.input}
                            type="tel"
                            name="number"
                            placeholder="Enter phone number"
                            value={number}
                            onChange={this.handleChange}
                            required
                        />
                    </li>
                    <li>
                        <button type="submit">Add Contact</button>
                    </li>
                </ul>
            </form>
        )
    }
}

export default Form;