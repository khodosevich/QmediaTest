import React, {useEffect, useState} from 'react';

import ProductItem from "./ProductItem";
import classes from "../style/quiz.module.css";
import Pagination from "./Pagination";

import resultClasses from '../style/result.module.css'
import axios from "axios";

const Result = () => {

    const [products, setProducts] = useState([])

    const fetchData = async () => {
        await axios.get("./products.json").then(response => {
            setProducts(response.data)
        })
    }

    useEffect(() => {
        fetchData()
    }, []);

    return (<div>
                <h2 className={classes.title}>Результат</h2>
                <p className={classes.description}>
                    Мы подобрали для вас наиболее подходящие средства
                </p>
                <div className={resultClasses.products_items}>
                    {
                        products.map( r => (<ProductItem key={r.title} props={r}/>))
                    }
                </div>
                <Pagination currentPage={1} totalPages={13}/>
    </div>);
};

export default Result;