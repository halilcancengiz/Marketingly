import { Helmet } from 'react-helmet'
import Button from '../components/Button'
import { NavLink } from 'react-router-dom'


const NotFound = () => {
    return (

        <div className='3xl:py-[220px] lg:py-[176px] md:py-[140px] py-[113px] bg-secondary1 flex flex-col items-center justify-center px-6 relative overflow-hidden'>
            <Helmet>
                <title>404 - Seite nicht gefunden | MARKETINGLY X</title>
                <meta name="description" content="Die gesuchte Seite ist nicht verfügbar. Bitte gehen Sie zurück zur Startseite oder nutzen Sie die Navigation." />
                <meta property="og:title" content="404 - Seite nicht gefunden" />
                <meta property="og:description" content="Oh, es scheint so, als ob da etwas schiefgelaufen ist. Gehen Sie zurück zur Startseite." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content={`${import.meta.env.VITE_BASE_URL}not-found`} />
                <meta name="robots" content="noindex, nofollow" />
            </Helmet>
            <div className='flex flex-col z-[2]'>
                <div className='text-center md:text-[164px] md:leading-[131px] xs:text-[131px] xs:leading-[104px] text-[105px] leading-[84px] lg:mb-[50px] md:mb-10 xs:mb-[30px] mb-5 tb-bold text-white transition-all duration-300'>
                    404
                </div>
                <div className='text-center lg:text-[54px] md:text-[45px] xs:[38px] text-[32px] text-white tb-bold transition-all duration-300'>
                    Die Seite ist nicht verfügbar!
                </div>
                <div className='text-center text-white tb-medium text-[18px] mb-10 transition-all duration-300'>
                    Oh, es scheint so, als ob da etwas schiefgelaufen ist.
                </div>
                <NavLink className="mx-auto" to="/">
                    <Button className='bg-white !text-primary tb-bold hover:!text-white hover:bg-secondary3' variant='primary' size='default'>Zurück</Button>
                </NavLink>
            </div>


            <div className='absolute w-full h-full z-[1]'>
                <div className='absolute left-0 top-0 w-[25%] max-w-[280px] bg-transparent'>
                    <div className='w-full max-w-[280px] aspect-square bg-primary'>

                    </div>
                    <div style={{ clipPath: "polygon(100% 0, 0 100%, 100% 100%)" }} className='w-full max-w-[280px] aspect-square bg-secondary4'>

                    </div>
                </div>
                <div className='absolute right-0 top-0 w-[25%] max-w-[280px] bg-transparent'>
                    <div className='w-full max-w-[280px] aspect-square bg-primary'>

                    </div>
                </div>
                <div className='rounded-full aspect-square overflow-hidden w-[25%] max-w-[280px] absolute 3xl:top-[33.5%] top-auto 3xl:bottom-auto bottom-0  right-0'>
                    <div className='w-full h-full relative'>
                        <div className='absolute bottom-0 right-0 bg-secondary4 z-[2] w-1/2 h-full transform text-white'></div>
                        <div className='absolute bottom-0 bg-secondary3 z-[1] w-full h-1/2  text-white'></div>
                    </div>
                </div>
                <div className='absolute left-0 lg:-bottom-[35%] -bottom-[25%] -translate-y-1/2 w-[25%] max-w-[307px] aspect-square rounded-full bg-secondary2'></div>
            </div>

        </div>
    )
}

export default NotFound