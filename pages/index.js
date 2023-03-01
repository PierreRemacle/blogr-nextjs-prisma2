import React from "react";
import Layout from "../components/Layout";
import Post from "../components/Post";
import prisma from '../lib/prisma';
import styles from '../components/layout.module.css';
import Link from 'next/link';


export const getStaticProps = async () => {
  const feed = await prisma.courses.findMany();
  feed.forEach((post) => {
    post.date = post.date.toString();
  });

  return {
    props: { feed },
    revalidate: 10,
  };
};

const Blog = (props) => {
  return (
    
    
    <Layout>
      <nav className={styles.topnav}>
            
            <Link href="/">Home</Link>
            <Link href="reservation">Reservation</Link>
            <Link href="transition">Transition</Link>
            <Link href="students" className={styles.selected}>Students</Link>
            <Link href="ListOfReservation">Table</Link>
    
        </nav>
      <div className="page">
        <h1>Public Feed</h1>
        <main>
          {props.feed.map((post) => (
            <div key={post.id} className="post">
              <Post post={post} />
            </div>
          ))}
        </main>
      </div>
      <style jsx>{`
        .post {
          background: white;
          transition: box-shadow 0.1s ease-in;
        }

        .post:hover {
          box-shadow: 1px 1px 3px #aaa;
        }

        .post + .post {
          margin-top: 2rem;
        }
      `}</style>
    </Layout>
  );
};

export default Blog;
