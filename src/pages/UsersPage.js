import React, { useEffect, useState } from 'react';
import { HttpService } from '../services/httpService';
import Card from "../components/Card";
import CardHeader from "../components/CardHeader";
import Checkbox from "../components/Checkbox";
import { User } from '../models/User';
import CardSubtitle from '../components/CardSubtitle';

export function UsersPage() {
    const [users, setUsers] = useState([]);
    const [filteredUsers, setFilteredUsers] = useState([]);
    const [filters, setFilters] = useState({
        ageGt20: false,
        agelt30: false,
        lenGt10: false
    })

    async function getAllUsers() {
        try {
            const res = await HttpService.getAllUsers();
            setUsers(res.data.map((user) => {
                return new User(user);
            }));
        }
        catch (error) {
            console.log(error);
        }
    }

    const checkboxChanged = (filterName) => {
        setFilters({
            ...filters,
            [filterName]: !filters[filterName]
        })
    }

    useEffect(() => {
        getAllUsers();
    }, []);

    useEffect(() => {
        const filteredList = users.filter(user => {
            let criteriaSatisfied = true;

            if (filters.ageGt20 && !(user.age > 20))
                criteriaSatisfied = false;


            if (filters.agelt30 && !(user.age < 30))
                criteriaSatisfied = false;


            if (filters.lenGt10 && !(user.fullName.length > 10))
                criteriaSatisfied = false;

            return criteriaSatisfied;
        })

        setFilteredUsers(filteredList);

    }, [users, filters])

    return (
        <div className="container">

            <div className="title is-primary-font">
                <h2>Users</h2>
            </div>
            <div>
                <div className={"is-secondary-font"}>
                    <h4>Filters:</h4>
                </div>
                <div className="filter-container">
                    <Checkbox checked={filters.ageGt20} 
                        label="Age > 20" 
                        toggle={() => checkboxChanged('ageGt20')}>
                    </Checkbox>
                    <Checkbox checked={filters.agelt30} 
                        label="Age < 30"
                        toggle={() => checkboxChanged('agelt30')}>
                    </Checkbox>
                    <Checkbox checked={filters.lenGt10} 
                        label="Fullname longer than 10 characters"
                        toggle={() => checkboxChanged('lenGt10')}>
                    </Checkbox>
                </div>
            </div>

            <div className="user-grid">
                {
                    filteredUsers.map((user, index) => {
                        return (

                            <Card key={index}>
                                <CardHeader>{`${user.fullName}`}</CardHeader>
                                <CardSubtitle>{`Age : ${user.age}`}</CardSubtitle>
                                <CardSubtitle>{`Account Id : ${user.userId}`}</CardSubtitle>
                            </Card>

                        )
                    })
                }
            </div>

        </div>
    )
}