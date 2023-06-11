import Head from 'next/head';
import Image from 'next/image'
export default async function Home({params}) {
    let res = await fetch('https://bunkpe.com/wp-json/wp/v2/posts?search='+decodeURIComponent(params.id))
    let posts = await res.json();
    async function fetchImage(id){
        if(id != 0){
          let resp = await fetch('https://bunkpe.com/wp-json/wp/v2/media/'+id)
          let img = await resp.json();
          return img.link;
        }
        return id;
    }
    let data = [];
    async function createData(){
        for (const iterator of posts) {
            let postData = [];
            postData['title'] = iterator.title.rendered;
            postData['des'] = posts[0].content.rendered;
            postData['img'] = await fetchImage(iterator.featured_media);
            
            data.push(postData);
        }
    }
    await createData()
    return(
        <>
            <Head>
                <title>My page title</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <div className="relative z-0 flex min-h-[calc(100vh-30vh)] items-center">
                <div className="absolute -z-10 h-full w-full before:absolute before:z-10 before:h-full before:w-full before:bg-black/30">
                    <img src={data[0]?.img} className="object-cover transition-all absolute h-full w-full" />
                </div>
                <div className="mx-auto max-w-screen-md px-5 py-20">
                    <h1 className="text-brand-primary mb-3 mt-2 text-3xl font-semibold tracking-tight text-white lg:text-5xl lg:leading-tight">
                        {data[0].title}
                    </h1>
                </div>
            </div>
            <div className="container px-8 mx-auto xl:px-5  max-w-screen-lg py-5 lg:py-8">
                <article className="mx-auto max-w-screen-md ">
                    <div className="prose prose-lg mx-auto my-3 dark:prose-invert prose-a:text-blue-500">
                        <div dangerouslySetInnerHTML={{ __html: data[0].des }}></div>
                    </div>
                </article>
            </div>
        </>
    )
}
export async function generateMetadata({ params }) {
    let res = await fetch('https://bunkpe.com/wp-json/wp/v2/posts?search='+decodeURIComponent(params.id))
    let posts = await res.json();
    let text = posts[0].excerpt.rendered.replace(/<\/?[^>]+(>|$)/g, "")
    return {
      title: decodeURIComponent(posts[0].title.rendered),
      description:text
    };
}