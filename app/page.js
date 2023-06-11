import Image from 'next/image'
import Link from 'next/link';

export default async function Home() {
  let i = 0;
  let res = await fetch('https://bunkpe.com/wp-json/wp/v2/posts')
  // console.log(posts.headers.get('X-WP-TotalPages'));
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
      postData['img'] = await fetchImage(iterator.featured_media);
      
      data.push(postData);
    }
  }
  await createData()
  return (

    <main className="flex min-h-screen flex-col items-center justify-between">
      <div className="grid md:grid-cols-2 bg-amber-600 gap-5 md:gap-10 md:min-h-[calc(100vh-30vh)]" >
        <div className="relative aspect-video md:aspect-auto">
          <Link href="#">
            <img alt="Thumbnail" src='/header.jpg' loading="lazy" className="object-cover w-full h-full absolute" />
          </Link>
        </div>
        <div className="self-center px-5 pb-10">
          <a>
            <div className="max-w-2xl">
              <h1 className="mt-2 mb-3 text-3xl font-semibold tracking-tight text-white lg:leading-tight text-brand-primary lg:text-5xl">Welcome to Bunk Pe, where digital marketing and web development meet excellence!</h1>
              <div className="flex mt-4 space-x-3 text-gray-500 md:mt-8 ">
                <div className="flex flex-col gap-3 md:items-center md:flex-row">
                  <div className="flex items-center gap-3">
                    <div className="relative flex-shrink-0 w-5 h-5">
                      {/* <img alt="Mario Sanchez" loading="lazy" src='https://images.pexels.com/photos/1758144/pexels-photo-1758144.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' className="object-cover rounded-full"  /> */}
                    </div>
                    <p className="text-gray-100 ">Captivate. Engage. Succeed. <span className="hidden pl-2 md:inline"> ·</span>
                    </p>
                  </div>
                  <div>
                    <div className="flex space-x-2 text-sm md:flex-row md:items-center">
                      <time className="text-white" dateTime="2022-10-21T06:05:00.000Z">Unlock Your Business's Digital Potential.</time>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="container px-8 mx-auto xl:px-5  max-w-screen-xl py-5 lg:py-8">
        <div className="flex items-center justify-center mt-10">
          <h2 className="text-2xl">
            <strong>Featured</strong> Posts
          </h2>
        </div>
        <div className="grid gap-10 mt-10 mb-20 lg:gap-10 md:grid-cols-3 lg:grid-cols-4 ">
          {
            data.map((singleData)=>{
              {
                return(i==0?
                  <div key={singleData.title+i} className="md:col-span-2 md:row-span-2">
                  <div className="group cursor-pointer">
                    <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105   dark:bg-gray-800">
                      <Link className="relative block aspect-[5/4]" href={"posts/"+singleData.title}>
                        <img src={singleData.img} className="object-cover transition-all absolute h-full w-full" />
                      </Link>
                    </div>
                    
                    <div className="">
                      <div>
                        <h2 className="text-2xl line-clamp-2 font-medium  tracking-normal text-black mt-2    dark:text-white">
                          <p className='hidden'>{++i}</p>
                          <Link href={"posts/"+singleData.title}>
                            <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">{singleData.title}</span>
                          </Link>
                        </h2>
                      </div>
                    </div>
                  </div>
                </div>
              :
                <div key={singleData.title+i} className="group cursor-pointer">
                  <div className=" overflow-hidden rounded-md bg-gray-100 transition-all hover:scale-105 dark:bg-gray-800">
                    <Link href={"posts/"+singleData.title} className="relative block aspect-video" >
                      <img src={singleData.img} className="object-cover transition-all absolute h-full w-full" />
                    </Link>
                  </div>
                  <div className="">
                    <div>
                      <h2 className="text-lg line-clamp-2 font-medium  tracking-normal text-black mt-2    dark:text-white">
                        <Link href={"posts/"+singleData.title}>
                          <span className="bg-gradient-to-r from-green-200 to-green-100 bg-[length:0px_10px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 hover:bg-[length:100%_3px] group-hover:bg-[length:100%_10px] dark:from-purple-800 dark:to-purple-900">{singleData.title}</span>
                        </Link>
                      </h2>
                    </div>
                  </div>
                </div>
              )
            }
              
            })
          }
        </div>
      </div>
    </main>
  )
}
