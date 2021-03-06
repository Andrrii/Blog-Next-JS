import fs from 'fs';
import path from 'path';
import matter from 'gray-matter'

const postsDirectory = path.join(process.cwd(),'content','posts') // Формуєм поточну директорію

function getPostData(filename) {
    const filePath = path.join(postsDirectory,filename)
    const fileContent = fs.readFileSync(filePath,'utf-8')
    const {data,content} = matter(fileContent)

    const postSlug = filename.replace(/\.md$/,'') // removes the file extension

    const postData = {
        slug: postSlug,
        ...data,
        content
    }

    return postData
}

export function getAllPosts() {
    const postFiles = fs.readdirSync(postsDirectory)

    const allPosts = postFiles.map(postFile => getPostData(postFile))

    const sortedPosts = allPosts.sort((postA, postB) => postA.date > postB.date ? -1 : 1)
    
    return sortedPosts
}

export function getFeaturedPosts() {
    const allPosts = getAllPosts()

    const featuredPosts = allPosts.filter(post => post.isFeatured )

    return featuredPosts
}