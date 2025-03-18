import React from 'react';

const NavBarDetails = ({item}) => {
    const {name}=item
    return (
        <div className='bg-yellow-700'>
            {name}
        </div>
    );
};

export default NavBarDetails;