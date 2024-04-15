import React from 'react'

const ListingDate = ({fd, sfd ,handleSubmit}) => {
  return (
    <div>
         <input
        type="date"
        // placeholder="Enter Highlight..."
        value={fd.listingDate}
        onChange={(event) =>
          sfd({ ...fd, listingDate: event.target.value })
        }/>
        <br />
      <button onClick={handleSubmit}>Submit All Data</button>

    </div>
  )
}

export default ListingDate