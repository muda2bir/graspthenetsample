import styles from "../styles/BlogPost.module.css";

const About = () => {
  return (
    <>
      <div className={styles.blogPost_container}>
        <h1 className={styles.title_of_the_blog} style={{ color: "red" }}>
          About GraspTheNet
        </h1>
        <hr />
        <div className={styles.content_of_blog}>
          <h2 style={{ textDecoration: "underline" }}>Introduction</h2>
          <div className={styles.blog_paras}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            earum tempora ducimus eaque necessitatibus, numquam dolorum totam,
            quia at nemo quis natus molestias alias ex nesciunt debitis facere
            saepe nihil sequi possimus qui vitae odio. Deleniti perspiciatis qui
            et tenetur architecto facere ab, minima quo magnam deserunt aliquid
            quibusdam nisi itaque exercitationem sequi odio id iste!
          </div>
          <h2 style={{ textDecoration: "underline" }}>Services Offered</h2>
          <div className={styles.blog_paras}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            earum tempora ducimus eaque necessitatibus, numquam dolorum totam,
            quia at nemo quis natus molestias alias ex nesciunt debitis facere
            saepe nihil sequi possimus qui vitae odio. Deleniti perspiciatis qui
            et tenetur architecto facere ab, minima quo magnam deserunt aliquid
            quibusdam nisi itaque exercitationem sequi odio id iste!
          </div>
          <div className={styles.blog_paras}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            earum tempora ducimus eaque necessitatibus, numquam dolorum totam,
            quia at nemo quis natus molestias alias ex nesciunt debitis facere
            saepe
          </div>
          <h2 style={{ textDecoration: "underline" }}>Contact us</h2>
          <div className={styles.blog_paras}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magnam,
            earum tempora ducimus eaque necessitatibus, numquam dolorum totam,
            quia at nemo quis natus molestias alias ex nesciunt debitis facere
            saepe nihil sequi possimus qui vitae odio. Deleniti perspiciatis qui
            et tenetur architecto facere ab, minima quo magnam deserunt aliquid
            quibusdam nisi itaque exercitationem sequi odio id iste!
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
