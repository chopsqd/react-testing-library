import React from 'react';

const UserForTest = ({user, onDelete}) => {
    return (
        <div>
            {user.name}
            <button id="user-delete" onClick={() => onDelete(user.id)}>delete</button>
        </div>
    );
};

export default UserForTest;