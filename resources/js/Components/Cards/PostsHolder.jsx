import { useEffect, useState } from "react";
import SecondaryButton from "../SecondaryButton";
import CodeCard from "./CodeCard";

export default function PostsHolder({ posts }) {
    const [postsGrid, setPostsGrid] = useState([[], []]);

    useEffect(() => {
        setPostsGrid([
            posts.filter((item, index) => index % 2 === 0),
            posts.filter((item, index) => index % 2 !== 0)
        ])
    }, [])

    return (
        <div>
            <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-8">
                    {
                        postsGrid[0].map((post) => (
                            <CodeCard
                                key={post.id}
                                user={post.user}
                                content={post.content}
                                language={post.language}
                                code={post.code}
                            />
                        ))
                    }
                </div>
                <div className="space-y-8">
                    {
                        postsGrid[1].map((post) => (
                            <CodeCard
                                key={post.id}
                                user={post.user}
                                content={post.content}
                                language={post.language}
                                code={post.code}
                            />
                        ))
                    }
                </div>
            </div>

            <div className="flex justify-center mt-10">
                <SecondaryButton>View more</SecondaryButton>
            </div>
        </div>
    );
}