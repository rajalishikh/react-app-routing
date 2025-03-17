import React from 'react';

const NavBarDetails = ({item}) => {
    const {name}=item
    return (
        <div>
            {name}
        </div>
    );
};

export default NavBarDetails;