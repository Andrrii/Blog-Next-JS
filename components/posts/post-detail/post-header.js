import React from 'react';
import classes from './post-header.module.css'

const PostHeader = ({title,image}) => {
    return (
        <header className={classes.header}>
            <h1>{title}</h1>
            <img src={image} alt = {title} width = {200} height = {150}/>
        </header>
    );
};

export default PostHeader;