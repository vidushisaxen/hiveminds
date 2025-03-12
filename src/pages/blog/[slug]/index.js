import Layout from "@/components/Layout";
import { fadeIn, fadeUp, headingBlur, lineAnim, paraAnim } from '@/components/gsapAnimations'
import RelatedBlogs from '@/components/BlogDetail/RelatedBlogs';
import { getPostBySlug, getRecentPosts } from "@/lib/blogs";
import Content from "@/components/BlogDetail/Content";
import BlogHero from "@/components/BlogDetail/BlogHero";

export default function BlogDetail({ post }) {
    fadeIn();
    fadeUp();
    headingBlur();
    lineAnim();
    paraAnim();

    const {
        content,
        title,
        date,
        categories,
        slug,
        excerpt,
        featuredImage,
    } = post;

    return (
        <>
            <Layout>
                <BlogHero
                    title={title} 
                    excerpt={excerpt} 
                    featuredImg={featuredImage} 
                    category={categories[0].name} 
                />
                <Content date={date} slug={slug} content={content} />
                <RelatedBlogs />
            </Layout>
        </>
    )
}

export async function getStaticProps({ params = {} }) {
    const { slug: postSlug } = params;
    const { post } = await getPostBySlug(postSlug);

    if (!post) {
        return {
            props: {},
            notFound: true,
        };
    }

    const props = {
        post,
    }

    return {
        props,
        revalidate: 500,
    };
}

export async function getStaticPaths() {
    const { posts } = await getRecentPosts({
        count: process.env.POSTS_PRERENDER_COUNT,
    });

    const paths = posts
        .filter(({ slug }) => typeof slug === 'string')
        .map(({ slug }) => ({
            params: {
                slug: slug,
            },
        }));

    return {
        paths,
        fallback: 'blocking',
    };
}