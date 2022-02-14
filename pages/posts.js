export const getStaticProps = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts/')
    const data = await res.json()
        
    return {
        props: { posts: data }
    } 
}

const Posts = ({ posts }) => {
    return (
        <div>
            <h1>Posts</h1>
            {posts.map(post =>(
                <div key={post.id}>
                    <a>
                        <h3>{post.title}</h3>
                    </a>
                </div>
            ))}
        </div>

    )
}

export default Posts