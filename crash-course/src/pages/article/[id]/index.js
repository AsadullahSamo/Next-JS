import { useRouter } from 'next/router'
import React from 'react'

export default function article({ article }) {

        // This is for getStaticProps
  // const router = useRouter();
  // const id = router.query.id;      
  // console.log(id);
  // <span className='text-blue-300 flex justify-center'> This is article {id} </span>       


      // This is for getServerSideProps
  // <div className='mt-10 flex items-center flex-col'>
  //     <h1 className='flex text-center text-blue-400 text-[30px]'> {article.title} </h1>
  //     <p className='text-center max-w-[300px]'>  {article.body} </p>
  //     <br />
  //   </div>
  
  
  // For nested routing(like in this case, where file name is [id]) either use getServerSideProps OR combination of getStaticProps and getStaticPaths
  return (
    // This is for getStaticPaths
    <>
      <span className='text-blue-300 flex justify-center'> This is article {article.id} </span>       
      
      <div className='mt-10 flex items-center flex-col'>
        <h1 className='flex text-center text-blue-400 text-[30px]'> {article.title} </h1>
        <p className='text-center max-w-[300px]'>  {article.body} </p>
        <br />
      </div>
    </>

    
    
  )
}

            // data will be fetched in each request using getServerSideProps
// export const getServerSideProps = async (context) => {      // context in (getServerSideProps and getStaticProps) helps in getting id of url
//   console.log(context.params) 
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);      // fetch data of id received by url
//   const article = await res.json();

//   return {
//     props: {
//       article
//     }
//   }

// }

export const getStaticProps = async (context) => {      // context in (getServerSideProps and getStaticProps) helps in getting id of url
  console.log(context.params) 
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`);      // fetch data of id received by url
  const article = await res.json();

  return {
    props: {
      article
    }
  }

}

export const getStaticPaths = async () => {
   const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);      // fetch data of id received by url
   const articles = await res.json();

   const ids = articles.map(article => article.id);
   const paths = ids.map(id => (
    {params: {id: id.toString()}}
   ))
   return {
    // paths: {params: {id: '1', id: '2'}}      // Instead of doing this we can simplify it using code from line 33 to
    paths,           // same as paths: paths,
    fallback: false
   }

}