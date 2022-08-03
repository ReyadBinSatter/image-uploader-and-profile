import React, { useState } from 'react';
import { Image, Item, Button } from "semantic-ui-react";
import { Container, Row, Col } from 'react-bootstrap';
import imageCompression from "browser-image-compression";
import pic from '../../Images/placeholder.png';


const Gallery = () => {
    const [origImage, setOrigImage] = useState("");
    const [origImageFile, setOrigImageFile] = useState("");
    const [compressedImage, setCompressedImage] = useState("");
    const [fileName, setFileName] = useState("");



    const handle = (e) => {

        const imageFile = e.target.files[0];

        setOrigImage(imageFile);

        setOrigImageFile(URL.createObjectURL(imageFile));

        setFileName(imageFile.name);

    };



    const handleCompressImage = (e) => {

        e.preventDefault();



        const options = {

            maxSizeMB: 1,

            maxWidthOrHeight: 500,

            useWebWorker: true,

        };



        if (options.maxSizeMB >= origImage / 1024) {

            alert("Image is too small, cant be compressed");

            return 0;

        }



        let output;

        imageCompression(origImage, options).then((x) => {

            output = x;



            const downloadLink = URL.createObjectURL(output);

            setCompressedImage(downloadLink);

        });

    };
    return (
        <div className='mt-5'>


            <Container>
                <Row>
                    <Col>
                        <Item>

                            {origImageFile ? (

                                <Image src={origImageFile}></Image>

                            ) : (

                                <Image src={pic}></Image>

                            )}

                        </Item>
                    </Col>


                    <Col>

                        <Item>

                            {compressedImage ? (

                                <Image src={compressedImage}></Image>

                            ) : (

                                <Image src={pic}></Image>

                            )}

                        </Item>
                    </Col>
                </Row>

                <input

                    type="file"

                    accept="image/*"

                    className="my-3 btn btn-outline-info w-50 me-3"

                    onChange={(e) => handle(e)}

                />



                {origImageFile && (

                    <Button

                        className='btn btn-outline-info py-2 me-3'

                        onClick={(e) => {

                            handleCompressImage(e);

                        }}

                    >

                        {" "}

                        Compress Image

                    </Button>

                )}



                {compressedImage && (

                    <Button className='btn btn-outline-info py-2 me-3'>

                        <a href={compressedImage} download={fileName} className='text-decoration-none text-info'>

                            {" "}

                            Download Image

                        </a>

                    </Button>

                )}
            </Container>

        </div>
    );
};

export default Gallery;