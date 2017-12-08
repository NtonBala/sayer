import React from 'react';
import PropTypes from 'prop-types';
import {bind} from 'lodash/function';

class AddItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddItem = bind(this.handleAddItem, this);
    }
    handleAddItem(e) {
        e.preventDefault();
        const title = this.titleInput.trim();
        if (title) {
            this.props.addItem(title);
        }
        this.addItemForm.reset();
    }
    render() {
        return (
            <form
                ref={(form) => {this.addItemForm = form;}}
                onSubmit={this.handleAddItem}
            >
                <label htmlFor='titleInput'>Enter new item title:</label>
                <input
                    id='titleInput'
                    ref={(titleInput) => {this.titleInput = titleInput;}}
                    type='text'
                    placeholder='New item title...'
                />
                <label htmlFor='titleSubmit'>Submit new item title:</label>
                <input
                    id='titleSubmit'
                    type='submit'
                    value='>'
                />
            </form>
        );
    }
}

AddItemForm.propTypes = {
    addItem: PropTypes.func.isRequired
};

AddItemForm.defaultProps = {
    addItem: () => true
};

export default AddItemForm;
