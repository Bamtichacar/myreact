import React from 'react';

function Form() {
    return (
        <form>
            <label>
                Nom:
                <input type="text" name="name" />
            </label>
            <label>
                Email:
                <input type="email" name="email" />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
    );
}

export default Form;