import React, { useCallback, useEffect, useState } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import AutoScroll from 'embla-carousel-auto-scroll'
import { NextButton, PrevButton, usePrevNextButtons } from '../components/BlogCarousalButtons'
import { blogPosts as slides } from '../assets/utils'


const EmblaCarousel = () => {
const options = { loop: true }

  const [emblaRef, emblaApi] = useEmblaCarousel(options, [
    AutoScroll({ playOnInit: false })
  ])
  const [isPlaying, setIsPlaying] = useState(false)

  const { 
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi)

  const onButtonAutoplayClick = useCallback(
    (callback) => {
      const autoScroll = emblaApi?.plugins()?.autoScroll
      if (!autoScroll) return

      const resetOrStop =
        autoScroll.options.stopOnInteraction === false
          ? autoScroll.reset
          : autoScroll.stop

      resetOrStop()
      callback()
    },
    [emblaApi]
  )

  const toggleAutoplay = useCallback(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    const playOrStop = autoScroll.isPlaying()
      ? autoScroll.stop
      : autoScroll.play
    playOrStop()
  }, [emblaApi])

  useEffect(() => {
    const autoScroll = emblaApi?.plugins()?.autoScroll
    if (!autoScroll) return

    setIsPlaying(autoScroll.isPlaying())
    emblaApi
      .on('autoScroll:play', () => setIsPlaying(true))
      .on('autoScroll:stop', () => setIsPlaying(false))
      .on('reInit', () => setIsPlaying(autoScroll.isPlaying()))
  }, [emblaApi])

  return (
    <>
   
    <div className="embla max-w-[85vw] mt-20  mx-auto " id='blog'>
    <div className='  text-pink-500 font-medium text-center'>    
        Insider and Trends*
    </div>
    <div className='mb-10 text-4xl font-medium text-center'>    
        Our blog
    </div>
      <div className="embla__viewport grid"  ref={emblaRef}>
        <div className="embla__container ">
          {slides?.map((blog) => (
            <div key={blog.id} className='embla__slide '>
            <img src={blog.image} className='rounded-3xl w-full' style={{height: "200px"}} />

            <div className=' mt-2 flex justify-between'>
              <div className='font-medium  text-xs text-gray-500'>{blog.category}</div>
              <div className='font-medium text-xs text-gray-400'>{blog.date}</div>
            </div>

            <div className='mt-3 text-2xl'>
             {blog.title.substring(0,45).trimEnd()+"..."}
            </div>

            <div className='mt-4 text-pink-500 bg-pink-100 text-xs py-2 px-2 w-[120px] text-center rounded-3xl'>
              {blog.tag}
            </div>
           </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="grid grid-cols-2 gap-4 ">
          <PrevButton
            onClick={() => onButtonAutoplayClick(onPrevButtonClick)}
            disabled={prevBtnDisabled}
          />
          <NextButton
            onClick={() => onButtonAutoplayClick(onNextButtonClick)}
            disabled={nextBtnDisabled}
          />
        </div>

        {/* <button className="embla__play" onClick={toggleAutoplay} type="button">
          {isPlaying ? 'Stop' : 'Start'}
        </button> */}
      </div>
    </div>
    </>
  )
}

export default EmblaCarousel
