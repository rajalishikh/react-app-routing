import React from 'react';

const NavBarDetails = ({item}) => {
    const {name}=item
    return (
        <div className='hover:bg-yellow-700 p-2  rounded-xl'>
            {name}
        </div>
    );
};

export default NavBarDetails;