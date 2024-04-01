import React from 'react';

const Friend = props => {
    const {friend, openDetails} = props

    return (
        <div className='friend'>
            {friend.name}
            <button onClick={() => openDetails(friend.id)}>
                See details
            </button>
        </div>
  )
}

export default Friend;