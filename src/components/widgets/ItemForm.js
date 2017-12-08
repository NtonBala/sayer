import React from 'react';
import PropTypes from 'prop-types';
import {bind} from 'lodash/function';
import SubmitBtn from './elements/SubmitBtn';

class ItemForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddItem = bind(this.handleAddItem, this);
    }
    handleAddItem(e) {
        e.preventDefault();

        const title = this.text.value.trim();
        if (title) {
            this.props.addItem(title);
        }
        this.form.reset();
    }
    render() {
        return (
            <form
                ref={(form) => {this.form = form;}}
                onSubmit={this.handleAddItem}
            >
                <label htmlFor='titleInput'>Enter new item title:</label>
                <input
                    id='titleInput'
                    ref={(text) => {this.text = text;}}
                    type='text'
                    placeholder='New item title...'
                />
                <label htmlFor='titleSubmit'>Submit new item title:</label>
                <SubmitBtn id='titleSubmit'/>
            </form>
        );
    }
}

ItemForm.propTypes = {
    addItem: PropTypes.func.isRequired
};

ItemForm.defaultProps = {
    addItem: () => true
};

export default ItemForm;
