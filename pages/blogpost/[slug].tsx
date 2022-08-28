import Head from "next/head";
import styles from "../../styles/BlogPost.module.css";
import { useState } from "react";
import * as fs from "fs";
import { GetStaticProps, GetStaticPaths } from "next";
import { InferGetStaticPropsType } from "next";

interface blogData {
  title: string;
  content: string;
  author: string;
  metaDesc: string;
  slug: string;
}

interface Props {
  [key: string]: blogData;
}

const Slug = (props: Props) => {
  console.log(props);
  function createMarkup(c: string) {
    return { __html: c };
  }
  const [blog, setBlog] = useState<blogData>(props.myBlog);
  const title = `${blog.title} | GraspTheNet`;
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <div className={styles.blogPost_container}>
        <h1 className={styles.title_of_the_blog}>{blog.title}</h1>
        <hr />
        <div className={styles.content_of_blog}>
          {
            <div
              dangerouslySetInnerHTML={createMarkup(blog.content)}
              className={styles.blog_paras}
            ></div>
          }
        </div>
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  try {
    let data: string[] = await fs.promises.readdir("blogdata");
    const files = [];
    const removeFileExtension = (filename: string) => {
      return filename.substring(0, filename.lastIndexOf(".")) || filename;
    };
    for (let i = 0; i < data.length; i++) {
      files.push({ params: { slug: removeFileExtension(data[i]) } });
    }
    return {
      paths: files,
      fallback: true,
    };
  } catch (error) {
    console.log(error);
  }
};

export const getStaticProps: GetStaticProps = async (context: any) => {
  try {
    const { slug } = context.params;
    let myBlog = await fs.promises.readFile(`blogdata/${slug}.json`, "utf-8");
    let blog = JSON.parse(myBlog);
    return {
      props: { myBlog: blog },
    };
  } catch (error) {
    console.log(error);
  }
};

export default Slug;
