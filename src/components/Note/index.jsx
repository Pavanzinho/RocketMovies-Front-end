import { Container } from "./styles";
import { FiStar } from "react-icons/fi";
import { FaStar } from "react-icons/fa"
import { useState } from "react"

import { Tag } from "../../components/Tag";

export function Note({ data, ...rest }) {


    return (
        <Container {...rest}>

            <h1>{data.movie_title}</h1>
            <div>
                {Array.from({ length: 5 }).map((e, index) =>
                    data.rating > index ? 
                    
                    <FaStar /> : <FiStar />
                )}


            </div>

            <p>
                {data.movie_description}
            </p>

            {
                data.movie_tags &&
                <footer>
                    {
                        data.movie_tags.map(data => <Tag key={data.id} title={data.name} />)
                    }
                </footer>
            }




        </Container>

    )


}