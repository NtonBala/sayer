import React from 'react';
import PropTypes from 'prop-types';
import {bind} from 'lodash/function';
import SubmitBtn from './elements/SubmitBtn';

class CommentForm extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddComment = bind(this.handleAddComment, this);
    }
    handleAddComment(e) {
        e.preventDefault();

        const comment = this.text.value.trim();
        if (comment) {
            this.props.addComment(comment);
        }
        this.form.reset();
    }
    render() {
        return (
            <form
                ref={(form) => {this.form = form;}}
                onSubmit={this.handleAddComment}
            >
                <label htmlFor='commentInput'>Enter new comment:</label>
                <input
                    id='commentInput'
                    ref={(text) => {this.text = text;}}
                    type='text'
                    placeholder='New comment goes here...'
                />
                <label htmlFor='commentSubmit'>Submit new comment:</label>
                <SubmitBtn id='commentSubmit'/>
            </form>
        );
    }
}

CommentForm.propTypes = {
    addComment: PropTypes.func
};

CommentForm.defaultProps = {
    addComment: () => true
};

export default CommentForm;
