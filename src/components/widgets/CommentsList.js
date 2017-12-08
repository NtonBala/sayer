import React from 'react';
import PropTypes from 'prop-types';
import {map} from 'lodash/collection';
import Comment from './Comment';

const CommentsList = ({commentIds}) => (
    <ul>
        {map(commentIds, (id) => (
            <Comment
                key={id}
                id={id}
            />
        ))}
    </ul>
);

CommentsList.propTypes = {
    commentIds: PropTypes.arrayOf(
        PropTypes.string
    )
};

CommentsList.defaultProps = {
    commentIds: ['comment1']
};

export default CommentsList;
