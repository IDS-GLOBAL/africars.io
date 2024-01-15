import React from 'react'

const IdVehiclePage = ({
    params,
}: {
    params: { id: string },
}) => {
    return (
        <div>
            Vehicle Id Page
            <p>Id: {params.id}</p>
        </div>
    )
}

export default IdVehiclePage
