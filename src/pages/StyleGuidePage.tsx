import Button from '../components/Button'

export const StyleGuidePage = () => {
    return (
        <div className='flex flex-col gap-2'>
            <div className='flex items-center  gap-2'>
                <div className='size-24 bg-primary text-white flex items-center justify-center'>Primary</div>
                <div className='size-24 bg-secondary1 text-white flex items-center justify-center'>Secondary1</div>
                <div className='size-24 bg-secondary2 text-white flex items-center justify-center'>Secondary2</div>
                <div className='size-24 bg-secondary3 text-white flex items-center justify-center'>Secondary3</div>
                <div className='size-24 bg-secondary4 text-white flex items-center justify-center'>Secondary4</div>
            </div>
            <div className='flex items-center gap-2'>
                <div className='size-24 bg-neutral-800 text-white flex items-center justify-center'>neutral-800</div>
                <div className='size-24 bg-neutral-700 text-white flex items-center justify-center'>neutral-700</div>
                <div className='size-24 bg-neutral-600 text-white flex items-center justify-center'>neutral-600</div>
                <div className='size-24 bg-neutral-500 text-white flex items-center justify-center'>neutral-500</div>
                <div className='size-24 bg-neutral-400 text-white flex items-center justify-center'>neutral-400</div>
                <div className='size-24 bg-neutral-300 text-white flex items-center justify-center'>neutral-300</div>
                <div className='size-24 bg-neutral-200 text-white flex items-center justify-center'>neutral-200</div>
                <div className='size-24 bg-neutral-100 text-white flex items-center justify-center'>neutral-100</div>
            </div>
            <div className='flex items-end gap-2'>
                <div>
                    <Button size='small' variant='primary'>small</Button>
                </div>
                <div>
                    <Button size='default' variant='primary'>default</Button>
                </div>
                <div>
                    <Button size='large' variant='primary'>Large</Button>

                </div>
            </div>
            <div className='flex items-end gap-2'>
                <div>
                    <Button size='small' variant='secondary'>small</Button>
                </div>
                <div>
                    <Button size='default' variant='secondary'>default</Button>
                </div>
                <div>
                    <Button size='large' variant='secondary'>Large</Button>
                </div>
            </div>
        </div>
    )
}