import landingImg from '../assets/Group 3.png'
import { Link } from 'react-router'
import { useState, useEffect, useRef } from 'react'
import sectionData from '../data/aboutSections'
import AboutSection from '../components/sections'
import MainTitle from '../components/mainTitle'
import { text } from '@fortawesome/fontawesome-svg-core'

const Home = () => {
  const icons = [
  {
    imgURL: 'gymPhotos/dumbbell.svg',
    text: 'زيادة سريعة في العضلات',
    description: 'ابنِ القوة وزد كتلة العضلات بسرعة من خلال تمارين مستهدفة.'
  },
  {
    imgURL: 'gymPhotos/stationary-bike.svg',
    text: 'كارديو وفقدان الوزن',
    description: 'احرق السعرات الحرارية بفعالية وحسّن صحة قلبك من خلال جلسات كارديو منظمة.'
  },
  {
    imgURL: 'gymPhotos/nutrition.svg',
    text: 'خطة وجبات مخصصة',
    description: 'احصل على خطة تغذية شخصية مصممة وفق أهدافك الصحية ونمط حياتك.'
  },
  {
    imgURL: 'gymPhotos/leadership.svg',
    text: 'تدريب خاص',
    description: 'احصل على توجيه فردي وتحفيز لتحقيق أهدافك الرياضية بسرعة أكبر.'
  }
];

      const [isVisible, setIsVisible] = useState(false)
      const itemRef = useRef(null)

      useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
          if (entries[0].isIntersecting) {
            setIsVisible(true)
          }
        }, {threshold: 0})
        observer.observe(itemRef.current)
      }, [])


  return (
    <main>
        <section
          className="h-screen relative bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: "url('/landing.jpg')" }}
        >
          <div className="overlay absolute inset-0 bg-dark/50"></div>
          <div className="banner w-[80%] absolute left-1/2 top-1/2 -translate-1/2 h-64 py-5 flex flex-col justify-between text-center">
            <div className="mainText font-bold">
              <h1 className='text-4xl mb-3 text-red-hot'>كل هدف لازم ليه بدايه</h1>
              <h2 className='text-3xl text-gray-100'>خد الفرصه و ابدا معانا لصحه أفضل!</h2>
            </div>
            <Link to="/contact"><button className='text-3xl bg-red-hot rounded-full hover:bg-blue-800 transition text-white w-10/12 py-2 lg:py-4 text-center mx-auto cursor-pointer relative before:absolute before:w-3 before:h-3 before:bg-red-hot before:rounded-full before:content-["!"] before:text-[8px] before:left-0 before:top-0 before:animate-ping before:flex before:justify-center before:items-center'>أتصل بينا!</button></Link>
          </div>
        </section>

        <section className="why-us grid grid-cols-1 md:grid-cols-2">
          {icons.map((ele, index) => {
            return (
            <div key={index} ref={itemRef} className={`gym-icon w-full transition-all duration-300 text-gray-100 gap-5 p-5 flex-col flex justify-center items-center ${isVisible ? "translate-y-0 opacity-100" : "-translate-y-2 opacity-0"}`}>
              <img src={ele.imgURL} className='w-56 h-56 fill-current' alt="" />
              <h3 className='text-3xl font-bold'>{ele.text}</h3>
              <p className='text-center'>{ele.description}</p>
            </div>
            )
          })}
        </section>

        <div className={`aboutInfo transition-all duration-500`} >
          <MainTitle context="شويه عننا" />
          {sectionData.map((ele, index) => {
            const remaining = index % 2;
            const white = remaining === 1 ? true : false;
            return <AboutSection data={ele} key={index} white={white}/>
          })}
        </div>
    </main>
  )
}

export default Home
