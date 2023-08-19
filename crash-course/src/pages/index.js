import Head from "next/head"
import ArticleList from "@/components/ArticleList";

export default function Home({ articles }) {

  // console.log("From main index.js: ", articles); 

  return (
    <>

    <Head>
      <title> Next</title>
    </Head>
    
    <main className="text-center mt-10">    
      <h1> Welcome to Next </h1> 
      <a href="/routing" className='text-blue-300 underline'> Routing </a>   
      <ArticleList articles={articles}/>

    </main>
    </>
  )
}

export const getStaticProps = async () => {        // used to fetch data at build time
  const res = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=6");
  const articles = await res.json();

  return {
    props: {        // these props are returned to this page, which we then passed as prop to our
      articles      // ArticleList component
    }
  }
}