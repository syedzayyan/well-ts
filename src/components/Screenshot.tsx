import { useCallback } from 'react';
import { toPng, toSvg } from 'html-to-image';


const Screenshot: React.FC<{ refProp: React.RefObject<HTMLDivElement>, title_string: string }> = ({ refProp, title_string }) => {

    const pngGrabber = useCallback(() => {
        if (refProp.current === null) {
          return
        }
    
        toPng(refProp.current, { cacheBust: true, })
          .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = title_string + '.png'
            link.href = dataUrl
            link.click()
          })
          .catch((err) => {
            console.log(err)
          })
      }, [refProp, title_string])

      const svgGrabber = useCallback(() => {
        if (refProp.current === null) {
          return
        }
    
        toSvg(refProp.current, { cacheBust: true, })
          .then((dataUrl) => {
            const link = document.createElement('a')
            link.download = title_string + '.svg'
            link.href = dataUrl
            link.click()
          })
          .catch((err) => {
            console.log(err)
          })
      }, [refProp, title_string])
    return(
        <>
         <button className='btn' onClick={pngGrabber}>Screenshot to PNG</button>&nbsp;
         <button className='btn' onClick={svgGrabber}>Screenshot to SVG</button>
        </>
    )
}

export default Screenshot