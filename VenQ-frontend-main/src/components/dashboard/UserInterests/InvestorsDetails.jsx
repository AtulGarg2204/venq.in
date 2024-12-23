import React from 'react';
import { useLocation } from 'react-router-dom';
import { Button } from '@mui/material';
import { useParams } from 'react-router-dom';

const InvestorsDetails = () => {
    const location = useLocation();
    const { investment } = location.state;
    const { investorId } = useParams();
     console.log(investment)
            console.log(investorId)

    return (
        <div>
            <h1>{investment.name}</h1>
            <Button variant="contained">Profile</Button>
                    <Button variant="contained">Transactions</Button>
            <Button variant="contained">Documents</Button>
                <Button variant="contained">Notes</Button>
            <div>
                <h2>Personal Information</h2>
                    <p><strong>Name:</strong> {investment.name}</p>
                    <p><strong>Email:</strong> {investment.email}</p>
                    <p><strong>Phone:</strong> {investment.phone}</p>
                
            </div>
            <div>
                <h2>Legal Information</h2>
               
            </div>
        </div>
    );
};

export default InvestorsDetails;