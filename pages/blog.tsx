import styles from "../styles/Blog.module.css";
import Link from "next/link";
import * as fs from "fs";
import { GetStaticProps } from "next";
import { useState } from "react";
import Head from "next/head";
import InfiniteScroll from "react-infinite-scroll-component";

interface blogData {
  title: string;
  content: string;
  author: string;
  metaDesc: string;
  slug: string;
}

interface Props {
  allBlogs: blogData[];
}

const Blog = (props: Props) => {
  const [blogs, setBlogs] = useState<blogData[]>(props.allBlogs);

  return (
    <>
      <Head>
        <title>Latest Blogs | GraspTheNet</title>
      </Head>
      <div className={styles.blogs}>
        <h2 className={styles.main_heading}>Latest Blogs</h2>
        <div className={styles.blog_container}>
          {blogs.map((blog) => {
            return (
              <Link key={blog.slug} href={`/blogpost/${blog.slug}`}>
                <a>
                  <div className={styles.blogItem}>
                    <h1 className={styles.blog_title}>{blog.title}</h1>
                    <p>{blog.metaDesc.substr(0, 195)}....</p>
                  </div>
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async (context: object) => {
  try {
    let data: string[] = await fs.promises.readdir("blogdata");
    let myFile: string;
    let allBlogs: blogData[] = [];
    for (let i = 0; i < data.length; i++) {
      const item = data[i];
      myFile = await fs.promises.readFile(`blogdata/${item}`, "utf-8");
      allBlogs.push(JSON.parse(myFile));
    }
    return {
      props: { allBlogs },
    };
  } catch (err) {
    console.log(err);
  }
};

export default Blog;
