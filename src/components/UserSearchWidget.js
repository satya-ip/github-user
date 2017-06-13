import React from 'react';
import TextInput from './TextInput';

const UserSearchWidget = ({userid, onChange, onSearch,errors}) => {

    return (
        <div>
            <TextInput
                name="userid"
                label="Git user id"
                placeholder = "Search User"
                onChange={onChange}
                onSearch ={onSearch}
                value={userid}
                error={errors}
                />

            {/* <input
                type="submit"
                className="btn btn-primary"
                onClick={onSearch} /> */}
        </div>
    );
};

// UserSearchWidget.propTypes = {
//     userid: React.PropTypes.string,
//     onSearch: React.PropTypes.func.isRequired,
//     onChange: React.PropTypes.func.isRequired,
//     errors: React.PropTypes.object
// };

export default UserSearchWidget;
