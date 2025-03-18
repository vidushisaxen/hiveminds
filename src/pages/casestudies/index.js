import BlogListing from "@/components/Blog/BlogListing"
import FeaturedBlog from "@/components/Blog/FeaturedBlog"
import Hero from "@/components/Hero"
import Layout from "@/components/Layout"
import { getPaginatedPosts, sortStickyPosts } from "@/lib/blogs"
import img from '../../../public/assets/images/blogpage/blog-listing-hero.png'
import { fadeIn, fadeUp, headingBlur, paraAnim } from '@/components/gsapAnimations'

export default function Blogs({ posts, featuredPost, pagination }) {

    headingBlur();
    paraAnim();
    fadeUp();
    fadeIn();

    return (
        <>
            <Layout>
                <Hero title1={"What's"} title2={"Buzzing"} para={"Leveraging data-driven insights and technical expertise, HiveMinds crafts SEO solutions that elevate digital visibility and drive measurable results, turning organic searches into valuable customer relationships."} img={img} />
                {featuredPost && (
                    <FeaturedBlog post={featuredPost} />
                )}    
                <BlogListing posts={posts} pagination={pagination} />
            </Layout>
        </>
    )
}

export async function getStaticProps({ params }) {
    const { slug } = params || {};
    let { posts, pagination } = await getPaginatedPosts();
    if (slug) {
        const { posts: filteredPosts, pagination: filteredPagination } = await getPaginatedPosts({
            categoryId: slug,
        });
        posts = filteredPosts;
        pagination = {
            ...filteredPagination,
            basePath: `/casestudies/${slug}/page`,
        };
    }

    return {
        props: {
            posts,
            pagination: {
                ...pagination,
                basePath: slug ? `/casestudies/${slug}/page` : '/blog',
            },
        },
        revalidate: 500,
    };
}