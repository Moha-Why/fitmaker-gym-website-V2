import React from 'react'
import MainTitle from '../components/mainTitle.jsx'
import Trainer from '../components/trainer.jsx'
import trainers from '../data/trainers.js'

const About = () => {
  const gymImages = [
    {
      imgURL: '/gymPhotos/imageOne.jpg',
      alt: "Gym Photo"
    },
    {
      imgURL: '/gymPhotos/imageTwo.jpg',
      alt: "Gym Photo"
    },
    {
      imgURL: '/gymPhotos/imageThree.jpg',
      alt: "Gym Photo"
    },
    {
      imgURL: '/gymPhotos/imageFour.jpg',
      alt: "Gym Photo"
    },
    {
      imgURL: '/gymPhotos/imageFive.jpg',
      alt: "Gym Photo"
    },
    {
      imgURL: '/gymPhotos/imageSix.jpg',
      alt: "Gym Photo"
    },
  ]

  return (
    <>
    <div
      className="about-hero h-screen relative bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: "url('/landing.jpg')" }}
    >
      <div className="overlay absolute inset-0 bg-dark/50"></div>
      <div className="context w-full px-10 lg:px-20 absolute leading-[1.6] left-1/2 top-7/12 -translate-1/2 text-center text-gray-100 text-lg">
        <h1 className='text-red-hot text-5xl mb-5 font-bold'>احنا مين</h1>
          <p>
            في FitMaker، رؤيتنا بسيطة وواضحة: نساعدك تصنع النسخة الأقوى من نفسك. إحنا مش مجرد جيم… إحنا بيئة متكاملة للّياقة، مجهزين بأحدث الأجهزة، وأفضل المدربين، ومساحات تدريب مريحة ومصممة بعناية علشان تديك أفضل تجربة ممكنة.
            إحنا معاك خطوة بخطوة… من أول يوم لحد لما توصل لهدفك وتحقق النتائج اللي تستحقها.
          </p>
          <button className='px-8 py-2 bg-red-hot text-2xl text-gray-100 block mx-auto my-8 transition duration-300 cursor-pointer hover:bg-blue-800'><a href="/contact">انضم لينا!</a></button>
        </div>
    </div>

    <section className="w-full py-10">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-white text-center mb-6">Our Gym Gallery</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {gymImages.map((ele, index) => {
            return (
              <div key={index} className="group relative overflow-hidden rounded-xl">
                <img
                  src={ele.imgURL}
                  alt={ele.alt}
                  className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
              </div>
            )
          })}

          {/* <div class="group relative overflow-hidden rounded-xl">
            <img
              src="/gymPhotos/imageTwo.jpg"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div>

          <div class="group relative overflow-hidden rounded-xl">
            <img
              src="/gymPhotos/imageThree.jpg"
              class="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
            />
            <div class="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-500"></div>
          </div> */}

        </div>
      </div>
    </section>


    <div className="trainers bg-dark p-2 ">
      <MainTitle context="مدربينا الافاضل" white={true} />
      <div className="trainerCards flex items-center gap-5 flex-wrap md:flex-nowrap p-5">
        {trainers.map((ele, index) => <Trainer data={ele} key={index} />)}
      </div>
    </div>
    </>
  )
}

export default About
