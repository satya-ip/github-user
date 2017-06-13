import React from 'react';
import TextInput from './TextInput';

const UserSearchWidget = ({userid, onChange, onSearch,errors}) => {

    return (

        <div className="container-fluid">
            <div className="row">
                <div className="col-xs-4">
                    
                </div>
                
                <div className="col-xs-6">

                    <div className="input-group">
                        <TextInput
                        name="userid"
                        label="Git user id"
                        placeholder = "Enter GitHub User ID"
                        onChange={onChange}
                        onSearch ={onSearch}
                        value={userid}
                        error={errors}
                        />
                       
                    </div>
                    
                </div>

                  <div className="col-xs-2">
                    
                </div>
            </div>
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
