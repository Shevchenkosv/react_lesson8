import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux"
import { loadPosts } from "./redux/reducers/postsReducer";
import { postsSelector } from "./redux/reducers/postsSelector";




const Posts = () => {
    const dispatch = useDispatch();
    const posts = useSelector(postsSelector)
    const loading = useSelector(state => state.posts.loading)
    const error = useSelector(state => state.posts.error)

    useEffect(() => {
        dispatch(loadPosts())
    }, [])

    const handleError = () => {
        dispatch(loadPosts())
    }

    if (loading) {
        return (
            <div>
                <h3>Идет загрузка сайта...</h3>
            </div>
        )
    }

    if (error) {
        return (
            <div>
                Произошла ошибка.Повторите попытку
                <button onClick={handleError}>Повторить</button>
            </div>
        )
    }
    return (
        <div>
            {
                posts.map((post) => {
                    return (
                        <div key={post.id}>
                            <li>
                                {post.title}
                            </li>
                        </div>
                    )
                }

                )
            }

        </div>
    );

};

export default Posts;