import Link from 'next/link';
import React from 'react';
import classes from './post-item.module.css'

const PostItem = ({ post }) => {

    const { title,image,excerpt,date,slug } = post;

    const formattedDate = new Date(date).toLocaleDateString('en-US',{
        day:'numeric',
        month:'long',
        year:'numeric'
    })

    const imagePath = `/images/posts/${slug}/${image}`
    const linkPath = `/posts/${slug}`

    return (
        <li className={classes.post}>
            <Link href = {linkPath}>
                <a>
                    <div className={classes.image}>
                        <img 
                            src = {imagePath} 
                            alt={title} 
                            width = {400} 
                            height = {250}
                            layout = 'responsive'
                            />
                    </div>
                    <div className={classes.content}>
                        <h3>{title}</h3>
                        <time>{formattedDate}</time>
                        <p>{excerpt}</p>
                    </div>
                </a>
            </Link>
        </li>
    );
};

export default PostItem;