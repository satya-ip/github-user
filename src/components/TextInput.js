import React from 'react';

const TextInput = ({name, label, onChange, placeholder, value, error, onSearch}) => {
    let wrapperClass = 'form-group search-cntr';
    if(error){
        wrapperClass += " " + 'has-error';
    }

    return(
        <div className={wrapperClass}>

            <form onSubmit={onSearch} className="custom-search-input">
                <div className="input-group">
                    <label htmlFor={name} className="sr-only">{label}</label>
                    <input
                        type="text"
                        name={name}
                        className="search-query form-control"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange} autoFocus='true'/>
                    <span className="input-group-btn">
                        <button className="btn " type="button" onClick={onSearch}>
                            <span className="glyphicon glyphicon-search"></span>
                        </button>
              
                    </span> 

                </div>

                <div>
                    {error.user && <div className="text-danger">User not found</div>}

                </div>

            </form>

        </div>
    );
};

// TextInput.propTypes = {
//     name: PropTypes.string.isRequired,
//     label: PropTypes.string.isRequired,
//     onChange: PropTypes.func.isRequired,
//     placeholder: PropTypes.string,
//     value: PropTypes.string,
//     error: PropTypes.string
// };

export default TextInput;
