import React, {useEffect, useState} from 'react';
import { Container, Form } from 'react-bootstrap';
import Info from './Info';

const Profile = () => {


    const [info, setinfo] = useState([]);

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setinfo(data))

    }, [])
    return (
        <div className='mt-5 text-light'>
            <Container>
                <div className='shadow p-3 mb-5'>
                <Form>
                    {
                       
                            info?.map(data => <Info
                                key={data.id}
                                data={data}
                            >
                            </Info>)
        
                    }
                </Form>
                </div>
                
            </Container>
        </div>
    );
};

export default Profile;